import React from "react";

const UserData = ({user}) => {
  
  console.log("user: ", user)
  return (
    <div className="UserData">
      <h4>{user.name} {user.points}</h4>
    </div>
  );
};


export default UserData;
