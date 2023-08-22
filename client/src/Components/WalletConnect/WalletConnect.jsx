export const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

// import { useState } from "react";
// import icon from "../../assets/Rocket Launchpad 2.1.png";
// import { HashConnect } from "hashconnect";
// import { TransferTransaction, AccountId, } from "@hashgraph/sdk";
// import { ContractId, ContractExecuteTransaction } from "@hashgraph/sdk";
// import { useState } from "react";
// import SimpleCrypto from 'simple-crypto-js'

// import SimpleCrypto from "simple-crypto-js";

// const contractId = ContractId.fromString("0.0.15391081");
// const secretKey = "Wale"
// const simpleCrypto = new SimpleCrypto(secretKey)
// let accountId = "";

// let savedData = {
//   topic: "",
//   pairingString: "",
//   privateKey: "",
//   pairedWalletData: null,
//   pairedAccounts: [],
// };

// let appMetaData = {
//   name: "Rocket Launchpad",
//   description: "The first launchpad to take you to the moon.",
//   icon: icon,
// };

// const [connected, setConnected] = useState("")

// let hashconnect = new HashConnect()

// export const connectWallet = async () => {
//   if (savedData.pairedAccounts.length === 0) {
//     let initData = await hashconnect.init(appMetaData)
//     savedData.privateKey = initData.privKey
//     let state = await hashconnect.connect()
//     savedData.topic = state.topic;
//     savedData.pairingString = hashconnect.generatePairingString(
//       state,
//       "testnet",
//       false
//     )
//    hashconnect.findLocalWallets()

//     hashconnect.pairingEvent.once((pairingData) => {
//       pairingData.accountIds.forEach((id) => {
//         if (savedData.pairedAccounts.indexOf(id) === -1)
//           savedData.pairedAccounts.push(id)
//       })
//     })
//     return savedData
//   }

// let initData = await hashconnect.init(appMetaData);
// savedData.privateKey = initData.privKey;

// let state = await hashconnect.connect();
// savedData.topic = state.topic;

// console.log(`\nTopic is ${savedData.topic}\n`);

// savedData.pairingString = hashconnect.generatePairingString(
//   state,
//   "testnet",
//   false
// );

// const result = hashconnect.findLocalWallets();

// console.log(result + `result`);
// hashconnect.connectToLocalWallet(savedData.pairingString);

// hashconnect.pairingEvent.once((pairingData) => {
//   pairingData.accountIds.forEach((id) => {
//     accountId = id;
//     console.log(accountId);
//   });
// });
// };

// export const ContractSigning = async () => {
//   const provider = hashconnect.getProvider(
//     "testnet",
//     savedData.topic,
//     savedData.pairedAccounts[0]
//   );
//   const signer = hashconnect.getSigner(provider)

//   const sendHbarTx = await new ContractExecuteTransaction()
//     .setContractId(contractId)
//     .setGas(100000)
//     .setPayableAmount(10)
//     .setFunction("sendToContract")
//     .freezeWithSigner(signer)

//   await sendHbarTx.executeWithSigner(signer)
// };

// const sendTransaction = async () => {
//   const provider = hashconnect.getProvider(
//     "testnet",
//     savedData.topic,
//     accountId
//   );

//   const signer = hashconnect.getSigner(provider);

//   let trans = await new TransferTransaction()
//     .addHbarTransfer(AccountId.fromString(accountId), -1)
//     .addHbarTransfer(AccountId.fromString('0.0.15068683'), 1)
//     .freezeWithSigner(signer);

//   let res = await trans.executeWithSigner(signer);
//   console.log(res);
// };

// function WalletConnect() {
//   return (
//     <>
//       <span className="px-4 text-white" onClick={async () => {
//         const data = await connectWallet()
//         sets
//       }}>
//         Connect wallet
//       </span>
//     </>
//   );
// }

// export default WalletConnect;
