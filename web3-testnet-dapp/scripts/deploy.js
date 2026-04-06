const fs = require("fs");
const path = require("path");

function getArtifactPath() {
  return path.join(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    "MessageBoard.sol",
    "MessageBoard.json"
  );
}

function syncFrontendConfig(payload) {
  const configPath = path.join(__dirname, "..", "frontend", "config.js");
  const output = `window.APP_CONFIG = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(configPath, output, "utf8");
}

async function main() {
  const network = await ethers.provider.getNetwork();
  const signers = await ethers.getSigners();
  if (signers.length === 0) {
    throw new Error(
      "No deployer account available. Set PRIVATE_KEY in .env and fund it with Sepolia ETH."
    );
  }
  const [deployer] = signers;
  const initialMessage = process.env.INITIAL_MESSAGE || "Hello from Sepolia";

  console.log("Deploying with address:", deployer.address);
  console.log("Target chain ID:", network.chainId.toString());

  const MessageBoard = await ethers.getContractFactory("MessageBoard");
  const messageBoard = await MessageBoard.deploy(initialMessage);
  await messageBoard.waitForDeployment();

  const contractAddress = await messageBoard.getAddress();
  console.log("MessageBoard deployed to:", contractAddress);

  const artifact = JSON.parse(fs.readFileSync(getArtifactPath(), "utf8"));
  syncFrontendConfig({
    chainId: Number(network.chainId),
    chainName: network.chainId === 11155111n ? "Sepolia" : `Chain ${network.chainId}`,
    contractAddress,
    abi: artifact.abi
  });

  console.log("Frontend config updated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
