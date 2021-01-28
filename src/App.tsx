import React from "react";
import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import UserSearchClass from "./classes/UserSearch";
const users = [
  { name: "A", age: 2 },
  { name: "B", age: 1 },
  { name: "C", age: 3 },
];

function App() {
  return (
    <div className="App">
      <Parent />
      <GuestList />
      <UserSearch />
      <UserSearchClass users={users} />
    </div>
  );
}

export default App;
