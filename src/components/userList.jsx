import React from "react";

function User({ user, onRemove, onToggle }) {
  const { name, email } = user;
  return (
    <div>
      <strong
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {name}
      </strong>
      <span>{email}</span>
      <button onClick={() => onRemove(user.id)}>Del</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
