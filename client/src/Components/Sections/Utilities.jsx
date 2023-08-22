import React from "react";

// const UtilsCard = () => {
//   return (
//     <>
//       <div>
//         <div>
//             <h2>Utilities</h2>
//         </div>
//         <div className="block md:flex justify-center mx-8">
//           {Array(3)
//             .fill()
//             .map((card, i) => (
//               <div key={i}>
//                 <Utilities key={i} />
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

const UtilsCard = () => {
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="p-4 flex flex-col items-center justify-center">
          <h1 className="font-bold text-[37px] font-abc bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">Ecosystem</h1>
          <p className="mt-4 text-center text-[18px] font-abc  py-8">
            We build a suite of tools for the world of decentralized finance.
            RocketMoon, RocketSale, RocketLock, RocketSwap, we $RKT everything!
          </p>
        </div>
        <div className="block lg:flex  justify-center">
          <div className="w-[345px] h-[340px] mx-0 lg:mx-4  flex flex-col justify-center items-center bg-gradient-to-br from-[#b33f62] to-orange-600 rounded-xl shadow-lg text-white">
            <div className="py-[40px]">
              <div className="mx-auto mb-8 h-24 w-24">
                <img
                  className="rounded-full ring-[10px] ring-gradient-to-l from-[#b33f62] to-orange-600 ring-offset-4"
                  src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-cartoon-illustration-red-rocket-png-image_6515439.png"
                  alt="utils"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl font-bold tracking-light capitalize">
                  RocketMoon
                </h2>
              </div>
              <div className="text-center px-8">
                <p className="text-[15px] py-4">
                  The best launchpad for professional teams
                </p>
              </div>
            </div>
          </div>
          <div className="w-[345px] h-[340px] mx-0 lg:mx-4 my-4 md:my-0 flex flex-col justify-center items-center bg-gradient-to-br from-[#b33f62] to-orange-600 rounded-xl shadow-lg text-white">
            <div className="py-[40px]">
              <div className="mx-auto mb-8 h-24 w-24">
                <img
                  className="rounded-full ring-[10px] ring-gradient-to-l from-[#b33f62] to-orange-600 ring-offset-4"
                  src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-cartoon-illustration-red-rocket-png-image_6515439.png"
                  alt="utils"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl font-bold tracking-light capitalize">
                  RocketSales
                </h2>
              </div>
              <div className="text-center px-8">
                <p className="text-[15px] py-4">
                  Launch a token sale with a few clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[345px] h-[340px] mx-0 md:mx-4  flex flex-col justify-center items-center bg-gradient-to-br from-[#b33f62] to-orange-600 rounded-xl shadow-lg text-white">
            <div className="py-[40px]">
              <div className="mx-auto mb-8 h-24 w-24">
                <img
                  className="rounded-full ring-[10px] ring-gradient-to-l from-[#b33f62] to-orange-600 ring-offset-4"
                  src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-cartoon-illustration-red-rocket-png-image_6515439.png"
                  alt="utils"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl font-bold tracking-light capitalize">
                  RocketWallet
                </h2>
              </div>
              <div className="text-center px-8">
                <p className="text-[15px] py-4">
                  Locking liquidity on RocketSwap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UtilsCard;
