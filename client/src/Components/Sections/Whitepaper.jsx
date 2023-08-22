import React from "react";
import { Link } from "react-router-dom";
import Whitepaper from "../../assets/";

const Whitepaper = () => {
  return (
    <>
      <Link to={"/whitepaper"}>
        <div>
          <iframe
            src="https://drive.google.com/file/d/1Z_LGP47m6gpbQNwdX0fGyMbAmd0OE_yd/view?usp=drive_link"
            frameborder="0"
          ></iframe>
        </div>
      </Link>
    </>
  );
};

export default Whitepaper;
