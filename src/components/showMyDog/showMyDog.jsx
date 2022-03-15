import React from "react";
import "../showMyDog/style.css";
import { Link } from "react-router-dom";

function ShowMyDog() {
  return (
    <>
      <div className="show_container">
        <div className="show_title">
          <Link to="/" className="main_link">
            메인
          </Link>
          <p>자신의 애완동물을 자랑해 보세요!</p>
        </div>
        <div className="show_box">
          <button className="add_btn">+</button>
        </div>
      </div>
    </>
  );
}

export default ShowMyDog;
