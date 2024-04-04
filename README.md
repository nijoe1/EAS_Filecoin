


# Deploying EAS on Filecoin

To deploy the EAS (Ethereum Application Service) on the Filecoin network, follow these simple steps:

1. **Set up Environment Variables**: 
   - Include your private key into the `.env` file. You may need to rename `.env.example` to `.env` if it's not already named so.

2. **Bridge FIL Tokens**:
   - For Filecoin deployment, it's necessary to bridge your FIL tokens from the FVM address to the FEVM using a wallet. You can use tools like [Filet Finance Wallet blog post](https://www.filet.finance/blog_en/how-to-transfer-fil-token-from-f1-address-to-filecoin-fvm-supported-address/) or [FoxWallet](https://faucet.calibnet.chainsafe-fil.io/funds.html) for this purpose.

3. **Calibration Faucet (Optional)**:
   - If you wish to test it on Calibration, you can utilize the Calibration faucet available at [faucet.calibnet.chainsafe-fil.io](https://faucet.calibnet.chainsafe-fil.io/funds.html) to obtain funds.

4. **Deploy on Mainnet**:
   - If you're ready to deploy on Filecoin mainnet, navigate to `hardhat.config.js` and modify the default network to Filecoin. Then, execute the following commands:

Just run:

- yarn 
- yarn hardhat deploy

After running these commands, you will successfully deploy the EAS contracts on the Filecoin network.

Keep in mind that filecoin addresses need to take at least one transaction to be considered as actors into the chain is not like in ethereum that you can send to an address that is not already created. **Not critical hint just pointing that out**!

