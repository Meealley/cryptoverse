import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
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
import icon from "../../assets/logopng.png";

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
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <div className="mobile-logo"> 
            <Avatar src={icon} size="large" />
            <Typography.Title level={4} className="logo">
              <Link to="/home">$THE-Token</Link>
            </Typography.Title>
            {/* for button */}
            <div className="pl-5">
              <button className="px-4 py-2 text-white cursor-pointer font-raj bg-[#10bbc7] hover:bg-[#03e9f4] rounded-md font-semibold text-[13px] border-[#03e9f4] shadow-[#03e9f4] ">Buy $THE</button>
            </div>
            <div></div>
          </div>
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </div>

        {activeMenu && (
          <div>
            <div>
              <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                  <Link to="/home">$THE Home</Link>
                </Menu.Item>
                <Menu.Item icon={<BorderInnerOutlined />}>
                  <Link to="/home">$THE Presales</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                  <Link to="/cryptocurrency">$THE Lock</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                  <Link to="/exchanges">$THE Liquidity Locks</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                  <Link to="/news">News</Link>
                </Menu.Item>
                <Menu.Item icon={<SettingOutlined />}>
                  <Link to="/setting">KYC & Marketing</Link>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
