import React from "react";
import { Link } from "react-router-dom";

const SHQ = () => {
  return (
    <>
      <section className="mt-20">
        <div>
          <h1 className="text-center text-3xl font-bold font-abc ">
            Get in touch
          </h1>
          <div>
            <img
              src="https://deelance.com/images/connect.png"
              alt="getintouch"
              className="w-full mx-auto max-w-[160px]"
            />
          </div>
          <p className="capitalize text-[20px] font-abc text-center">
            Still got questions?
          </p>
          <p className="font-abc text-center mx-auto text-[17px] my-8">
            If you still have questions or need further assistance, please do
            not hesitate to reach out to our support team.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="contact-us">
            <button className="px-4 md:px-4  py-2 md:py-2 text-white cursor-pointer font-abc capitalize  bg-gradient-to-r from-[#b33f62] to-orange-600 rounded-full font-light text-[15px]">get in touch</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SHQ;
