import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
  ZERO_ADDRESS,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

async function main() {
  const EASContractAddress =
    "0xA5f3029196241CDB315118EEfc9c2F94d37d373f"; // Calibration v0.26

  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress);

  let url = "https://calibration.filfox.info/rpc/v1";
  const provider = new ethers.JsonRpcProvider(url);

  // Connects an ethers style provider/signingProvider to perform read/write functions.
  // MUST be a signer to do write operations!
  eas.connect(provider as any);

  const signer = new ethers.Wallet(PRIVATE_KEY as string, provider);

  const schemaRegistryContractAddress =
    "0xBc58b8bd555A63c36Cff898604e318dF90B166d2";
  const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

  schemaRegistry.connect(signer as any);

  const schema = "uint256 eventId, uint8 voteIndex";
  const resolverAddress = ZERO_ADDRESS; // Sepolia 0.26
  const revocable = true;

  const transaction = await schemaRegistry.register({
    schema,
    resolverAddress,
    revocable,
  });

  // Optional: Wait for transaction to be validated
  await transaction.wait();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
