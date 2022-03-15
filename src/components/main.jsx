import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <ul>
        <Link to="/commu">소통방</Link>
      </ul>
      <p>메인 페이지 입니다.</p>
    </div>
  );
}

export default Main;
