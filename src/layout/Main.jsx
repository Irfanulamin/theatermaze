import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
