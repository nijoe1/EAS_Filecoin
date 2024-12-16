import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-verify";
import "@typechain/hardhat";
import { config as dotenvConfig } from "dotenv";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";

dotenvConfig();
// If not set, it uses the hardhat account 0 private key.
const PRIVATE_KEY =
  process.env.DEPLOYER_PRIVATE_KEY!;
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

const settings = {
  evmVersion: "paris",
  libraries: {},
  metadata: {
    bytecodeHash: "none",
    useLiteralContent: true,
  },
  optimizer: {
    enabled: true,
    runs: 1000000,
  },
  remappings: [],
  outputSelection: {
    "*": {
      "*": ["evm.bytecode", "evm.deployedBytecode", "devdoc", "userdoc", "metadata", "abi"],
    },
  },
};
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings,
  },

  defaultNetwork: "metis",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    filecoin: {
      chainId: 314,
      url: "https://filfox.info/rpc/v1",
      accounts: [PRIVATE_KEY],
    },
    calibration: {
      chainId: 314159,
      url: "https://calibration.filfox.info/rpc/v1	",
      accounts: [PRIVATE_KEY],
    },
    metis: {
      url: "https://metis-mainnet.public.blastapi.io",
      accounts: [PRIVATE_KEY],
    },
  },
  // configuration for harhdat-verify plugin
  etherscan: {
    apiKey: `${etherscanApiKey}`,
    customChains: [
      {
        network: "metis",
        chainId: 1088,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
          browserURL: "https://explorer.metis.io",
        },
      },
    ],
  },
};

export default config;
