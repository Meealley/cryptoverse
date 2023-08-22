import React from "react";
import HeroForm from "./HeroForm";
import HeroAbout from "./HeroAbout";
import { Link } from "react-router-dom";
// import Herosocials from "./Herosocials";
import Partners from "../Sections/Partners";

const HeroPage = () => {
  const launchDate = new Date("2023-07-05T12:00:00");
  return (
    <div className="mt-8 mb-2">
      <div className=" text-center ">
        <h2 className="font-bold text-[28px] bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-[#fe7633] lg:text-[38px]">
          Rocket <span className="bg-none">🚀</span> Launchpad Protocol for
          Everyone!
        </h2>
        <div className="py-6  md:flex flex-col lg:flex-row">
          <div className="w-full lg:w-[50%] font-abc lg:mx-3">
            <p className="font-abc text-[14px] ">
              Web 3.0, sometimes known as Web 3, is the concept of the next
              generation of the web, in which most users will be connected via a
              decentralized network. However, For the average individual,
              entering the Web3 market can be a daunting and fragmented
              experience. Participating in the Web3 market demands a relatively
              advanced level of technical expertise, and its intricate nature
              has impeded its ongoing expansion.
            </p>
            <div className="flex justify-center my-4">
              <div className="px-4">
                <Link to="https://drive.google.com/file/d/1FCP6dskSRPnmZApGVv6ZKkSkyfVgrkCw/view?usp=sharing">
                  <button className="px-4 py-3 text-[16px] bg-gradient-to-r from-[#b33f62] to-orange-600  rounded-[40px] tracking-wider cursor-pointer">
                    White Paper
                  </button>
                </Link>
              </div>
              <div className="px-4">
                <button className="px-4 py-3 text-[16pxd] bg-gradient-to-r from-[#b33f62] to-orange-600  rounded-[40px] tracking-wider cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
            {/* The about  */}
            <div>
              <HeroAbout />
            </div>
          </div>

          {/* this is the form part  */}
          <div className="w-full lg:w-[50%] mb-8 md:flex md:justify-center">
            <HeroForm launchDate={launchDate} />
          </div>
        </div>
        {/* <Herosocials /> */}
        <Partners />
      </div>
    </div>
  );
};

export default HeroPage;
