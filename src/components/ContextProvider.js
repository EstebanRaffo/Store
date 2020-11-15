import React, { useState } from "react";

export const AppContext = React.createContext();


export default function AppProvider({ children }) {

  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([500, 1500])

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        searchTerm,
        setSearchTerm,
        priceRange,
        setPriceRange
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
