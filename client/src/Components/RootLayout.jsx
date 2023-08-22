import React from "react";
import NavBar from "./Navbar/NavBar";
import "../App.css";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Laster from "./Sections/Footer";

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
        <Laster />
      </div>
    </div>
  );
};

export default RootLayout;
