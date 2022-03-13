import logo from "./logo.svg";
import "./App.css";
import InputSample from "./components/inputSample";
import InputSamples from "./components/inputSamples";
import { useState, useRef, useMemo } from "react";
import UserList from "./components/userList";
import CreateUsers from "./components/createUsers";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const { name, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "oms",
      email: "oms@oms@.com",
      active: true,
    },
    {
      id: 2,
      name: "oms2",
      email: "oms2@oms@.com",
      active: false,
    },
    {
      id: 3,
      name: "oms3",
      email: "oms3@om3s@.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onChange = (e) => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      email,
    };

    setUsers([...users, user]);
    setInputs({ name: "", email: "" });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const countActiveUsers = (users) => {
    console.log("활성자 수 세는중 ...");
    return users.filter((user) => user.active).length;
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUsers
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수: {count}</div>
    </div>
  );
}

export default App;
