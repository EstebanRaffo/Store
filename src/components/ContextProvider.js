import React, { useState } from "react";

export const AppContext = React.createContext();


export default function AppProvider({ children }) {

  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([50, 2500]);
  const [searchCategory, setCategories] = useState("");
  const [sort, setSort] = useState(0);

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        searchTerm,
        setSearchTerm,
        priceRange,
        setPriceRange,
        searchCategory,
        setCategories,
        sort,
        setSort
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
