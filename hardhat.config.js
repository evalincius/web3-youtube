require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
  solidity: "0.8.9",
  networks: {
    local: {
      url: "http://127.0.0.1:7545",
      accounts: [process.env.PRIVATE_KEY_LOCAL],
    }, 
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
};
