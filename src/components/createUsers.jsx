import React from "react";

function CreateUsers({ name, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="name"
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="E-mail"
      />
      <button onClick={onCreate}>Add</button>
    </div>
  );
}

export default CreateUsers;
