import React from "react";
import { Link } from "react-router-dom";

function Commu() {
  return (
    <div>
      <ul>
        <Link to="/">메인</Link>
      </ul>
      <p>이곳은 함께 소통하는 공간입니다.</p>
      <p>댓글을 통해 사람들과 자유로운 대화를 시작하세요!</p>
    </div>
  );
}

export default Commu;
