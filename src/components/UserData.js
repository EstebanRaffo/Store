import React from "react";

import Coin from "./Coin";
import UserLoader from "./UserLoader";
import UserError from "./UserError";
import {Chip} from '@material-ui/core';

const UserData = ({user, hasError, isLoading}) => {

  if (hasError) {
    return <UserError />
  }

  if (isLoading) {
    return <UserLoader />
  }

  return (
    <div className="user-data">
      <h4>{user.name}</h4>
      <Chip avatar={<Coin/>} label={user.points} />
    </div>
  );
};

export default UserData;
