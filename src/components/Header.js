import React from "react";
import History from "./History";
import UserData from "./UserData";

const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <History/>
      <UserData/>
    </div>
  );
};

export default Header;
