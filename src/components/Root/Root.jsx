import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div>
      <div className="mt-7 ml-7 mr-7 border-l border-r border-t pt-2 pl-2 pr-2 rounded-tl-xl rounded-tr-xl">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
