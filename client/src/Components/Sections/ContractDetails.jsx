import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ContractDetails = () => {
  const [clipbBoardState, setClipboardState] = useState(false);
  return (
    <>
      <section>
        <div className="mb-8">
          <div>
            <h1 className="text-center font-abc font-bold capitalize my-8 text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">
              token contract
            </h1>
            <p className="text-center text-[17px] mt-4 font-abc">
              Use the contract address below to add $RKT token to your wallet
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="rounded-[30px] flex flex-col lg:flex-row py-2 lg:py-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md">
            <div className="py-5 lg:py-8 px-7 flex-[2]">
              <p className="capitalize text-white text-lg font-medium">
                address
              </p>
              <div>
                <p className="text-gray-700 font-medium break-all inline break-words">
                  <CopyToClipboard
                    text="0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A"
                    onCopy={() => setClipboardState(true)}
                  >
                    <button>
                      0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A
                      {clipbBoardState && (
                        <span className="text-green-500">
                          {" "}
                          <br /> Copied
                        </span>
                      )}
                    </button>
                  </CopyToClipboard>
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full min-w-[1px] block bg-gradient-to-r from-[#b33f62] to-orange-600 undefined"></div>
            <div className="py-5 lg:py-8 px-7 flex-1">
              <p className="capitalize text-lg font-medium mb-1 lg:mb-3 text-white">
                decimal
              </p>
              <p className="text-base text-gray-700 font-medium"> 18</p>
            </div>
            <div className="h-[1px] w-full block bg-gradient-to-r from-[#b33f62] to-orange-600 undefined"></div>
            <div className="py-5 lg:py-8 px-7 flex-1">
              <p className="capitalize text-lg font-medium mb-1 lg:mb-3 text-white">
                network
              </p>
              <p className="text-base text-gray-700 font-medium">Hedera</p>
            </div>
            <div className="h-[1px] w-full block bg-gradient-to-r from-[#b33f62] to-orange-600 undefined"></div>
            <div className="py-5 lg:py-8 px-7 flex-1">
              <p className="capitalize text-lg font-medium mb-1 lg:mb-3 text-white">
                symbol
              </p>
              <p className="text-base text-gray-700 font-medium">$RKT</p>
            </div>
          </div>
        </div>


        
      </section>
    </>
  );
};

export default ContractDetails;



// 0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A

// ContractDetails
// 0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A