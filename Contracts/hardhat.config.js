require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_GOERLI_API_URL || "",
        blockNumber: 8747687
      }
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_API_URL || "",
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_API_URL || "",
      accounts: [process.env.PRIVATE_KEY],
    },
    gnosis: {
      url: process.env.ALCHEMY_GNOSIS_API_URL || "",
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: process.env.ALCHEMY_POLYGON_API_URL || "",
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      gnosis: process.env.GNOSISSCAN_API_KEY,
    },

  },
};
