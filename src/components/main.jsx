import React from "react";
import "../style/Main.css";
import dog from "../img/dogPic.jpeg";
import comments from "../img/comments.jpeg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/commu">자랑방</Link>
        </li>
        <li>
          <Link to="/commu">소통방</Link>
        </li>
      </ul>
      <div className="main_description">
        <p className="title">다양한 사람들과 함께 소통하고 공유해 보세요!</p>
        <div className="room_sec">
          <div className="sec">
            <h2>자랑방</h2>
            <p>자신의 동물을 사람들에게 보여주세요!</p>
            <img src={dog} alt="dog" className="pic" />
          </div>
          <div className="sec">
            <h2>소통방</h2>
            <p>강아지들 산책로, 자유로운 소통을 즐겨보세요!</p>
            <img src={comments} alt="" className="pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
