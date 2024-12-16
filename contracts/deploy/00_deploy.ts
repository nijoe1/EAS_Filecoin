import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

/**
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployEAS: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const [deployerSigner] = await hre.ethers.getSigners();
  const deployer = await deployerSigner.getAddress();

  const { deploy } = hre.deployments;

  console.log("Wallet+ Ethereum Address:", deployer);

  //deploy SchemaRegistry
  const SchemaRegistry = await deploy("SchemaRegistry", {
    from: deployer,
    args: [],
    log: true,
  });

  //deploy SchemaRegistry
  const EAS = await deploy("EAS", {
    from: deployer,
    args: [SchemaRegistry.address],
    log: true,
  });

  console.log("EAS deployed to:", EAS.address);
};

export default deployEAS;
