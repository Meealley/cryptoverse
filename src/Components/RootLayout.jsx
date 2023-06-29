import React from "react";
import NavBar from "./Navbar/NavBar";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import { Layout, Space, Typography } from "antd";

const RootLayout = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <Layout.Content>
            <div className="routes">
              <Outlet />
            </div>
          </Layout.Content>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ textAlign: "center", color: "white" }}
          >
            Cryptoverse <br />
            All right reserved for future use.
          </Typography.Title>
          <Space>
            <Link to="/home">Home</Link>
            <Link to="/Exchange">Exchange</Link>
            <Link to="/cryptocurrency">Cryptocurrency</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
