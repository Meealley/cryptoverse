import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Select, Typography } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../Services/CryptoAPI";
const { Option } = Select;

const CryptoDetailsPage = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  const periodHandler = (value) => {
    setTimePeriod(value);
  };

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <>
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <h2 className="coin-name" >
            {cryptoDetails.name} ({cryptoDetails.symbol}) Price
          </h2>
          <p>{cryptoDetails.description}</p>
        </Col>

        <Select
          defaultValue="7d"
          className="select-timeperiod"
          placeholder="Select Time period"
          onChange={periodHandler}
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        {/* { line charts} */}

        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <h1 className="coin-detailes-heading">
                {cryptoDetails.name} value Statistics
              </h1>
              <p>Overview of stats showing {cryptoDetails.name}</p>
            </Col>
            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <h3>{icon}</h3>
                  <h3>{title}</h3>
                </Col>
                <h3 className="stats">{value}</h3>
              </Col>
            ))}
          </Col>

          {/* Other stats  */}
          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <h1 className="coin-detailes-heading">
                Other {cryptoDetails.name} Statistics
              </h1>
              <p>Overview of stats showing {cryptoDetails.name}</p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <h3>{icon}</h3>
                  <h3>{title}</h3>
                </Col>
                <h3 className="stats">{value}</h3>
              </Col>
            ))}
          </Col>
        </Col>

        <Col className="coin-desc-link">
          <Row className="coin-desc">
            <h3 className="coin-details-heading">
              What is {cryptoDetails.name}?
              {HTMLReactParser(cryptoDetails.description)}
            </h3>
          </Row>
          <Col className="coin-links">
            <h3 className="coin-details-heading">{cryptoDetails.name} Links</h3>
            {cryptoDetails.links.map((link) => (
              <Row className="coin-link" key={link.name}>
                <p style={{ fontSize: 12 }} className="link-name">
                  {link.type}
                </p>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default CryptoDetailsPage;
