import React from "react";
import tokenoMicsPicture from "../../assets/Rocket Launchpad SIte 3.png"

const Tokenomics = () => {
  return (
    <>
      <section className="my-12">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className=" mt-12 text-[37px] font-abc font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">Tokenomics</h1>
            <p className=" my-8 text-[17px] font-abc text-center">
              $DLANCE is an ERC20 token deployed on Ethereum mainet. The total
              supply of $DLANCE tokens is 1 billion (1,000,000,000).
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
            className="w-full lg:w-[70%]"
              src={tokenoMicsPicture}
              alt="tokenomics"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
