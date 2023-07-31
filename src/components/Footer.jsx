import React from "react";
import { BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-left lg:mt-12 mt-6">
      <div>
        <a href="tel:-3491394" className="text-gray-600 text-lg font-semibold">
          1300 247 823
        </a>
      </div>
      <div>
        <a href="mailto:example@gmail.comm" className="text-gray-400 text-base">
          info@agrilabour.com.au
        </a>
      </div>
      <div className="flex justify-start items-center text-xl text-white mt-3 gap-3">
        <div className="w-8 h-8 bg-gray-500 rounded-full grid place-items-center">
          <a href="https://facebook.com">
            {" "}
            <BiLogoFacebook />
          </a>
        </div>
        <div className="w-8 h-8 bg-gray-500 rounded-full grid place-items-center">
          <a href="https://google.com">
            <BiLogoGoogle />{" "}
          </a>
        </div>
        <div className="w-8 h-8 bg-gray-500 rounded-full grid place-items-center">
          <a href="https://linkedin.com">
            <FaLinkedinIn />
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
