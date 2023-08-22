import React from "react";

const HeroAbout = () => {
  return (
    <div className="py-8">
      <div>
        <div>
          <h2 className="mb-6 text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600 ">
            About <span className="p-2">$RKT</span> token
          </h2>
          <div>
            <p className="font-abc text-[14px]">
              Rocket Launchpad is the next generation  platform incorporating Web3
              technology to create an efficient, cost-saving and unique space.
              Rocket Launchpad is built by incorporating two Launchpads in one: a
              Token Launchpad Protocol, and a cutting-edge NFT Launchpad.
              Together, these launchpads offer a comprehensive suite of tools
              and services and create a more seamless experience for all users.
              The launchpad is built on Hedera Hashgraph.
             
            </p>
          </div>
        </div>

        {/* the youtube video  */}
        <div className="my-8">
          <div>
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aLh8jlYYvZA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
