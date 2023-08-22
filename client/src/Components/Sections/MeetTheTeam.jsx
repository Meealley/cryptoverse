import React from "react";
import ceo from "../../assets/ceo.jpg";
import coo from "../../assets/coo.jpg";
import cto from "../../assets/block.jpg";
import cmo from "../../assets/cso.jpg";

const MeetTheTeam = () => {
  return (
    <>
      <section className="mt-24">
        <div className="">
          <div className="mx-auto pr-0 lg:pr-12">
            <h1 className="text-center my-10 text-[37px] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">
              Meet The Team
            </h1>
            <div className="grid max-w-[25rem] grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-3 gap-y-8 lg:gap-x-16 ">
              <div className="flex flex-col justify-center px-[4rem] py-12 items-center relative mx-auto mb-4 h-[440px] w-[340px] md:w-[380px]  rounded-xl bg-slate-200 p-8">
                <img
                  src={ceo}
                  alt="the ceo"
                  className="absolute right-8 top-[8px] h-24 w-24 rounded-full object-cover"
                />
                <div className="mt-24 font-bold text-2xl md:text-3xl tracking-tight text-orange-600">
                  Sam Johnson G.
                </div>
                <div className="my-2 md:my-4">
                  <h2 className="text-[16px] font-bold">CEO</h2>
                </div>
                <div className="font-abc text-[14px]">
                  With his expertise, drive, and commitment to innovation, Sam
                  Johnson is leading the charge towards a decentralized
                  technology, positioning her cryptocurrencies project at the
                  forefront of the industry.
                </div>
              </div>
              <div className="flex flex-col justify-center px-[4rem] py-12 items-center relative mx-auto mb-4 h-[440px] w-[340px] md:w-[380px]  rounded-xl bg-slate-200 p-8">
                <img
                  src={coo}
                  alt="the coo"
                  className="absolute right-8 top-[8px] h-24 w-24 rounded-full object-cover"
                />
                <div className="mt-24 font-bold text-3xl tracking-tight text-orange-600">
                  Jeremy Harden W.
                </div>
                <div className="my-2 md:my-4">
                  <h2 className="text-[16px] font-bold">CFO</h2>
                </div>
                <div className="font-abc text-[14px]">
                  Jeremy is a seasoned finance professional and serves as the
                  Chief Financial officer of Rocket Launchpad, Jeremy's ability
                  to analyze complex financial data and identify investment
                  opportunities earned him recognition and paved the way for his
                  successful career.
                </div>
              </div>
              <div className="flex flex-col justify-center px-[4rem] py-12 items-center relative mx-auto mb-4 h-[440px] w-[340px] md:w-[380px] rounded-xl bg-slate-200 p-8">
                <img
                  src={cto}
                  alt="the ceo"
                  className="absolute right-8 top-[8px] h-24 w-24 rounded-full object-cover"
                />
                <div className="mt-24 font-bold text-3xl tracking-tight text-orange-600">
                  Alexander Lee
                </div>
                <div className="my-2 md:my-4">
                  <h2 className="text-[16px] font-bold">
                    {" "}
                    CTO and Head Developer
                  </h2>
                </div>
                <div className="font-abc text-[14px]">
                  With strong passion for blockchain and extensive experience in
                  software development,Alexander plays a vital role in driving
                  the project technical strategy and spearheading its
                  technological advancements
                </div>
              </div>
              <div className="flex flex-col justify-center px-[4rem] py-12 items-center relative mx-auto mb-4 h-[440px] w-[340px] md:w-[380px]  rounded-xl bg-slate-200 p-8">
                <img
                  src={ceo}
                  alt="the ceo"
                  className="absolute right-8 top-[8px] h-24 w-24 rounded-full object-cover"
                />
                <div className="mt-24 font-bold text-3xl tracking-tight text-orange-600">
                  Hailey Mackenzie
                </div>
                <div className="my-2 md:my-4">
                  <h2 className="text-[16px] font-bold">
                    {" "}
                    Head Community Manager
                  </h2>
                </div>
                <div className="font-abc text-[14px]">
                  As a community moderator, Hailey takes on the crucial
                  responsibility of maintaining the welcome and inclusive
                  environment within the cryptocurrency project's community
                  channels.
                </div>
              </div>
              <div className="flex flex-col justify-center px-[4rem] py-12 items-center relative mx-auto mb-4 h-[440px] w-[340px] md:w-[380px] rounded-xl bg-slate-200 p-8">
                <img
                  src={ceo}
                  alt="the ceo"
                  className="absolute right-8 top-[8px] h-24 w-24 rounded-full object-cover"
                />
                <div className="mt-24 font-bold text-3xl tracking-tight text-orange-600">
                  Roberts Diaz
                </div>
                <div className="my-2 md:my-4">
                  <h2 className="text-[16px] font-bold">
                    {" "}
                    Blockchain Developer
                  </h2>
                </div>
                <div className="font-abc text-[16px]">
                  Robert is a driven software developer with an exceptional
                  ability to learn and master new technologies quickly. His
                  passion for technology and his determination to succeed make
                  him an asset to any development team.
                </div>
              </div>
              <div className="flex flex-col justify-center px-[4rem] py-12 items-center relative mx-auto mb-4 h-[440px] w-[340px] md:w-[380px] rounded-xl bg-slate-200 p-8">
                <img
                  src={cmo}
                  alt="the ceo"
                  className="absolute right-8 top-[8px] h-24 w-24 rounded-full object-cover"
                />
                <div className="mt-24 font-bold text-3xl tracking-tight text-orange-600">
                  Emilia Martinez
                </div>
                <div className="my-2 md:my-4">
                  <h2 className="text-[16px] font-bold"> CMO</h2>
                </div>
                <div className="font-abc text-[14px]">
                  Emilia has held marketing initiatives for blockchain Startups,
                  focusing on building brand awareness, driving user adoption
                  and fostering community engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTheTeam;
