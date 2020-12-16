import React from "react";
import NewChip from "./NewChip";
import Coin from "./Coin";
import LoadingUser from "./LoadingUser";
import ErrorUser from "./ErrorUser";
import ErrorAddPoints from "./ErrorAddPoints";
import {Avatar} from '@material-ui/core';


const UserData = ({user, hasError, isLoading, addPointsHasError}) => {

  if (hasError) {
    return <ErrorUser />
  }

  if(addPointsHasError){
    return <ErrorAddPoints />
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
