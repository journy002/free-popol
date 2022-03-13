import React from "react";
import { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });

    nameInput.current.focus();
  };

  return (
    <div>
      <input
        ref={nameInput}
        onChange={onChange}
        name="name"
        value={name}
        type="text"
        placeholder="name"
      />
      <input
        onChange={onChange}
        name="nickname"
        value={nickname}
        type="text"
        placeholder="nickname"
      />
      <button onClick={onReset}>Reset</button>
      <div>
        <p>name: {name} </p>
        <p>nickname: {nickname}</p>
      </div>
    </div>
  );
}

export default InputSample;
