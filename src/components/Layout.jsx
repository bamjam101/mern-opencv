import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="relative text-white">
      <header className="min-h-[8vh]">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
