import React from "react";
// import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  ExchangesPage,
  CryptoCurrencyPage,
  CryptoDetailsPage,
  NewsPage,
  Setting,
} from "./Components/index";
import "./App.css";
import RootLayout from "./Components/RootLayout";
// import { HomeData } from "./data/HomeData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navbar /> },
      { path: "/home", element: <HomePage/> },
      { path: "/exchanges", element: <ExchangesPage /> },
      { path: "/cryptocurrency", element: <CryptoCurrencyPage /> },
      { path: "/crypto/:coinId", element: <CryptoDetailsPage /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
]);



const App = (props) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

