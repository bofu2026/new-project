# Web3 Testnet DApp

This project is a minimal Web3 website and smart-contract demo targeting the Ethereum Sepolia testnet.

## What is included

- `contracts/MessageBoard.sol`: a simple on-chain message board contract
- `scripts/deploy.js`: deploys the contract and syncs the frontend config
- `frontend/`: a wallet-connected browser UI for reading and writing the message
- `test/MessageBoard.js`: a basic Hardhat test suite
- `.env.example`: environment variables needed for live testnet deployment

## Default target network

- Testnet: `Ethereum Sepolia`
- Chain ID: `11155111`

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

3. Fill in:

- `SEPOLIA_RPC_URL`
- `PRIVATE_KEY`
- optionally `ETHERSCAN_API_KEY`

4. Compile and test:

   ```bash
   npm run compile
   npm test
   ```

5. Deploy to Sepolia:

   ```bash
   npm run deploy:sepolia
   ```

6. Open `frontend/index.html` in a browser with MetaMask installed.

After deployment, the script writes the live contract address and ABI to `frontend/config.js`.

## Notes

- The deployer wallet must hold Sepolia ETH.
- `frontend/index.html` expects a browser wallet such as MetaMask.
- The frontend will show `Not configured` until `frontend/config.js` contains a real address and ABI.
