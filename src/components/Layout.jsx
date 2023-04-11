import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="px-12">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
