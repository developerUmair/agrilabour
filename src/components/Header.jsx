import React from "react";
import Logo from "../assets/images/agri.png";
import { BiReset } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-white">
      <header className="h-[100%] py-4 lg:px-24 px-2 flex justify-between items-center">
        <div>{/* <img src={Logo} alt="" className="w-32" /> */}</div>
        <div className="flex justify-between items-center lg:gap-16 gap-2">
          <div className="flex items-center lg:gap-1 gap-0 font-medium">
            <BiReset className="rotate-360 font-bold" />
            Admin Portal
          </div>
          <div className="flex items-center gap-1 font-medium">
            <HiOutlineLogout className="font-bold" />
            Log Out
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
