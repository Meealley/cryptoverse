import React, { useEffect, useState } from "react";
import Rocket from "../../assets/transpresale.png";
import "./Presale.css";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const Presale = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    setInterval(() => {
      setShowConfetti(true);
    }, 5000);

    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <section className="h-screen">
        {showConfetti && (
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
          />
        )}
        <div>
          <div className="mt-12 ">
            <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600 px-6 py-2">- Coming soon</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <h3 className="text-3xl">Get Ready something cool is coming</h3>
            <div>
              <p className="text-center text-[18px] capitalize my-8 font-abc">Be the first to know when we're live</p>
              <Link to="/contact-us" className="flex justify-center items-center ">
                <button className="my-8 pl-8 font-abc rounded-full bg-gradient-to-br from-[#5c2234] to-orange-600 px-6 py-2 capitalize">
                  get in touch
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={Rocket} className="rocket" alt="rocket" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Presale;
