import React, { createContext, useState } from "react";
import NewComponent2 from "./NewComponent2";
import "../App.css";

export const UserApp = createContext();
function NewComponent1() {
  const [username, setUserName] = useState("Guest");
  return (
    <div className="box1">
      <UserApp.Provider value={username}>
        <h2>Parent</h2>
        <p>Welcome {username===""? "Guest" : username} </p>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <NewComponent2 />
      </UserApp.Provider>
    </div>
  );
}

export default NewComponent1;
