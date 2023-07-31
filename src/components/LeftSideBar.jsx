import React, { useState } from "react";
import Logo from "../assets/images/agri.png";
import Profile from "../assets/images/profile.png";
import { RxAvatar } from "react-icons/rx";
import { BiSolidFileDoc } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { HiNewspaper } from "react-icons/hi";
import { AiOutlineDatabase } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { menuData } from "../data/Data";
import Footer from "./Footer";

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState("documents"); // Set the initial active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      {/* Toggle Button */}
      <button
        className={`fixed top-4 z-10 p-2  text-white border border-gray-600 rounded-full ${
          isOpen ? "left-64" : "left-4"
        }`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <GrClose className="text-gray-700 text-lg" />
        ) : (
          <GiHamburgerMenu className="text-gray-700 text-lg" />
        )}
      </button>

      {/* Off-canvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 
        px-7 py-6
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img src={Logo} alt="" className="w-32 mx-auto" />
        <div className="text-center">
          <img src={Profile} alt="" className="mx-auto bg-none -my-4" />
          <h2 className="text-lg text-gray-600 leading-0 font-semibold mb-0">
            Candidte4 nigel
          </h2>
          <a
            href="mailto:nigle.mcnair@gmail.com"
            className="text-gray-500 text-base"
          >
            nigle.mcnair@gmail.com
          </a>
          <div className="lg:my-6 my-">
            <hr />
          </div>
        </div>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("personal")}
              className={`flex items-center text-gray-400 font-semibold gap-2 lg:py-2 py-1 text-sm ${
                activeLink === "personal" ? "text-gray-700" : ""
              }`}
            >
              <RxAvatar className="text-purple-950 font-semibold text-lg" />{" "}
              Personal Detail
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("documents")}
              className={`flex items-center text-gray-400 font-semibold gap-2 py-2 text-sm ${
                activeLink === "documents" ? "text-gray-700" : ""
              }`}
            >
              <RxAvatar className="text-purple-950 font-semibold text-lg" />{" "}
              Documents
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("job")}
              className={`flex items-center text-gray-400 font-semibold gap-2 py-2 text-sm ${
                activeLink === "job" ? "text-gray-700" : ""
              }`}
            >
              <RxAvatar className="text-purple-950 font-semibold text-lg" /> Job
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("job")}
              className={`flex items-center text-gray-400 font-semibold gap-2 py-2 text-sm ${
                activeLink === "training" ? "text-gray-700" : ""
              }`}
            >
              <RxAvatar className="text-purple-950 font-semibold text-lg" />{" "}
              Training
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("job")}
              className={`flex items-center text-gray-400 font-semibold gap-2 py-2 text-sm ${
                activeLink === "payroll" ? "text-gray-700" : ""
              }`}
            >
              <RxAvatar className="text-purple-950 font-semibold text-lg" />{" "}
              Payroll Details
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("job")}
              className={`flex items-center text-gray-400 font-semibold gap-2 py-2 text-sm ${
                activeLink === "payroll" ? "text-gray-700" : ""
              }`}
            >
              <RxAvatar className="text-purple-950 font-semibold text-lg" />{" "}
              History
            </a>
          </li>
        </ul>
        <Footer />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0  opacity-50 z-9" onClick={toggleMenu} />
      )}
    </>
  );
};

export default LeftSideBar;
