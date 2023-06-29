import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Col, Card, Input } from "antd";
import { useGetCryptoQuery } from "../Services/CryptoAPI";

const CryptoCurrencyPage = ({ simplified }) => {
  const count = simplified ? 10 : 200;
  
  const { data: crypoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState(crypoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  const searchItemHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // setCryptos(crypoList?.data.coins);

    const filteredData = crypoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [crypoList, searchTerm]);

  const filteredData = crypoList?.data?.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(cryptos);
  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={searchItemHandler}
          />
        </div>
      )}

      {filteredData.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cryptocurrency Not Found</p>
      ) : (
        <Row gutter={[20, 32]} className="crypto-card-container">
          {cryptos?.map((crypto) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
              <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
                <Card
                  style={{ color: crypto.color }}
                  title={`${crypto.rank} ${crypto.name}`}
                  extra={<img className="crypto-image" src={crypto.iconUrl} />}
                  hoverable
                >
                  <p>Price : ${millify(crypto.price)}</p>
                  <p>Market Cap : ${millify(crypto.marketCap)}</p>
                  <p>Daily Change : ${millify(crypto.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default CryptoCurrencyPage;
