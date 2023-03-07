import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./main";
// import axios from "axios";

function index() {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     async function getQuestion() {
//       await axios.get("/api/question").then((res) => {
//         setQuestions(res.data.reverse());
//         // console.log(res.data)
//       });
//     }
//     getQuestion();
//   }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default index;