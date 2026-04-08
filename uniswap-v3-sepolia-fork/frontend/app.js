(function () {
  const { ethers } = window;
  const config = window.UNISWAP_FORK_CONFIG || {};
  const app = document.getElementById("app");

  const state = {
    provider: null,
    signer: null,
    address: null
  };

  function tokenConfig(key) {
    return config.contracts?.[key] || {};
  }

  function tokenDecimals(key) {
    return Number(tokenConfig(key).decimals ?? 18);
  }

  function tokenActionLabel(token) {
    if (token.supportsWrapNative) {
      return `Wrap ${token.nativeSymbol || "ETH"} to ${token.symbol}`;
    }
    if (token.supportsMint) {
      return `Mint ${token.symbol}`;
    }
    return `${token.symbol} is external`;
  }

  function tokenActionHint(token) {
    if (token.supportsWrapNative) {
      return `Uses your wallet ${token.nativeSymbol || "ETH"} balance to mint ${token.symbol}.`;
    }
    if (token.supportsMint) {
      return `Mints faucet tokens directly to the connected wallet.`;
    }
    return `This asset is managed externally on Sepolia. Acquire it by swapping or an external faucet.`;
  }

  function renderAcquireControl(tokenKey, amountId, buttonId) {
    const token = tokenConfig(tokenKey);
    return `
      <label>${token.symbol} amount</label>
      <input id="${amountId}" type="text" value="${token.supportsWrapNative ? "0.01" : "1000"}" />
      <button id="${buttonId}" class="primary" ${token.supportsMint || token.supportsWrapNative ? "" : "disabled"}>
        ${tokenActionLabel(token)}
      </button>
      <p class="quote-box">${tokenActionHint(token)}</p>
    `;
  }

  function render() {
    const tokenA = tokenConfig("tokenA");
    const tokenB = tokenConfig("tokenB");
    const tokenASymbol = tokenA.symbol || "Token A";
    const tokenBSymbol = tokenB.symbol || "Token B";

    app.innerHTML = `
      <div class="grid">
        <section class="card span-2">
          <div class="card-header">
            <div>
              <p class="section-label">Wallet</p>
              <h2>Connection and network</h2>
            </div>
            <div class="actions">
              <button id="connectButton" class="primary">Connect wallet</button>
              <button id="switchButton" class="secondary">Switch to Sepolia</button>
              <button id="refreshButton" class="secondary">Refresh</button>
            </div>
          </div>
          <div class="stats-grid">
            <div class="stat-box"><span>Wallet</span><strong id="walletValue">Not connected</strong></div>
            <div class="stat-box"><span>Network</span><strong id="networkValue">${config.networkName || "Unknown"}</strong></div>
            <div class="stat-box"><span>Pool</span><strong id="poolValue">${config.pool?.address || "Not configured"}</strong></div>
            <div class="stat-box"><span>Fee tier</span><strong id="feeValue">${config.feeTier || "-"}</strong></div>
          </div>
        </section>

        <section class="card">
          <p class="section-label">Acquire ${tokenASymbol}</p>
          <h2>${tokenActionLabel(tokenA)}</h2>
          ${renderAcquireControl("tokenA", "tokenAActionAmount", "tokenAActionButton")}
        </section>

        <section class="card">
          <p class="section-label">Acquire ${tokenBSymbol}</p>
          <h2>${tokenActionLabel(tokenB)}</h2>
          ${renderAcquireControl("tokenB", "tokenBActionAmount", "tokenBActionButton")}
        </section>

        <section class="card">
          <p class="section-label">Approvals</p>
          <h2>Authorize contracts</h2>
          <button id="approveRouterButton" class="secondary">Approve router for both tokens</button>
          <button id="approveLiquidityButton" class="secondary">Approve position manager</button>
        </section>

        <section class="card span-2">
          <p class="section-label">Balances</p>
          <h2>Wallet and pool state</h2>
          <div class="stats-grid">
            <div class="stat-box"><span>${tokenASymbol} balance</span><strong id="balanceAValue">-</strong></div>
            <div class="stat-box"><span>${tokenBSymbol} balance</span><strong id="balanceBValue">-</strong></div>
            <div class="stat-box"><span>Pool liquidity</span><strong id="poolLiquidityValue">-</strong></div>
            <div class="stat-box"><span>Pool sqrtPriceX96</span><strong id="sqrtPriceValue">-</strong></div>
          </div>
        </section>

        <section class="card span-2">
          <p class="section-label">Swap</p>
          <h2>Quote and trade</h2>
          <label>Direction</label>
          <select id="swapDirection">
            <option value="A_TO_B">${tokenASymbol} to ${tokenBSymbol}</option>
            <option value="B_TO_A">${tokenBSymbol} to ${tokenASymbol}</option>
          </select>
          <label>Input amount</label>
          <input id="swapAmount" type="text" value="${tokenA.supportsWrapNative ? "0.001" : "10"}" />
          <div class="actions">
            <button id="quoteButton" class="secondary">Get quote</button>
            <button id="swapButton" class="primary">Swap now</button>
          </div>
          <p class="quote-box" id="quoteValue">Quote not requested yet.</p>
        </section>

        <section class="card span-2">
          <p class="section-label">Liquidity</p>
          <h2>Add full-range liquidity</h2>
          <label>${tokenASymbol} amount</label>
          <input id="liqAmountA" type="text" value="${tokenA.supportsWrapNative ? "0.001" : "100"}" />
          <label>${tokenBSymbol} amount</label>
          <input id="liqAmountB" type="text" value="100" />
          <button id="addLiquidityButton" class="primary">Add liquidity</button>
        </section>

        <section class="card span-2">
          <p class="section-label">Status</p>
          <h2>Execution log</h2>
          <div id="statusBox" class="status-box">Frontend loaded. Connect a Sepolia wallet to continue.</div>
        </section>
      </div>
    `;
  }

  function setStatus(message, kind = "neutral") {
    const el = document.getElementById("statusBox");
    if (!el) {
      return;
    }
    el.textContent = message;
    el.dataset.kind = kind;
  }

  function hasContracts() {
    return config.contracts && Object.keys(config.contracts).length > 0;
  }

  function ensureEthereum() {
    if (!window.ethereum) {
      throw new Error("No injected wallet found. Install MetaMask or another EVM wallet.");
    }
  }

  async function ensureProvider() {
    ensureEthereum();
    if (!state.provider) {
      state.provider = new ethers.BrowserProvider(window.ethereum);
    }
    return state.provider;
  }

  async function contract(key, withSigner = false) {
    if (!hasContracts()) {
      throw new Error("Contracts are not configured yet. Configure the frontend first.");
    }
    const provider = await ensureProvider();
    const runner = withSigner ? state.signer : provider;
    const target = tokenConfig(key);
    return new ethers.Contract(target.address, target.abi, runner);
  }

  function formatUnitsWithLocale(value, decimals) {
    return Number(ethers.formatUnits(value, decimals)).toLocaleString(undefined, {
      maximumFractionDigits: Math.min(6, decimals)
    });
  }

  function formatTokenAmount(value, key) {
    return formatUnitsWithLocale(value, tokenDecimals(key));
  }

  function parseTokenAmount(rawValue, key) {
    return ethers.parseUnits(rawValue || "0", tokenDecimals(key));
  }

  function shorten(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  function swapTokensForDirection() {
    const direction = document.getElementById("swapDirection").value;
    return direction === "A_TO_B"
      ? [tokenConfig("tokenA"), tokenConfig("tokenB"), "tokenA", "tokenB"]
      : [tokenConfig("tokenB"), tokenConfig("tokenA"), "tokenB", "tokenA"];
  }

  async function connectWallet() {
    const provider = await ensureProvider();
    await provider.send("eth_requestAccounts", []);
    state.signer = await provider.getSigner();
    state.address = await state.signer.getAddress();
    document.getElementById("walletValue").textContent = shorten(state.address);
    await refreshAll();
    setStatus("Wallet connected.", "success");
  }

  async function switchToSepolia() {
    ensureEthereum();

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
              symbol: "ETH",
              decimals: 18
            },
            rpcUrls: ["https://ethereum-sepolia-rpc.publicnode.com"],
            blockExplorerUrls: ["https://sepolia.etherscan.io"]
          }
        ]
      });
    }

    await refreshAll();
    setStatus("Wallet switched to Sepolia.", "success");
  }

  async function refreshAll() {
    if (!window.ethereum) {
      return;
    }

    const provider = await ensureProvider();
    const network = await provider.getNetwork();
    document.getElementById("networkValue").textContent = `${network.name} / ${network.chainId}`;

    if (!hasContracts()) {
      setStatus("Contracts are not configured yet.", "warning");
      return;
    }

    const tokenAContract = await contract("tokenA");
    const tokenBContract = await contract("tokenB");
    const poolContract = new ethers.Contract(config.pool.address, config.pool.abi, provider);

    const [slot0, liquidity] = await Promise.all([poolContract.slot0(), poolContract.liquidity()]);
    document.getElementById("poolLiquidityValue").textContent = liquidity.toString();
    document.getElementById("sqrtPriceValue").textContent = slot0.sqrtPriceX96.toString();

    if (state.address) {
      const [balA, balB] = await Promise.all([
        tokenAContract.balanceOf(state.address),
        tokenBContract.balanceOf(state.address)
      ]);

      document.getElementById("balanceAValue").textContent = formatTokenAmount(balA, "tokenA");
      document.getElementById("balanceBValue").textContent = formatTokenAmount(balB, "tokenB");
    }
  }

  async function acquireToken(tokenKey, amountInputId) {
    if (!state.signer) {
      throw new Error("Connect wallet first.");
    }

    const token = tokenConfig(tokenKey);
    const rawAmount = document.getElementById(amountInputId).value.trim();
    if (!rawAmount) {
      throw new Error("Amount is required.");
    }

    if (token.supportsWrapNative) {
      const amount = parseTokenAmount(rawAmount, tokenKey);
      if (amount <= 0n) {
        throw new Error("Wrap amount must be positive.");
      }

      const tokenContract = await contract(tokenKey, true);
      setStatus(`Wrapping ${rawAmount} ${token.nativeSymbol || "ETH"} to ${token.symbol}...`, "warning");
      const tx = await tokenContract.deposit({ value: amount });
      await tx.wait();
      await refreshAll();
      setStatus(`Wrapped ${rawAmount} ${token.nativeSymbol || "ETH"} to ${token.symbol}.`, "success");
      return;
    }

    if (token.supportsMint) {
      const amount = parseTokenAmount(rawAmount, tokenKey);
      if (amount <= 0n) {
        throw new Error("Mint amount must be positive.");
      }

      const tokenContract = await contract(tokenKey, true);
      setStatus(`Minting ${rawAmount} ${token.symbol}...`, "warning");
      const tx = await tokenContract.mint(state.address, amount);
      await tx.wait();
      await refreshAll();
      setStatus(`Minted ${rawAmount} ${token.symbol}.`, "success");
      return;
    }

    throw new Error(`${token.symbol} cannot be minted or wrapped from this UI.`);
  }

  async function approveBoth(spenderKey) {
    if (!state.signer) {
      throw new Error("Connect wallet first.");
    }

    const spender = tokenConfig(spenderKey).address;
    const tokenAContract = await contract("tokenA", true);
    const tokenBContract = await contract("tokenB", true);

    setStatus(`Approving ${spenderKey} for both tokens...`, "warning");
    await (await tokenAContract.approve(spender, ethers.MaxUint256)).wait();
    await (await tokenBContract.approve(spender, ethers.MaxUint256)).wait();
    setStatus(`Approved ${spenderKey}.`, "success");
  }

  async function quoteSwap() {
    const [tokenIn, tokenOut, tokenInKey, tokenOutKey] = swapTokensForDirection();
    const rawAmount = document.getElementById("swapAmount").value.trim();
    const amountIn = parseTokenAmount(rawAmount, tokenInKey);
    if (amountIn <= 0n) {
      throw new Error("Swap amount must be positive.");
    }

    const quoter = await contract("quoterV2");
    const result = await quoter.quoteExactInputSingle.staticCall({
      tokenIn: tokenIn.address,
      tokenOut: tokenOut.address,
      amountIn,
      fee: config.feeTier,
      sqrtPriceLimitX96: 0
    });

    const amountOut = Array.isArray(result) ? result[0] : result.amountOut;
    document.getElementById("quoteValue").textContent =
      `${rawAmount} ${tokenIn.symbol} -> approximately ${formatUnitsWithLocale(amountOut, tokenDecimals(tokenOutKey))} ${tokenOut.symbol}`;
    setStatus("Quote refreshed.", "success");
  }

  async function executeSwap() {
    if (!state.signer) {
      throw new Error("Connect wallet first.");
    }

    const [tokenIn, tokenOut, tokenInKey] = swapTokensForDirection();
    const rawAmount = document.getElementById("swapAmount").value.trim();
    const amountIn = parseTokenAmount(rawAmount, tokenInKey);
    if (amountIn <= 0n) {
      throw new Error("Swap amount must be positive.");
    }

    const router = await contract("swapRouter", true);
    const params = {
      tokenIn: tokenIn.address,
      tokenOut: tokenOut.address,
      fee: config.feeTier,
      recipient: state.address,
      amountIn,
      amountOutMinimum: 0,
      sqrtPriceLimitX96: 0
    };

    if (config.routerVariant !== "swapRouter02") {
      params.deadline = Math.floor(Date.now() / 1000) + 900;
    }

    setStatus(`Submitting swap ${tokenIn.symbol} -> ${tokenOut.symbol}...`, "warning");
    const tx = await router.exactInputSingle(params);
    await tx.wait();
    await refreshAll();
    await quoteSwap();
    setStatus("Swap confirmed.", "success");
  }

  async function addLiquidity() {
    if (!state.signer) {
      throw new Error("Connect wallet first.");
    }

    const amountA = parseTokenAmount(document.getElementById("liqAmountA").value.trim(), "tokenA");
    const amountB = parseTokenAmount(document.getElementById("liqAmountB").value.trim(), "tokenB");

    if (amountA <= 0n || amountB <= 0n) {
      throw new Error("Liquidity amounts must both be positive.");
    }

    const tokenA = tokenConfig("tokenA");
    const tokenB = tokenConfig("tokenB");
    const sorted = sortByAddress(tokenA, tokenB, amountA, amountB);
    const positionManager = await contract("positionManager", true);

    setStatus("Submitting full-range liquidity position...", "warning");
    const tx = await positionManager.mint({
      token0: sorted.token0.address,
      token1: sorted.token1.address,
      fee: config.feeTier,
      tickLower: config.range.minTick,
      tickUpper: config.range.maxTick,
      amount0Desired: sorted.amount0Desired,
      amount1Desired: sorted.amount1Desired,
      amount0Min: 0,
      amount1Min: 0,
      recipient: state.address,
      deadline: Math.floor(Date.now() / 1000) + 900
    });
    await tx.wait();
    await refreshAll();
    setStatus("Liquidity added.", "success");
  }

  function sortByAddress(tokenA, tokenB, amountA, amountB) {
    return tokenA.address.toLowerCase() < tokenB.address.toLowerCase()
      ? {
          token0: tokenA,
          token1: tokenB,
          amount0Desired: amountA,
          amount1Desired: amountB
        }
      : {
          token0: tokenB,
          token1: tokenA,
          amount0Desired: amountB,
          amount1Desired: amountA
        };
  }

  function bind() {
    document.getElementById("connectButton").addEventListener("click", () => {
      connectWallet().catch((error) => setStatus(error.message, "error"));
    });
    document.getElementById("switchButton").addEventListener("click", () => {
      switchToSepolia().catch((error) => setStatus(error.message, "error"));
    });
    document.getElementById("refreshButton").addEventListener("click", () => {
      refreshAll().catch((error) => setStatus(error.message, "error"));
    });

    const tokenA = tokenConfig("tokenA");
    const tokenB = tokenConfig("tokenB");

    if (tokenA.supportsMint || tokenA.supportsWrapNative) {
      document.getElementById("tokenAActionButton").addEventListener("click", () => {
        acquireToken("tokenA", "tokenAActionAmount").catch((error) =>
          setStatus(error.message, "error")
        );
      });
    }

    if (tokenB.supportsMint || tokenB.supportsWrapNative) {
      document.getElementById("tokenBActionButton").addEventListener("click", () => {
        acquireToken("tokenB", "tokenBActionAmount").catch((error) =>
          setStatus(error.message, "error")
        );
      });
    }

    document.getElementById("approveRouterButton").addEventListener("click", () => {
      approveBoth("swapRouter").catch((error) => setStatus(error.message, "error"));
    });
    document.getElementById("approveLiquidityButton").addEventListener("click", () => {
      approveBoth("positionManager").catch((error) => setStatus(error.message, "error"));
    });
    document.getElementById("quoteButton").addEventListener("click", () => {
      quoteSwap().catch((error) => setStatus(error.message, "error"));
    });
    document.getElementById("swapButton").addEventListener("click", () => {
      executeSwap().catch((error) => setStatus(error.message, "error"));
    });
    document.getElementById("addLiquidityButton").addEventListener("click", () => {
      addLiquidity().catch((error) => setStatus(error.message, "error"));
    });

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        connectWallet().catch((error) => setStatus(error.message, "error"));
      });
      window.ethereum.on("chainChanged", () => {
        refreshAll().catch((error) => setStatus(error.message, "error"));
      });
    }
  }

  render();
  bind();
})();
