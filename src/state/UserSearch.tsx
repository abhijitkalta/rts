import React, { useState, useRef, useEffect } from "react";

const users = [
  { name: "A", age: 2 },
  { name: "B", age: 1 },
  { name: "C", age: 3 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    return inputRef.current.focus();
  });
  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h1>Search Users</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Search User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
