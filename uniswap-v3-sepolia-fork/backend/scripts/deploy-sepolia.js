const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;

const DEFAULT_FEE = 3000;
const MIN_TICK = -887220;
const MAX_TICK = 887220;
const INITIAL_SUPPLY = ethers.parseUnits("1000000", 18);
const INITIAL_LIQUIDITY = ethers.parseUnits("10000", 18);
const SQRT_PRICE_1_1 = 2n ** 96n;
const PUBLIC_SEPOLIA_UNISWAP = {
  factory: "0x0227628f3F023bb0B980b67D528571c95c6DaC1c",
  positionManager: "0x1238536071E1c677A632429e3655c799b22cDA52",
  quoterV2: "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3",
  swapRouter: "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"
};
const SWAP_ROUTER02_ABI = [
  "function exactInputSingle((address tokenIn,address tokenOut,uint24 fee,address recipient,uint256 amountIn,uint256 amountOutMinimum,uint160 sqrtPriceLimitX96)) payable returns (uint256 amountOut)"
];

function envFlag(name) {
  const value = process.env[name];
  return value === "1" || value === "true" || value === "TRUE";
}

function envValue(name, fallback = "") {
  return process.env[name] || fallback;
}

function artifact(relativePath) {
  return require(path.join(__dirname, "..", "node_modules", ...relativePath.split("/")));
}

function linkBytecode(artifactJson, libraries) {
  if (!artifactJson.linkReferences || Object.keys(artifactJson.linkReferences).length === 0) {
    return artifactJson.bytecode;
  }

  let bytecode = artifactJson.bytecode.replace(/^0x/, "");
  for (const [fileName, refsByLib] of Object.entries(artifactJson.linkReferences)) {
    for (const [libName, refs] of Object.entries(refsByLib)) {
      const linkedAddress = libraries[libName] || libraries[`${fileName}:${libName}`];
      if (!linkedAddress) {
        throw new Error(`Missing linked library address for ${libName}`);
      }

      const addressHex = linkedAddress.replace(/^0x/, "").toLowerCase();
      for (const ref of refs) {
        const start = ref.start * 2;
        const length = ref.length * 2;
        bytecode =
          bytecode.slice(0, start) +
          addressHex.padStart(length, "0") +
          bytecode.slice(start + length);
      }
    }
  }

  return `0x${bytecode}`;
}

async function deployFromArtifact(name, artifactJson, signer, args = [], libraries = {}) {
  const bytecode = linkBytecode(artifactJson, libraries);
  const factory = new ethers.ContractFactory(artifactJson.abi, bytecode, signer);
  const contract = await factory.deploy(...args);
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log(`${name} deployed: ${address}`);
  return contract;
}

function sortTokens(tokenA, tokenB, amountA = INITIAL_LIQUIDITY, amountB = INITIAL_LIQUIDITY) {
  const addressA = tokenA.address.toLowerCase();
  const addressB = tokenB.address.toLowerCase();
  if (addressA < addressB) {
    return {
      token0: tokenA,
      token1: tokenB,
      amount0Desired: amountA,
      amount1Desired: amountB
    };
  }

  return {
    token0: tokenB,
    token1: tokenA,
    amount0Desired: amountB,
    amount1Desired: amountA
  };
}

function writeFrontendConfig(payload) {
  const frontendConfigPath = path.join(__dirname, "..", "..", "frontend", "config.js");
  const output = `window.UNISWAP_FORK_CONFIG = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(frontendConfigPath, output, "utf8");
}

async function attachOrDeployToken({ envKey, name, symbol, factory, signer }) {
  const existingAddress = envValue(envKey);
  if (existingAddress) {
    const token = factory.attach(existingAddress).connect(signer);
    console.log(`${symbol} attached: ${existingAddress}`);
    return token;
  }

  const token = await factory.deploy(name, symbol);
  await token.waitForDeployment();
  console.log(`${symbol} deployed: ${await token.getAddress()}`);
  return token;
}

async function resolveProtocolContracts({
  deployer,
  usePublicSepolia,
  WETH9,
  artifacts
}) {
  const {
    factoryArtifact,
    factoryInterfaceArtifact,
    nftDescriptorArtifact,
    positionDescriptorArtifact,
    positionManagerArtifact,
    positionManagerInterfaceArtifact,
    swapRouterArtifact,
    swapRouterInterfaceArtifact,
    quoterArtifact,
    quoterInterfaceArtifact,
    tickLensArtifact
  } = artifacts;

  if (usePublicSepolia) {
    console.log("Using public Sepolia Uniswap V3 protocol deployments.");
    const positionManager = new ethers.Contract(
      envValue("UNISWAP_POSITION_MANAGER_ADDRESS", PUBLIC_SEPOLIA_UNISWAP.positionManager),
      positionManagerInterfaceArtifact.abi,
      deployer
    );
    const wethAddress = await positionManager.WETH9();

    return {
      wethAddress,
      v3Factory: new ethers.Contract(
        envValue("UNISWAP_V3_FACTORY_ADDRESS", PUBLIC_SEPOLIA_UNISWAP.factory),
        factoryInterfaceArtifact.abi,
        deployer
      ),
      positionManager,
      swapRouter: new ethers.Contract(
        envValue("UNISWAP_SWAP_ROUTER_ADDRESS", PUBLIC_SEPOLIA_UNISWAP.swapRouter),
        SWAP_ROUTER02_ABI,
        deployer
      ),
      quoterV2: new ethers.Contract(
        envValue("UNISWAP_QUOTER_V2_ADDRESS", PUBLIC_SEPOLIA_UNISWAP.quoterV2),
        quoterInterfaceArtifact.abi,
        deployer
      ),
      tickLens: null,
      swapRouterAbi: SWAP_ROUTER02_ABI,
      routerVariant: "swapRouter02",
      wethAbi: JSON.parse(WETH9.interface.formatJson()),
      tickLensAbi: tickLensArtifact.abi
    };
  }

  const weth9 = await WETH9.deploy();
  await weth9.waitForDeployment();
  const wethAddress = await weth9.getAddress();
  console.log(`WETH9 deployed: ${wethAddress}`);

  const v3Factory = await deployFromArtifact("UniswapV3Factory", factoryArtifact, deployer);
  const nftDescriptor = await deployFromArtifact("NFTDescriptor", nftDescriptorArtifact, deployer);
  const positionDescriptor = await deployFromArtifact(
    "NonfungibleTokenPositionDescriptor",
    positionDescriptorArtifact,
    deployer,
    [wethAddress, ethers.encodeBytes32String("ETH")],
    { NFTDescriptor: await nftDescriptor.getAddress() }
  );
  const positionManager = await deployFromArtifact(
    "NonfungiblePositionManager",
    positionManagerArtifact,
    deployer,
    [await v3Factory.getAddress(), wethAddress, await positionDescriptor.getAddress()]
  );
  const swapRouter = await deployFromArtifact(
    "SwapRouter",
    swapRouterArtifact,
    deployer,
    [await v3Factory.getAddress(), wethAddress]
  );
  const quoterV2 = await deployFromArtifact(
    "QuoterV2",
    quoterArtifact,
    deployer,
    [await v3Factory.getAddress(), wethAddress]
  );
  const tickLens = await deployFromArtifact("TickLens", tickLensArtifact, deployer);

  return {
    wethAddress,
    v3Factory,
    positionManager,
    swapRouter,
    quoterV2,
    tickLens,
    swapRouterAbi: swapRouterInterfaceArtifact.abi,
    routerVariant: "swapRouter",
    wethAbi: JSON.parse(WETH9.interface.formatJson()),
    tickLensAbi: tickLensArtifact.abi
  };
}

async function main() {
  const signers = await ethers.getSigners();
  if (signers.length === 0) {
    throw new Error("No deployer configured. Set PRIVATE_KEY in backend/.env.");
  }

  const [deployer] = signers;
  const network = await ethers.provider.getNetwork();
  const usePublicSepolia = envFlag("USE_PUBLIC_SEPOLIA_UNISWAP");
  console.log("Deploying with:", deployer.address);
  console.log("Chain ID:", network.chainId.toString());

  if (usePublicSepolia && network.chainId !== 11155111n) {
    throw new Error("USE_PUBLIC_SEPOLIA_UNISWAP is only supported on Sepolia.");
  }

  const artifacts = {
    factoryArtifact: artifact("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
    factoryInterfaceArtifact: artifact("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Factory.sol/IUniswapV3Factory.json"),
    poolArtifact: artifact("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json"),
    nftDescriptorArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json"),
    positionDescriptorArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json"),
    positionManagerArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
    positionManagerInterfaceArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json"),
    swapRouterArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json"),
    swapRouterInterfaceArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json"),
    quoterArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json"),
    quoterInterfaceArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/interfaces/IQuoterV2.sol/IQuoterV2.json"),
    tickLensArtifact: artifact("@uniswap/v3-periphery/artifacts/contracts/lens/TickLens.sol/TickLens.json")
  };

  const WETH9 = await ethers.getContractFactory("WETH9");
  const TestERC20 = await ethers.getContractFactory("TestERC20");

  const tokenA = await attachOrDeployToken({
    envKey: "TOKEN_A_ADDRESS",
    name: "Fork Token Alpha",
    symbol: "FTA",
    factory: TestERC20,
    signer: deployer
  });
  const tokenB = await attachOrDeployToken({
    envKey: "TOKEN_B_ADDRESS",
    name: "Fork Token Beta",
    symbol: "FTB",
    factory: TestERC20,
    signer: deployer
  });

  await (await tokenA.mint(deployer.address, INITIAL_SUPPLY)).wait();
  await (await tokenB.mint(deployer.address, INITIAL_SUPPLY)).wait();

  const protocol = await resolveProtocolContracts({
    deployer,
    usePublicSepolia,
    WETH9,
    artifacts
  });

  const tokenAInfo = {
    symbol: await tokenA.symbol(),
    address: await tokenA.getAddress()
  };
  const tokenBInfo = {
    symbol: await tokenB.symbol(),
    address: await tokenB.getAddress()
  };
  const sorted = sortTokens(tokenAInfo, tokenBInfo);

  await (await tokenA.approve(await protocol.positionManager.getAddress(), ethers.MaxUint256)).wait();
  await (await tokenB.approve(await protocol.positionManager.getAddress(), ethers.MaxUint256)).wait();
  await (await tokenA.approve(await protocol.swapRouter.getAddress(), ethers.MaxUint256)).wait();
  await (await tokenB.approve(await protocol.swapRouter.getAddress(), ethers.MaxUint256)).wait();

  await (
    await protocol.positionManager.createAndInitializePoolIfNecessary(
      sorted.token0.address,
      sorted.token1.address,
      DEFAULT_FEE,
      SQRT_PRICE_1_1
    )
  ).wait();

  await (
    await protocol.positionManager.mint({
      token0: sorted.token0.address,
      token1: sorted.token1.address,
      fee: DEFAULT_FEE,
      tickLower: MIN_TICK,
      tickUpper: MAX_TICK,
      amount0Desired: sorted.amount0Desired,
      amount1Desired: sorted.amount1Desired,
      amount0Min: 0,
      amount1Min: 0,
      recipient: deployer.address,
      deadline: Math.floor(Date.now() / 1000) + 3600
    })
  ).wait();

  const poolAddress = await protocol.v3Factory.getPool(
    sorted.token0.address,
    sorted.token1.address,
    DEFAULT_FEE
  );
  console.log(`Pool deployed: ${poolAddress}`);

  const config = {
    chainId: Number(network.chainId),
    networkName: network.chainId === 11155111n ? "Sepolia" : `Chain ${network.chainId}`,
    feeTier: DEFAULT_FEE,
    routerVariant: protocol.routerVariant,
    pool: {
      address: poolAddress,
      abi: artifacts.poolArtifact.abi
    },
    contracts: {
      factory: {
        address: await protocol.v3Factory.getAddress(),
        abi: artifacts.factoryInterfaceArtifact.abi
      },
      positionManager: {
        address: await protocol.positionManager.getAddress(),
        abi: artifacts.positionManagerInterfaceArtifact.abi
      },
      swapRouter: {
        address: await protocol.swapRouter.getAddress(),
        abi: protocol.swapRouterAbi
      },
      quoterV2: {
        address: await protocol.quoterV2.getAddress(),
        abi: artifacts.quoterInterfaceArtifact.abi
      },
      weth9: {
        address: protocol.wethAddress,
        abi: protocol.wethAbi
      },
      tokenA: {
        address: tokenAInfo.address,
        symbol: tokenAInfo.symbol,
        abi: JSON.parse(TestERC20.interface.formatJson())
      },
      tokenB: {
        address: tokenBInfo.address,
        symbol: tokenBInfo.symbol,
        abi: JSON.parse(TestERC20.interface.formatJson())
      }
    },
    range: {
      minTick: MIN_TICK,
      maxTick: MAX_TICK
    }
  };

  if (protocol.tickLens) {
    config.contracts.tickLens = {
      address: await protocol.tickLens.getAddress(),
      abi: protocol.tickLensAbi
    };
  }

  writeFrontendConfig(config);
  console.log("Frontend config updated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
