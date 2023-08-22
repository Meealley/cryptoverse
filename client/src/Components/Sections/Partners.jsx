import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div className="py-12">
      <div>
        <Marquee>
          <div className="w-[139px] h-[70px] px-6">
            <img
              src="https://deelance.com/images/seen-on/cryptonews.svg"
              className="w-[139px]"
              alt="cyptonews"
            />
          </div>
          <div className="w-[139px] h-[70px]  px-6">
            <img
              src="https://deelance.com/images/seen-on/cointelegraph.svg"
              alt="cointelegraph"
            />
          </div>
          <div className="w-[139px] h-[70px]  px-6">
            <img
              src="https://deelance.com/images/seen-on/insider.png"
              alt="businessinsider"
            />
          </div>
          <div className="w-[139px] h-[70px]  px-6">
            <img
              src="https://deelance.com/images/seen-on/yahoo-finance.png"
              alt="yahoofin"
            />
          </div>
          <div className="w-[139px] h-[70px]  px-6">
            <img
              src="https://deelance.com/images/seen-on/finanzen-net.svg"
              className="bg-black p-4"
              alt="financdnet"
            />
          </div>
          <div className="w-[139px] h-[70px]  px-6">
            <img
              src="https://deelance.com/images/seen-on/beInCrypto.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
