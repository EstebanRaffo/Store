import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Coin from "./Coin";
import UserLoader from "./UserLoader";
import UserError from "./UserError";
import {Chip, Avatar} from '@material-ui/core';

const NewChip = withStyles({
  root: {
    backgroundColor: '#0065d1',
    color: 'white'
  },
})(Chip);

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
