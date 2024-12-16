import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
  ZERO_ADDRESS,
  getSchemaUID,
  ZERO_BYTES32
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

async function main() {
  const EASContractAddress = "0x5E3FF1a3B34c06Beb247b38484067c845cfe6fAE"; // Calibration v0.26

  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress);

  let url = "https://metis-mainnet.public.blastapi.io";

  const provider = new ethers.JsonRpcProvider(url);

  const wallet = new ethers.Wallet(PRIVATE_KEY as string, provider);

  const schemaRegistryContractAddress =
    "0xa4Ab012Ba80B127E5B543719FFb50363D78C2564";
  const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

  eas.connect(wallet as any);

  schemaRegistry.connect(wallet as any);

  const approvalSchema = "bytes32 type, bytes32 round";
  const metadataSchema =
    "string name, string metadataPtr, uint256 metadataType, bytes32 type, bytes32 round";
  const resolverAddress = ZERO_ADDRESS; // Sepolia 0.26
  const revocable = true;

  const approvalSchemaCreation = await schemaRegistry.register({
    schema:approvalSchema,
    resolverAddress,
    revocable,
  });

  // Optional: Wait for transaction to be validated
  await approvalSchemaCreation.wait();

  const metadataSchemaCreation = await schemaRegistry.register({
    schema:metadataSchema,
    resolverAddress,
    revocable,
  });

  // Optional: Wait for transaction to be validated
  await metadataSchemaCreation.wait();

  const approvalSchemaUID = getSchemaUID(approvalSchema, resolverAddress, true);
  console.log("approvalSchemaUID:", approvalSchemaUID);

  const metadataSchemaUID = getSchemaUID(metadataSchema, resolverAddress, true);
  console.log("metadataSchemaUID:", metadataSchemaUID);


  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(approvalSchema);
  const encodedData = schemaEncoder.encodeData([
    { name: "type", value: ZERO_BYTES32, type: "bytes32" },
    { name: "round", value: ZERO_BYTES32, type: "bytes32" },
  ]);

  const schemaUID = approvalSchemaUID;

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: ZERO_ADDRESS,
      expirationTime: BigInt(0),
      revocable: true, // Be aware that if your schema is not revocable, this MUST be false
      data: encodedData,
    },
  });

  const newAttestationUID = await tx.wait();

  console.log("New attestation UID:", newAttestationUID);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
