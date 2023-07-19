import React, { useState, useEffect } from "react";
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";

const core = new Core({
  projectId: process.env.PROJECT_ID,
});

// const web3wallet = await Web3Wallet.init({
//   core, // <- pass the shared `core` instance
//   metadata: {
//     name: "Demo app",
//     description: "Demo Client as Wallet/Peer",
//     url: "www.walletconnect.com",
//     icons: [],
//   },
// });

const WalletConnect = () => {
  const [signClient, setSignClient] = useState();

  async function createClient() {
    try {
      const web3wallet = await Web3Wallet.init({
        core, // <- pass the shared `core` instance
        metadata: {
          name: "Demo app",
          description: "Demo Client as Wallet/Peer",
          url: "www.walletconnect.com",
          icons: [],
        },
      });
      console.log("client", web3wallet);
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    if (!signClient) {
      createClient();
    }
  }, [signClient]);
  return <div></div>;
};
export default WalletConnect;
