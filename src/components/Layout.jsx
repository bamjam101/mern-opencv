import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="relative px-16 text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
