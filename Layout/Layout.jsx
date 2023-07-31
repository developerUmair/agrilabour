import React from "react";
import Header from "../src/components/Header";
import LeftSideBar from "../src/components/LeftSideBar";
import Main from "../src/components/Table";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">
        <LeftSideBar />
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Layout;
