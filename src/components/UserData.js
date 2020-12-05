import React from "react";
import {Chip} from '@material-ui/core';
import Coin from "./Coin";

const UserData = ({user, hasError, isLoading}) => {
    
  if (hasError) {
    return (
      <div>
        <h6>Error al cargar el usuario</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h6>Cargando...</h6>
      </div>
    );
  }

  return (
    <div className="user-data">
      <h4>{user.name}</h4>
      <Chip avatar={<Coin/>} label={user.points} />
    </div>
  );
};


export default UserData;
