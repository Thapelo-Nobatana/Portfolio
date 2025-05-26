// import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
import Footer from "../Components/Footer/Footer";
import "./Main.css";
const Main = () => {
  return (
    <>
      <div className="layout">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
