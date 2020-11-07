import React from "react";

const UserData = ({user, hasError, isLoading}) => {
  
  console.log("user: ", user)
  
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
    <div className="UserData">
      <h4>{user.name} {user.points}</h4>
    </div>
  );
};


export default UserData;
