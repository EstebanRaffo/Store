import React, { useState } from "react";
import Moment from "moment";
import "moment/locale/es";

export const AppContext = React.createContext();


export default function AppProvider({ children }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([50, 2500]);
  const [searchCategory, setCategories] = useState("");
  const [sort, setSort] = useState(0);
  const [currentId, setCurrentId] = useState("");
  const [historyQuery, setHistoryQuery] = useState(false);
  
  const today = new Date()
  const [dateRange, setDateRange] = useState([Moment(today.valueOf()).format("YYYY-MM-DD"), Moment(today.valueOf() + 2592000000).format("YYYY-MM-DD")]);
  // const [dateRange, setDateRange] = useState([today.valueOf(), today.valueOf() + 2592000000]);

  
  return (
    <AppContext.Provider
      value={{
        searchTerm, setSearchTerm,
        priceRange, setPriceRange,
        searchCategory, setCategories,
        sort, setSort,
        currentId, setCurrentId,
        historyQuery, setHistoryQuery,
        dateRange, setDateRange
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
