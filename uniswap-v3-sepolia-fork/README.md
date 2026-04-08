# Uniswap V3 Sepolia Fork

This workspace ships two practical deployment modes for a Uniswap V3-style Sepolia app:

- `backend/scripts/deploy-sepolia.js`
  Full custom deployment mode. It can deploy local test tokens and, when the deployer wallet has enough Sepolia ETH, deploy a dedicated Uniswap V3 stack and seed a new pool.
- `backend/scripts/configure-public-sepolia-pool.js`
  Public Sepolia mode. It configures the frontend to use the already-live Uniswap V3 Sepolia contracts and the live `WETH/USDC` pool, which is the mode currently used for delivery.

Frontend capabilities:

- wallet connection
- Sepolia network switching
- WETH wrapping from native ETH
- token approvals
- live V3 quotes
- swaps through `SwapRouter02`
- adding liquidity through the Sepolia `NonfungiblePositionManager`

Useful commands:

- `cd backend && npm install`
- `npm run compile`
- `npm run configure:public-pool`
- `npm run deploy:sepolia`

Notes:

- The current public-pool configuration targets Sepolia `WETH/USDC` at fee tier `500`.
- Full self-deployment requires materially more Sepolia ETH than the current wallet balance had available during setup.
