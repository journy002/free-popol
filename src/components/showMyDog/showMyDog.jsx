import React from "react";
import "../showMyDog/style.css";
import { Link } from "react-router-dom";

function ShowMyDog() {
  const showDogs = [];

  const addDogs = () => {};

  return (
    <>
      <div className="show_container">
        <div className="show_title">
          <div className="link_box">
            <Link to="/" className="main_link">
              메인
            </Link>
          </div>
          <p>자신의 애완동물을 자랑해 보세요!</p>
        </div>
        <div className="show_box">
          <input type="file" />
          <div className="show_dogs"></div>
        </div>
      </div>
    </>
  );
}

export default ShowMyDog;
