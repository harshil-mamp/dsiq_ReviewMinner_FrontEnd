import React from "react";
import Sidebar from "../Global/Sidebar";
import Navbars from "../Global/Navbars/index";

const Home = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-100">
        <Navbars />
        <h1 className="mx-auto text-center">Home!</h1>
      </div>
    </div>
  );
};

export default Home;
