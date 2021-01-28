import React from "react";
import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";

function App() {
  return (
    <div className="App">
      <Parent />
      <GuestList />
    </div>
  );
}

export default App;
