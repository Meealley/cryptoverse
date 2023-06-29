import React from "react";
import { WalletFilled, HomeFilled, ReadFilled, SendOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const HomeNav = () => {
  return (
    <div className="mb-8 my-4">
      <div className="flex justify-between">
        <div className="flex justify-between">
          {/* <div className="pr-4">
            <button className="px-2 text-[#fff] text-[12px] bg-[#00000099] rounded-md">
              <span><HomeFilled/></span>  Home
            </button>
          </div>
          <div className="pr-4">docs</div>
          <div>Presale alerts</div> */}
          <div className=" text-left md:text-left">
          <Menu className="hidden md:flex" style={{ background: "none", width : "500px", textAlign : "left", border: "none" }}>
            <Menu.Item icon={<HomeFilled />}>Home</Menu.Item>
            <Menu.Item icon={<ReadFilled />}>Docs</Menu.Item>
            <Menu.Item icon={<SendOutlined />}>Presale Alerts</Menu.Item>
          </Menu>
          </div>
        </div>
        <div>
          <button className="px-4 md:px-4 py-2 md:py-2 text-white cursor-pointer font-raj bg-[#10bbc7] hover:bg-[#03e9f4] rounded-full font-light text-[15px] border-[#03e9f4] shadow-[#03e9f4] ">
            <span>
              <WalletFilled />
            </span>{" "}
            <span>Connect wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
