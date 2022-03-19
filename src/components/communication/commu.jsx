import React, { useState } from "react";
import "../communication/style.css";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

function ShowContent({ commu, me }) {
  return (
    <>
      <div className="show_box">
        <p className="show_name">{commu.username}</p>
        <span className="show_contents">{commu.contents}</span>
      </div>
    </>
  );
}

function ShowContents({ commus }) {
  return (
    <>
      <div>
        {commus.map((commu) => (
          <ShowContent key={commu.id} commu={commu} />
        ))}
      </div>
    </>
  );
}

function Commu() {
  /* User[s] */
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
    e.preventDefault();
  };
  /* User[e] */

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
            <div className="commu_user">
              <ShowContents commus={commus} />
            </div>
          </div>
          <div className="commit_texts">
            <div className="user">
              <span>대화창: </span>
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
        </div>
      </div>
    </>
  );
}

export default Commu;
