import React from 'react';
import { Avatar } from '@mui/material';
import  { useEffect, useState } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import ReactQuill from "react-quill";
// import Editor from "react-quill/lib/toolbar";
// import axios from "axios";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import "./index.css";


function MainQuestion() {
     const [show,setShow]=useState(false);
    return (
        
        <div className="main">
      <div className="main-container">
        <div className="main-top">
          {/* <h2 className="main-question">{questionData?.title} </h2> */}
          <h2 className="main-question">This is question </h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
          {/* <a href="/add-question">
            <button>Ask Question</button>
          </a> */}
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked
              {/* <span>{new Date(questionData?.created_at).toLocaleString()}</span> */}
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
              {/* <p>{ReactHtmlParser(questionData?.body)}</p> */}

              <div className="author">
                <small>
                  {/* asked {new Date(questionData?.created_at).toLocaleString()} */}
                  asked "Timestamp"
                </small>
                <div className="auth-details">
                    <Avatar/>
                  {/* <Avatar {...stringAvatar(questionData?.user?.displayName)} /> */}
                  <p>
                    Author name
                    {/* {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : "Natalia lee"} */}
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                    <p>
                        This is comment - <span>User name</span>
                        <small>Timestamp</small>
                    </p>
                  {/* {questionData?.comments &&
                    questionData?.comments.map((_qd) => (
                      <p key={_qd?._id}>
                        {_qd.comment}{" "}
                        <span>
                          - {_qd.user ? _qd.user.displayName : "Nate Eldredge"}
                        </span>{" "}
                        {"    "}
                        <small>
                          {new Date(_qd.created_at).toLocaleString()}
                        </small>
                      </p>
                    ))} */}
                    <br></br>
                </div>
                <p onClick={() => setShow(!show)}><br></br><br></br>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                    //   value={comment}
                    //   onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    
                    <button
                    //   onClick={handleComment}
                      style={{
                        maxWidth: "fit-content",
                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {/* {questionData && questionData?.answerDetails.length}  */}
           No. of Answers
          </p>
          {/* {questionData?.answerDetails.map((_q) => ( */}
            <>
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                // key={_q._id}
                className="all-questions-container"
              >
                <div className="all-questions-left">
                  <div className="all-options">
                    <p className="arrow">▲</p>

                    <p className="arrow">0</p>

                    <p className="arrow">▼</p>

                    <BookmarkIcon />

                    <HistoryIcon />
                  </div>
                </div>
                <div className="question-answer">
                  {/* {ReactHtmlParser(_q.answer)} */}
                  <p>This is a quetion body</p>
                  <div className="author">
                    <small>
                      asked "Timestamp"
                      {/* {new Date(_q.created_at).toLocaleString()} */}
                    </small>
                    <div className="auth-details">
                      <Avatar />
                    {/* //   {...stringAvatar(_q?.user?.displayName)} /> */}
                      <p>
                        {/* {_q?.user?.displayName
                          ? _q?.user?.displayName
                          : "Natalia lee"} */}
                          Author name
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          {/* ))} */}
        </div>
        {/* <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div> */}
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
        //   value={answer}
        //   onChange={handleQuill}
        //   modules={Editor.modules}
          className="react-quill"
          theme="snow"
          style={{
            height: "150px",
          }}
        />
      </div>
      <button
        // onClick={handleSubmit}
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
    );
}

export default MainQuestion;