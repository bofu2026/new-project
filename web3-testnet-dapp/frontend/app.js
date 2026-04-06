(function () {
  const { ethers } = window;
  const config = window.APP_CONFIG || {};
  const requiredChainId = Number(config.chainId || 11155111);

  const elements = {
    connectButton: document.getElementById("connectButton"),
    switchNetworkButton: document.getElementById("switchNetworkButton"),
    refreshButton: document.getElementById("refreshButton"),
    walletAddress: document.getElementById("walletAddress"),
    networkName: document.getElementById("networkName"),
    contractAddress: document.getElementById("contractAddress"),
    currentMessage: document.getElementById("currentMessage"),
    updateCount: document.getElementById("updateCount"),
    messageForm: document.getElementById("messageForm"),
    messageInput: document.getElementById("messageInput"),
    statusBox: document.getElementById("statusBox")
  };

  let browserProvider = null;
  let signer = null;

  function shortenAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  function setStatus(message, kind) {
    elements.statusBox.textContent = message;
    elements.statusBox.dataset.kind = kind || "neutral";
  }

  function getContract(withSigner) {
    if (!config.contractAddress || !Array.isArray(config.abi) || config.abi.length === 0) {
      return null;
    }
    const runner = withSigner ? signer : browserProvider;
    if (!runner) {
      return null;
    }
    return new ethers.Contract(config.contractAddress, config.abi, runner);
  }

  async function refreshNetwork() {
    if (!browserProvider) {
      elements.networkName.textContent = "Unknown";
      return;
    }
    const network = await browserProvider.getNetwork();
    const chainId = Number(network.chainId);
    const suffix = chainId === requiredChainId ? " (expected)" : " (wrong network)";
    elements.networkName.textContent = `${network.name} / ${chainId}${suffix}`;
  }

  async function connectWallet() {
    if (!window.ethereum) {
      setStatus("No injected wallet found. Install MetaMask or another EVM wallet.", "error");
      return;
    }

    browserProvider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await browserProvider.send("eth_requestAccounts", []);
    signer = await browserProvider.getSigner();
    elements.walletAddress.textContent = shortenAddress(accounts[0]);
    await refreshNetwork();
    setStatus("Wallet connected. You can now read and write contract state.", "success");
  }

  async function switchToSepolia() {
    if (!window.ethereum) {
      setStatus("No injected wallet found for network switching.", "error");
      return;
    }

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xaa36a7" }]
      });
    } catch (error) {
      if (error.code !== 4902) {
        throw error;
      }

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xaa36a7",
            chainName: "Ethereum Sepolia",
            nativeCurrency: {
              name: "Sepolia Ether",
              symbol: "SEP",
              decimals: 18
            },
            rpcUrls: ["https://ethereum-sepolia-rpc.publicnode.com"],
            blockExplorerUrls: ["https://sepolia.etherscan.io"]
          }
        ]
      });
    }

    if (browserProvider) {
      await refreshNetwork();
    }
    setStatus("Wallet switched to Sepolia.", "success");
  }

  async function refreshState() {
    elements.contractAddress.textContent = config.contractAddress || "Not configured";

    if (!config.contractAddress) {
      setStatus("Contract address is missing. Deploy the contract and sync frontend/config.js.", "warning");
      return;
    }

    if (!browserProvider) {
      browserProvider = new ethers.BrowserProvider(window.ethereum);
    }

    const contract = getContract(false);
    if (!contract) {
      setStatus("Contract ABI or provider is not ready.", "warning");
      return;
    }

    const [message, updateCount] = await Promise.all([
      contract.getMessage(),
      contract.updateCount()
    ]);

    elements.currentMessage.textContent = message;
    elements.updateCount.textContent = updateCount.toString();
    setStatus("On-chain state refreshed.", "success");
  }

  async function submitMessage(event) {
    event.preventDefault();

    const nextMessage = elements.messageInput.value.trim();
    if (!nextMessage) {
      setStatus("Please enter a non-empty message before submitting.", "warning");
      return;
    }

    if (!signer) {
      setStatus("Connect your wallet before submitting a transaction.", "warning");
      return;
    }

    const contract = getContract(true);
    if (!contract) {
      setStatus("Contract is not ready yet. Check the deployed address and ABI.", "error");
      return;
    }

    setStatus("Submitting transaction...", "warning");
    const tx = await contract.updateMessage(nextMessage);
    setStatus(`Transaction sent: ${tx.hash}. Waiting for confirmation...`, "warning");
    await tx.wait();
    elements.messageInput.value = "";
    await refreshState();
    setStatus("Transaction confirmed on Sepolia.", "success");
  }

  elements.connectButton.addEventListener("click", () => {
    connectWallet().catch((error) => {
      console.error(error);
      setStatus(error.message || "Failed to connect wallet.", "error");
    });
  });

  elements.switchNetworkButton.addEventListener("click", () => {
    switchToSepolia().catch((error) => {
      console.error(error);
      setStatus(error.message || "Failed to switch to Sepolia.", "error");
    });
  });

  elements.refreshButton.addEventListener("click", () => {
    refreshState().catch((error) => {
      console.error(error);
      setStatus(error.message || "Failed to refresh contract state.", "error");
    });
  });

  elements.messageForm.addEventListener("submit", (event) => {
    submitMessage(event).catch((error) => {
      console.error(error);
      setStatus(error.message || "Transaction submission failed.", "error");
    });
  });

  elements.contractAddress.textContent = config.contractAddress || "Not configured";

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", () => {
      connectWallet().catch((error) => {
        console.error(error);
        setStatus(error.message || "Failed to refresh wallet state.", "error");
      });
    });

    window.ethereum.on("chainChanged", () => {
      refreshState().catch((error) => {
        console.error(error);
        setStatus(error.message || "Failed to refresh after network change.", "error");
      });
    });
  }
})();
