import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Statistic } from "antd";
// import { HomeData } from "./data/HomeData";
import { useGetCryptoQuery } from "../Services/CryptoAPI";
// import { Title } from "chart.js";
// import CryptoCurrencyPage from "./CryptoCurrencyPage";
// import NewsPage from "./NewsPage";
import Loader from "./Loader";
import HomeNav from "./Navbar/HomeNav";
import HeroPage from "./Hero/HeroPage";
import UtilsCard from "./Sections/Utilities";
import Tools from "./Sections/Tools";
import Tokenomics from "./Sections/Tokenomics";
import Roadmap from "./Sections/Roadmap";
import MeetTheTeam from "./Sections/MeetTheTeam";
import FAQ from "./Sections/FAQ";
import ContractDetails from "./Sections/ContractDetails";
import SHQ from "./Sections/SHQ";
import Cookie from "./Sections/Footer/Cookie";


const HomePage = (props) => {
  const { data: cryptoData, isFetching } = useGetCryptoQuery(10);
  const globalStats = cryptoData?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <div className="bg-bg-image">
      <div className="heading font-raj font-bold tracking-wide ">
        $RKT Home |{" "}
        <span className="underline font-abc text-[14px]">
          KYC & Audit<Link></Link>
        </span>
      </div>
      <HomeNav />
      <HeroPage />
      <Row className="flex justify-center">
        <div
          className="bg-white p-8 rounded-md shadow-lg mx-2 w-[400px] my-2 md:w-[200px] h-[130px]"
          span={12}
          key={globalStats.id}
        >
          <Statistic title="Total Liquidity Raised" value={globalStats.total} />
        </div>
        <div
          className="bg-white p-8 rounded-md shadow-lg mx-2 w-[400px] my-2 md:w-[200px] h-[130px]"
          span={12}
          key={globalStats.id}
        >
          <Statistic
            title="Total Projects"
            value={millify(globalStats.totalExchanges)}
          />
        </div>
        <div
          className="bg-white p-8 rounded-md shadow-lg mx-2 w-[400px] my-2 md:w-[200px] h-[130px]"
          span={12}
          key={globalStats.id}
        >
          <Statistic
            title="Total Participants"
            value={millify(globalStats.totalMarketCap)}
          />
        </div>
        <div
          className="bg-white p-8 rounded-md shadow-lg mx-2 w-[400px] my-2 md:w-[200px] h-[130px]"
          span={12}
          key={globalStats.id}
        >
          <Statistic
            value={millify(globalStats.total24hVolume)}
            title="Total Values Locked"
          />
        </div>
        <UtilsCard />
        <Tools />
        <Tokenomics />
        <Roadmap />
      </Row>
        <MeetTheTeam />
        <FAQ />
        
        <ContractDetails />
        <SHQ />
        <Cookie />

       {/* <Laster /> */}
      <div className="home-heading-container"></div>

      {/* <div className="home-heading-container">
        <h2 className="home-title">Top 10 cryptocurrency in the world</h2>
        <h3 className="show-more">
          <Link to="/cryptocurrency">Show more</Link>
        </h3>
      </div>
      <CryptoCurrencyPage simplified={true} />
      <div className="home-heading-container">
        <h2 className="home-title">Latest Crypto News</h2>
        <h3 className="show-more">
          <Link to="/news">Show more</Link>
        </h3>
      </div>
      <NewsPage simplified /> */}
    </div>
  );
};

export default HomePage;
