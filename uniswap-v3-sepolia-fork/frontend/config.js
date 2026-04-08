window.UNISWAP_FORK_CONFIG = {
  "chainId": 11155111,
  "networkName": "Sepolia",
  "mode": "public-sepolia-pool",
  "feeTier": 500,
  "routerVariant": "swapRouter02",
  "pool": {
    "address": "0x3289680dD4d6C10bb19b899729cda5eEF58AEfF1",
    "abi": [
      "function liquidity() view returns (uint128)",
      "function slot0() view returns (uint160 sqrtPriceX96,int24 tick,uint16 observationIndex,uint16 observationCardinality,uint16 observationCardinalityNext,uint8 feeProtocol,bool unlocked)"
    ]
  },
  "contracts": {
    "factory": {
      "address": "0x0227628f3F023bb0B980b67D528571c95c6DaC1c",
      "abi": [
        "function getPool(address tokenA,address tokenB,uint24 fee) view returns (address pool)"
      ]
    },
    "positionManager": {
      "address": "0x1238536071E1c677A632429e3655c799b22cDA52",
      "abi": [
        "function mint((address token0,address token1,uint24 fee,int24 tickLower,int24 tickUpper,uint256 amount0Desired,uint256 amount1Desired,uint256 amount0Min,uint256 amount1Min,address recipient,uint256 deadline)) payable returns (uint256 tokenId,uint128 liquidity,uint256 amount0,uint256 amount1)"
      ]
    },
    "swapRouter": {
      "address": "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E",
      "abi": [
        "function exactInputSingle((address tokenIn,address tokenOut,uint24 fee,address recipient,uint256 amountIn,uint256 amountOutMinimum,uint160 sqrtPriceLimitX96)) payable returns (uint256 amountOut)"
      ]
    },
    "quoterV2": {
      "address": "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3",
      "abi": [
        "function quoteExactInputSingle((address tokenIn,address tokenOut,uint256 amountIn,uint24 fee,uint160 sqrtPriceLimitX96)) returns (uint256 amountOut,uint160 sqrtPriceX96After,uint32 initializedTicksCrossed,uint256 gasEstimate)"
      ]
    },
    "tokenA": {
      "address": "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      "symbol": "WETH",
      "decimals": 18,
      "supportsWrapNative": true,
      "nativeSymbol": "ETH",
      "abi": [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function decimals() view returns (uint8)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address owner) view returns (uint256)",
        "function allowance(address owner,address spender) view returns (uint256)",
        "function approve(address spender,uint256 amount) returns (bool)",
        "function transfer(address to,uint256 amount) returns (bool)",
        "function transferFrom(address from,address to,uint256 amount) returns (bool)",
        "function deposit() payable",
        "function withdraw(uint256 wad)"
      ]
    },
    "tokenB": {
      "address": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      "symbol": "USDC",
      "decimals": 6,
      "supportsMint": false,
      "abi": [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function decimals() view returns (uint8)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address owner) view returns (uint256)",
        "function allowance(address owner,address spender) view returns (uint256)",
        "function approve(address spender,uint256 amount) returns (bool)",
        "function transfer(address to,uint256 amount) returns (bool)",
        "function transferFrom(address from,address to,uint256 amount) returns (bool)"
      ]
    },
    "weth9": {
      "address": "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      "symbol": "WETH",
      "decimals": 18,
      "supportsWrapNative": true,
      "nativeSymbol": "ETH",
      "abi": [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function decimals() view returns (uint8)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address owner) view returns (uint256)",
        "function allowance(address owner,address spender) view returns (uint256)",
        "function approve(address spender,uint256 amount) returns (bool)",
        "function transfer(address to,uint256 amount) returns (bool)",
        "function transferFrom(address from,address to,uint256 amount) returns (bool)",
        "function deposit() payable",
        "function withdraw(uint256 wad)"
      ]
    }
  },
  "range": {
    "minTick": -887270,
    "maxTick": 887270
  },
  "poolSnapshot": {
    "liquidity": "12405514501373137",
    "sqrtPriceX96": "940466545365715359795487916107178",
    "tick": 187645
  }
};
