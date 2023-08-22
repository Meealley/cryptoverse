import React, { useState } from "react";
import {
  WalletFilled,
  HomeFilled,
  ReadFilled,
  SendOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
// import { connectWallet } from "../WalletConnect/WalletConnect";
// import WalletConnect from "../WalletConnect/WalletConnect";

const HomeNav = () => {
  const [savedData, setSaveData] = useState({});
  return (
    <div className="mb-8 my-4">
      <div className="flex justify-between">
        <div className="flex justify-between ">
          {/* <div className="pr-4">
            <button className="px-2 text-[#fff] text-[12px] bg-[#00000099] rounded-md">
              <span><HomeFilled/></span>  Home
            </button>
          </div>
          <div className="pr-4">docs</div>
          <div>Presale alerts</div> */}
          <div className=" text-left md:text-left  ">
            <Menu
              className="hidden lg:flex"
              style={{
                background: "none",
                width: "500px",
                textAlign: "left",
                border: "none",
              }}
            >
              <Menu.Item icon={<HomeFilled />}>Home</Menu.Item>
              <Menu.Item icon={<ReadFilled />}>Docs</Menu.Item>
              <Menu.Item
                icon={<SendOutlined />}
                style={{ background: "#a60f03", color: "white" }}
              >
                Presale Alerts
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="relative">
          <button className="px-4 md:px-4  py-2 md:py-2 text-white cursor-pointer font-raj  bg-gradient-to-r from-[#b33f62] to-orange-600 rounded-full font-light text-[15px]">
            <span className="absolute top-[5px] left-2">
              <WalletFilled />
            </span>{" "}
            {/* <WalletConnect /> */}
            <span
              // onClick={async () => {
              //   const savedData = await connectWallet()
              //   setSaveData(savedData)
              // }}
            >
              Connect Wallet
            </span>
          </button>
        </div>
      </div>
          {savedData && <p className="text-white bg-black">{savedData.pairingString}</p>}
    </div>
  );
};

export default HomeNav;
