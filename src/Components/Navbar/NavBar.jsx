import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  SettingOutlined
} from "@ant-design/icons";
import icon from "../../assets/logopng.png";

const NavBar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <Link to="/home">CryptoPark</Link>
          </Typography.Title>
        </div>
        <div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrency">Cryptocurrency</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
                <Menu.Item icon={<SettingOutlined />}>
                    <Link to="/setting">Settings</Link>
                </Menu.Item>
            </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
