import React, { useState } from "react";
import "../communication/style.css";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

function ShowContent({ commu }) {
  return (
    <>
      <div>
        <strong>{commu.username}</strong>
        <span>{commu.contents}</span>
      </div>
    </>
  );
}

function ShowContents({ commus }) {
  return (
    <>
      {commus.map((commu) => (
        <ShowContent key={commu.id} commu={commu} />
      ))}
    </>
  );
}

function Commu() {
  const nextId = useRef(3);

  const [input, setInputs] = useState({
    name: "",
    texts: "",
  });

  const [commus, setCommus] = useState([
    {
      id: 1,
      username: "oms",
      contents: "안녕하세요! 저는 경기도에 살고 있어요! 만나서 반갑습니다!",
    },
    {
      id: 2,
      username: "mms",
      contents: "만나서 반갑습니다! 저는 서울 영등포쪽에 살고있어요!",
    },
  ]);

  const { name, texts } = input;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...input,
      [name]: value,
    });
  };

  const onInsert = (username, contents) => {
    const comm = {
      id: nextId.current,
      username,
      contents,
    };

    setCommus((commus) => commus.concat(comm));
    nextId.current += 1;
  };

  const onSubmit = (e) => {
    onInsert(input.name, input.texts);
    setInputs({
      name: "",
      texts: "",
    });
    console.log("ssss");
    e.preventDefault();
  };

  return (
    <>
      <div className="commu_container">
        <div className="commu_title">
          <Link to="/" className="main_link">
            메인
          </Link>
          <p>자유롭게 사람들과 대화를 해보세요!</p>
        </div>
        <div className="commu_box">
          <div className="commu_sec">
            <ShowContents commus={commus} />
          </div>
          <form onSubmit={onSubmit} className="commu_form">
            <input
              type="text"
              className="commu_name"
              name="name"
              value={name}
              placeholder="name"
              onChange={onChange}
            />
            <input
              type="text"
              className="commu_text"
              name="texts"
              value={texts}
              placeholder="text"
              onChange={onChange}
            />
            <button type="submit" className="commu_btn">
              Click
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Commu;