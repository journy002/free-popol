import React from "react";

function User({ user }) {
  const { name, email } = user;
  return (
    <div>
      <strong>{name}</strong>
      <span>{email}</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
