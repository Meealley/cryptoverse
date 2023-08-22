import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Roadmap = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center">
          <div className="my-8">
            <h1 className="text-[37px] font-bold font-abc tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">RoadMap</h1>
          </div>
          <div>
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                icon={"🚀"}
                iconStyle={{ background: "#b33f62", color: "#fff" }}
                date="2023 - present"
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid #b33f62",
                }}
                contentStyle={{
                    backgroundImage:
                      "linear-gradient(#b33f62, #c97040)",
                      borderRadius: "15px",
                    color: "#000",
                  }}
              >
                <h3 className="vertical-timeline-element-title">Q3 2023</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4> */}
                <p className="font-abc text-white">
                  RKT LaunchPad Development, Presale conclusion, Top tier CEX
                  listings, DEX listings, $RKT Staking Program
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 - 2024"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={"🚀"}
                contentStyle={{
                  backgroundImage:
                    "linear-gradient(#b33f62, #c97040)",
                    borderRadius: "15px",
                  color: "#000",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid #b33f62",
                }}
              >
                <h3 className="vertical-timeline-element-title">Q3 2023</h3>

                <p className="text-white font-abc">
                  NFT Swap compatibility, Art Exhibition, RKT Launchpad academy,
                  RKT Launchpad Crypto Hackathon
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
              aniamate={"true"}
                className="vertical-timeline-element--work"
                date="2024 - 2025"
                iconStyle={{ background: "#b33f62", color: "#fff" }}
                icon={"🚀"}
                contentStyle={{
                    backgroundImage:
                      "linear-gradient(#b33f62, #c97040)",
                      borderRadius: "15px",
                    color: "#000",
                  }}
                contentArrowStyle={{
                    borderRight: "7px solid #b33f62",
                }}
              >
                <h3 className="vertical-timeline-element-title">Q1 2024</h3>

                <p className="text-white font-abc">
                  RKT Launchpad DEX, Additional Blockchain operability, Buy Back
                  and Burn, UI revamp
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
