import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import ProgressBar from "./ProgressBar";
// import { ContractSigning } from "../WalletConnect/WalletConnect";
import walletConnectFcn from "../WalletConnect/connectWallet";
import contractDeployFcn from "../WalletConnect/contractDeploy";
import contractExecuteFcn from "../WalletConnect/contractExecute";
import { Link } from "react-router-dom";
// import truncate from "../WalletConnect/WalletConnect/truncate";
// import { truncate, useGlobalState } from "../WalletConnect/store";

const HeroForm = ({ launchDate }) => {
  // const [truncate] = useGlobalState("contractTextSt");
  const [enteredValue, setEnteredValue] = useState('')

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // const [enteredValue, setEnteredValue] = useState("");

  const [walletData, setWalletData] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [connectTextSt, setConnectTextSt] = useState("🔌 Connect here...");

  const [contractAddress, setContractAddress] = useState();
  const [contractTextSt, setContractTextSt] = useState();
  const [executeTextSt, setExecuteTextSt] = useState();

  const [connectLinkSt, setConnectLinkSt] = useState("");
  const [contractLinkSt, setContractLinkSt] = useState();
  const [executeLinkSt, setExecuteLinkSt] = useState();

  // const WalletConnect = async () => {

  // };

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value * 39588);
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // Stop the countdown when the launch date is reached
      if (distance < 0) {
        clearInterval(countdown);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(countdown);
  }, [launchDate]);

  //Execue contract funtion
  // const valueChangeHandler = (event) => {
  //   setEnteredValue(event.target.value);
  // };

  const WalletConnect = async () => {
    if (account !== undefined) {
      setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
    } else {
      const wData = await walletConnectFcn();

      let newAccount = wData[0];
      let newNetwork = wData[2];
      if (newAccount !== undefined) {
        setConnectTextSt(`${newAccount}`);
        setConnectLinkSt(
          `https://hashscan.io/${newNetwork}/account/${newAccount}`
        );

        setWalletData(wData);
        setAccount(newAccount);
        setNetwork(newNetwork);
        setContractTextSt();
      }
    }
  };

  const ContractDeploy = async () => {
    if (account === undefined) {
      setContractTextSt("🛑 Connect a wallet first! 🛑");
    } else {
      const cAddress = await contractDeployFcn(walletData);

      if (cAddress === undefined) {
      } else {
        setContractAddress(cAddress);
        setContractTextSt(`Contract ${cAddress} deployed ✅`);
        setExecuteTextSt(``);
        setContractLinkSt(`https://hashscan.io/${network}/address/${cAddress}`);
      }
    }
  };

  const ExecuteContract = async () => {
    if (contractAddress === undefined) {
      setExecuteTextSt("🛑 Deploy a contract first! 🛑");
    } else {
      const [txHash, finalCount] = await contractExecuteFcn(
        walletData,
        contractAddress
      );

      if (txHash === undefined || finalCount === undefined) {
      } else {
        setExecuteTextSt(`${finalCount}`);
        setExecuteLinkSt(`https://hashscan.io/${network}/tx/${txHash}`);
      }
    }
  };

  return (
    <div className="max-w-[444px]">
      <div className=" bg-gradient-to-r from-[#b33f62] to-orange-600 rounded-tl-[20px] rounded-tr-[20px]  flex flex-col items-center text-center justify-start p-3 w-100">
        <div className="items-center flex justify-center w-100 gap-4 font-semibold mb-3 pt-3">
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {days}d
          </div>
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {hours}h
          </div>
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {minutes}m
          </div>
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {seconds}s
          </div>
        </div>
        <h3 className="uppercase text-[17px] text-white">
          Buy in before price increases!
        </h3>
        {/* progress bar */}
        <div className="my-2">
          <div className="w-[280px] md:w-[370px]">
            <ProgressBar />
          </div>
        </div>
        <p className="mb-2 font-semibold text-white">
          {`USDT Raised: ${executeTextSt} / $11,724,000`}
        </p>
        <div className="text-center mb-0 text-gray-500 font-semibold">
          Your Purchased THE = 0
          <Link to={executeLinkSt} target="_blank" className="text-center flex-wrap">
            {executeLinkSt}
          </Link>
        </div>
        <div className="w-[70px]"></div>
      </div>

      {/* crypto part  */}
      <div className="p-3 rounded-bl-[20px] rounded-br-[20px] shadow-2xl border border-orange-500  shadow-[#e56f6d] bg-white h-[550px] lg:h-[470px]">
        <Divider style={{ color: "#000" }}>1 THE = $0.0304</Divider>
        <div className="gap-4 flex transition-all">
          <button className="flex uppercase items-center justify-center  hover:bg-gray-300 bg-white ease-out transition-all duration-500 border border-black w-[130px] h-[40px] rounded-md">
            <img
              src="https://wallstmemes.com/assets/images/svg-icons/eth.svg"
              alt="crypto"
              className="h-[22px]"
            />{" "}
            <span className="text-[14px] px-2">ETH</span>
          </button>
          <button className="flex uppercase items-center justify-center hover:bg-gray-300 bg-white ease-out transition-all duration-500 border border-black w-[130px] h-[40px] rounded-md">
            <img
              src="https://wallstmemes.com/assets/images/svg-icons/usdt.svg"
              alt="crypto"
              className="h-[22px]"
            />{" "}
            <span className="text-[14px] px-2">USDT</span>
          </button>
          <button className="flex uppercase items-center justify-center hover:bg-gray-300 bg-white ease-out transition-all duration-500 border border-black w-[130px] h-[40px] rounded-md">
            <img
              src="https://wallstmemes.com/assets/images/svg-icons/card.svg"
              alt="crypto"
              className="h-[22px]"
            />{" "}
            <span className="text-[14px] px-2">CARD</span>
          </button>
        </div>

        {/* balance  */}

        <div>
          <div className="my-3">
            <div className="text-center">
              <span className="font-semibold text-gray-600 text-[14px]">
                ETH Balance: 0
              </span>
              <Divider />
            </div>
          </div>
        </div>

        {/* amount to pay  */}

        <div className="max-w-[412px] md:max-w-[700px] lg:w-full h-[76.2px]">
          <div className="block lg:flex gap-2">
            {/* Amount to pay  */}
            <div className="w-full lg:w-[218px]">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="amount"
                  className="block text-[13px] text-gray-600"
                >
                  Amount in
                  <span className="uppercase font-bold"> eth</span> you pay
                </label>

                <div className="capitalize font-bold cursor-pointer text-[13px]">
                  max
                </div>
              </div>
              {/* Amountfield  */}
              <div className="items-start flex relative">
                <input
                  type="number"
                  onChange={inputChangeHandler}
                  placeholder="0"
                  className="bg-gray-100 p-4  w-full md:w-[full] lg:w-[205px] rounded-md active:border-none"
                />
                <div className="absolute right-3 top-3 md:flex ">
                  <img
                    src="https://wallstmemes.com/assets/images/svg-icons/eth.svg"
                    alt="crypto"
                    className="h-[22px]"
                  />
                </div>
              </div>
            </div>

            {/* Amount you receive  */}
            <div className="w-full lg:w-[218px]">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="amount"
                  className="block text-[13px] text-gray-600"
                >
                  Amount in
                  <span className="uppercase font-bold"> $rkt</span> you receive
                </label>
              </div>

              {/* Amountfield  */}
              <div className="items-start flex relative">
                <input
                  type="number"
                  value={enteredValue}
                  placeholder="0"
                  className="bg-gray-100 p-4 w-full lg:w-[205px] rounded-md active:border-none"
                />
                <div className="flex absolute right-3 top-3">
                  <img
                    src="https://gempad.app/logo.svg"
                    alt="crypto"
                    className="h-[22px]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* For the Button below  */}
          <div className="mt-4 max-w-[380px] sm:w-[280px] lg:w-full">
            <button
              className="mb-2 bg-black text-white w-full sm:w-[290px]  md:w-[422px] p-3 sm:p-2 rounded-full"
              onClick={WalletConnect}
            >
              {connectTextSt ? (
                <p className="font-abc text-[12px] lg:text-[16px]">
                  {connectTextSt}{" "}
                </p>
              ) : (
                "Connect Wallet"
              )}
            </button>
            <button
              className="mb-2 border-2 border-black text-black w-full md:w-[422px] p-3 rounded-full"
              onClick={ContractDeploy}
            >
              {contractTextSt ? (
                <p className="text-[12px]">{contractTextSt}</p>
              ) : (
                "Deploy contract"
              )}
            </button>
            <button
              className="mb-2  bg-gray-100 text-gray-600 w-full p-3 md:w-[422px] rounded-full"
              onClick={ExecuteContract}
            >
              {executeTextSt ? <p>{executeTextSt}</p> : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
