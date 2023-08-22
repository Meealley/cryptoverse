import React, { useState, useEffect } from "react";
import { Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  SettingOutlined,
  BorderInnerOutlined,
} from "@ant-design/icons";
import icon from "../../assets/Rocket Launchpad 2BBB.png";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreeensize] = useState(null);

  useEffect(() => {
    const resizeHandler = () => setScreeensize(window.innerWidth);

    window.addEventListener("resize", resizeHandler);

    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (screenSize < 850) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
      <div className="nav-container bg-[#0c03ae]">
        <div className="logo-container bg-white relative">
          <div className="mobile-logo">
            <img
              src={icon}
              className="w-[12rem] h-[4rem] object-cover"
              alt="logo"
            />
            <Typography.Title level={4} className="logo px-4 hidden md:flex">
              {/* <Link to="/home">$RKT Launchpad</Link> */}
            </Typography.Title>
            {/* for button */}
            <div className="pl-5 flex justify-center">
              <button className="px-4 py-2 hidden md:flex text-white cursor-pointer font-raj bg-gradient-to-r from-[#b33f62] to-orange-600 hover:bg-[#03e9f4] rounded-full font-semibold text-[13px]  ">
                Buy $RKT
              </button>
            </div>
            <div></div>
          </div>
          <Button
            className="bg-white flex items-center lg:hidden text-[20px] absolute right-6"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-clip"
            >
              
                <Menu theme="dark">
                  <Menu.Item icon={<HomeOutlined />}>
                    <Link to="">$RKT Home</Link>
                  </Menu.Item>
                  <Menu.Item icon={<BorderInnerOutlined />}>
                    <Link to="/presale">$RTK Presales</Link>
                  </Menu.Item>
                  <Menu.Item icon={<FundOutlined />}>
                    <Link to="/lock">$RKT Lock</Link>
                  </Menu.Item>
                  <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/liquidity-lock">$RKT Liquidity Locks</Link>
                  </Menu.Item>
                  <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item icon={<SettingOutlined />}>
                    <Link to="/kyc">KYC & Marketing</Link>
                  </Menu.Item>
                </Menu>
            
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
