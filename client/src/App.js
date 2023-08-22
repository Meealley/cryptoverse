import React from "react";
// import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  Navbar,
  HomePage,
  ExchangesPage,
  CryptoCurrencyPage,
  CryptoDetailsPage,
  NewsPage,
  KYC,
} from "./Components/index";
import "./App.css";
import RootLayout from "./Components/RootLayout";
import ContactUs from "./Components/Sections/ContactUs/ContactUs";
import PrivacyPolicy from "./Components/Sections/Footer/PrivacyPolicy";
import Presale from "./Components/Presale/Presale";
import RKTLock from "./Components/RKTLock/RKTLock";
import LiquidityLock from "./Components/RKTLiquidityLock/LiquidityLock";
// import { HomeData } from "./data/HomeData";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      // { path: "", element: <Navbar /> },
      { path: "", element: <HomePage /> },
      { path: "presale", element: <Presale /> },
      // { path: "exchanges", element: <ExchangesPage /> },
      { path: "lock", element: <RKTLock /> },
      { path: "liquidity-lock", element: <LiquidityLock /> },
      // { path: "cryptocurrency", element: <CryptoCurrencyPage /> },
      // { path: "crypto/:coinId", element: <CryptoDetailsPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "kyc", element: <KYC /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "privacy", element: <PrivacyPolicy /> },
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
