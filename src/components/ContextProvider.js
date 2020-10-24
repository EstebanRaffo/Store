import React, { useState } from "react";

export const AppContext = React.createContext();


export default function AppProvider({ children }) {

  const [show, setShow] = useState(false);
  const [points, setPoints] = useState(1000);

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        points,
        setPoints
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
