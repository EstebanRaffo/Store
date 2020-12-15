import React from "react";
import NewChip from "./NewChip";
import Coin from "./Coin";
import LoadingUser from "./LoadingUser";
import UserError from "./UserError";
import {Avatar} from '@material-ui/core';


const UserData = ({user, hasError, isLoading}) => {

  if (hasError) {
    return <UserError />
  }

  if (isLoading) {
    return <LoadingUser />
  }

  const handleDelete = () => {
    return
  }

  return (
    <div className="user-data">
      <h3>{user.name}</h3>
      <NewChip 
        avatar={<Avatar>P</Avatar>}
        label={user.points}
        onDelete={handleDelete}
        deleteIcon={<Coin/>}
      />
    </div>
  );
};

export default UserData;
