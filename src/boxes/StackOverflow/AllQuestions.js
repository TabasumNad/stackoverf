
import { Avatar } from '@mui/material';
import React, { useState } from "react";
import "./css/AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions() {
    return (
        <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
            {/* <p>{data?.answerDetails?.length}</p> */}
            <span>answers</span>
          </div>
          <div className="all-option">
            <small>2 views</small>
          </div>
        </div>
      </div>
      <div className="question-answer">
        <Link to='/question'>This is question related to reactjs</Link>
        {/* <Link to={`/question?q=${data?._id}`}>{data.title}</Link> */}

        {/* <a href=>{data.title}</a> */}

        <div
          style={{
            maxWidth: "90%",
          }}
        >
            <div>This is answer</div>
          {/* <div>{ReactHtmlParser(truncate(data.body, 200))}</div> */}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
            <span className="question-tags">react</span>
            <span className="question-tags">antd</span>
            <span className="question-tags">frontend</span>
          {/* {tags.map((_tag) => (
            <p
              style={{
                margin: "10px 5px",
                padding: "5px 10px",
                backgroundColor: "#007cd446",
                borderRadius: "3px",
              }}
            >
              {_tag}
            </p>
          ))} */}
        </div>

        <div className="author">
          {/* <small>{data.create_at}</small>
          <div className="auth-details">
            <Avatar {...stringAvatar(data?.user?.displayName)} />
            <p>
              {data?.user?.displayName
                ? data?.user?.displayName
                : "Natalie lee"}
            </p>
          </div> */}
          <small>timestamp</small>
          <div className="auth-details">
            <Avatar/>
            <p>avatar</p>
          </div>
        </div>
      </div>
    </div>
   </div>
    );
}

export default AllQuestions;