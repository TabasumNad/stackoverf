import React, { useEffect, useState } from "react";
import Sidebar from "../StackOverflow/Sidebar";
import "./index.css";
import MainQuestion from "./MainQuestion";
// import axios from "axios";

function index() {

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default index;