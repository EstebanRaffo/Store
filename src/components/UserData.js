import React from "react";

const UserData = ({user}) => {
  
  console.log("user: ", user)
  return (
    <div className="UserData">
      <h4>UserData</h4>
      <h4>{user.name}</h4>
    </div>
  );
};


export default UserData;
