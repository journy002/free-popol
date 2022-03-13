import logo from "./logo.svg";
import "./App.css";
import InputSample from "./components/inputSample";
import InputSamples from "./components/inputSamples";
import { useState } from "react";
import UserList from "./components/userList";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "oms",
      email: "oms@oms@.com",
    },
    {
      id: 2,
      name: "oms2",
      email: "oms2@oms@.com",
    },
    {
      id: 3,
      name: "oms3",
      email: "oms3@om3s@.com",
    },
  ]);

  return (
    <div>
      <InputSamples />
      <UserList users={users} />
    </div>
  );
}

export default App;
