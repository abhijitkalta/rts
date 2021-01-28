import React from "react";
import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

function App() {
  return (
    <div className="App">
      <Parent />
      <GuestList />
      <UserSearch />
    </div>
  );
}

export default App;
