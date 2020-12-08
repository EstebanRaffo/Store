import React from "react";

import Coin from "./Coin";
import UserLoader from "./UserLoader";
import UserError from "./UserError";
import {Chip, Avatar} from '@material-ui/core';

const UserData = ({user, hasError, isLoading}) => {

  if (hasError) {
    return <UserError />
  }

  if (isLoading) {
    return <UserLoader />
  }

  const handleDelete = () => {
    return
  }

  return (
    <div className="user-data">
      <div>
        <h3>{user.name}</h3>
      </div>
      <Chip 
        avatar={<Avatar>P</Avatar>}
        label={user.points}
        onDelete={handleDelete}
        deleteIcon={<Coin/>}
        color="primary"
      />
    </div>
  );
};

export default UserData;
