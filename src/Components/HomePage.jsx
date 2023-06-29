import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Space, Row, Col, Statistic } from "antd";
// import { HomeData } from "./data/HomeData";
import { useGetCryptoQuery } from "../Services/CryptoAPI";
import { Title } from "chart.js";
import CryptoCurrencyPage from "./CryptoCurrencyPage";
import NewsPage from "./NewsPage";

const HomePage = (props) => {
  const { data: cryptoData, isFetching } = useGetCryptoQuery(10);
  const globalStats = cryptoData?.data?.stats;

  if (isFetching) return "Loading...";
//   console.log(cryptoData);

  return (
    <>
      <div className="heading">Global Crypto Stats</div>
      <Row>
        <Col span={12} key={globalStats.id}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12} key={globalStats.id}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12} key={globalStats.id}>
          <Statistic
            title="Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12} key={globalStats.id}>
          <Statistic
            title="24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12} key={globalStats.id}>
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <h2 className="home-title">Top 10 cryptocurrency in the world</h2>
        <h3 className="show-more">
          <Link to="/cryptocurrency">Show more</Link>
        </h3>
      </div>
      <CryptoCurrencyPage simplified={true}/>
      <div className="home-heading-container">
        <h2 className="home-title">Latest Crypto News</h2>
        <h3 className="show-more">
          <Link to="/news">Show more</Link>
        </h3>
      </div>
      <NewsPage simplified/>
    </>
  );
};

export default HomePage;
