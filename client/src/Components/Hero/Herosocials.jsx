import React from "react";
import { Link } from "react-router-dom";

const Herosocials = () => {
  return (
    <div>
      <div className="mt-4  px-4">
        <div className=" ">
          <div className="text-center pb-8 sm:block  lg:flex md:justify-between lg:justify-between">
            <button className="sm:text-center lg:text-left md:mt-4 border-2 border-orange-500 rounded-full py-2">
              <Link
                to="https://aidoge.com/assets/documents/Aidoge_Whitepaper.pdf"
                className="px-8 font-medium cursor-pointer text-[13px] text-black font-abc  text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-700"
              >
                WhitePaper
              </Link>
            </button>
          </div>

          {/* social media  */}
          <div className="flex mt-8 lg:mt-4 items-center justify-center">
            <div className="text-center">
              <Link
                to="https://twitter.com/aidogecrypto"
                className="text-black"
              >
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                <img
                  src="https://aidoge.com/assets/images/svg-icons/social-twitter.svg"
                  alt="twitter"
                  className="w-12 h-8 bg-black"
                />
              </Link>
            </div>
            <div>
              <Link to="https://www.instagram.com/aidogecrypto/">
                <img
                  src="https://aidoge.com/assets/images/svg-icons/social-instagram.svg"
                  alt="instagram"
                  className="w-12 h-8"
                />
              </Link>
            </div>
            <div>
              <Link to="https://discord.com/invite/QE5PdhbjUY">
                <img
                  src="https://aidoge.com/assets/images/svg-icons/social-discord.svg"
                  alt="discord"
                  className="w-12 h-8"
                />
              </Link>
            </div>
            <div>
              <Link to="https://t.me/AiDogeCryptoOfficial">
                <img
                  src="https://aidoge.com/assets/images/svg-icons/social-telegram.svg"
                  alt="telegram"
                  className="w-12 h-8"
                />
              </Link>
            </div>
            <div>
              <Link to="https://www.tiktok.com/@aidogecrypto">
                <img
                  src="https://aidoge.com/assets/images/svg-icons/social-tiktok.svg"
                  alt="tiktok"
                  className="w-12 h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosocials;
