import React from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { NavLink ,Link} from "react-router-dom";
// import axios from "axios";

function Main(){
    // { questions }) {
  // const [questions, setQuestions] = useState([]);

  // console.log(questions);
  return (
   
        <div className="main">
          <div className="main-container">
            <div className="main-top">
              <h2>All Questions</h2>
              <NavLink to='/add-question'>
                <button>Ask Question</button>
              </NavLink>
    
              {/* <a href="/add-question"> */}
    
              {/* </a> */}
            </div>
            <div className="main-desc">
              <p>questions</p>
              <div className="main-filter">
                <div className="main-tabs">
                  <div className="main-tab">
                    {/* <a href="/">Newest</a> */}
                    <Link to="/">Newest</Link>
                  </div>
                  <div className="main-tab">
                    <Link to="/">Active</Link>
    
                    {/* <a href="/">Active</a> */}
                  </div>
                  <div className="main-tab">
                    {/* <a href="/">More</a> */}
                    <Link to="/">More</Link>
                  </div>
                </div>
                <div className="main-filter-item">
                  <FilterListIcon />
                  <p>Filter</p>
                </div>
              </div>
            </div>
            <div className="questions">
              {/* {questions?.map((_q) => (
                <div className="question">
                  <AllQuestions data={_q} />
                </div>
              ))} */}
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
            </div>
          </div>
        </div>
      );
    
   
  
}

export default Main;