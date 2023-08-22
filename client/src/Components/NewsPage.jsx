import React, { useState } from "react";
import { Select, Row, Col, Avatar, Card, Typography } from "antd";
import moment from "moment";
// import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../Services/NewsAPI";
import { useGetCryptoQuery } from "../Services/CryptoAPI";
// import { Title } from "chart.js";
import Loader from "./Loader";


const { Text } = Typography;
const {Option} = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsPage = ({ simplified }) => {
  const { data: cryptoData} = useGetCryptoQuery(100);

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 100,
  });

  const newsSearchHandler = (value) => {
    setNewsCategory(value);
  };

  if (isFetching) return <Loader />;

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="search-news"
              placeholder="Select a news category"
              optionFilterProp="children"
              onChange={newsSearchHandler}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {cryptoData?.data?.coins?.map(coin => <Option value={coin.name}>{coin.name}</Option>)}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <p style={{ fontSize: 14 }} className="news-title">
                    {news.name}
                  </p>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="News images"
                  />
                </div>
                <p style={{ fontSize: 12 }}>
                  {news.description > 100
                    ? `${news.description.substring(0, 80)} ....`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="news"
                    />
                    <Text className="provider-name" style={{ fontSize: 10 }}>
                      {" "}
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <p>{moment(news.datePublished).startOf("ss").fromNow()}</p>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NewsPage;
