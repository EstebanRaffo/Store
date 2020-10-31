import React, { useState } from "react";

export const AppContext = React.createContext();


export default function AppProvider({ children }) {

  const [show, setShow] = useState(false);


  return (
    <AppContext.Provider
      value={{
        show,
        setShow
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
