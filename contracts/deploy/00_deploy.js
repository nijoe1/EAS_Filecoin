require("hardhat-deploy");
require("hardhat-deploy-ethers");

const { ethers } = require("hardhat");

const private_key = network.config.accounts[0];

const wallet = new ethers.Wallet(private_key, ethers.provider);

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  console.log("Wallet+ Ethereum Address:", wallet.address);

  //deploy SchemaRegistry
  const SchemaRegistry = await deploy("SchemaRegistry", {
    from: wallet.address,
    args: [],
    log: true,
  });


  //deploy SchemaRegistry
  const TAS = await deploy("EAS", {
    from: wallet.address,
    args: [SchemaRegistry.address],
    log: true,
  });

  console.log("TAS deployed to:", TAS.address);
};


