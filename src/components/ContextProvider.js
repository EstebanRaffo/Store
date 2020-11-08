import React, { useState } from "react";

export const AppContext = React.createContext();


export default function AppProvider({ children }) {

  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
