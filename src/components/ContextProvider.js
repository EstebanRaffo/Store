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
  const [currentPage, setCurrentPage] = useState(1);

  const today = new Date();
  const initDateFrom = Moment(today.valueOf()).format("YYYY-MM-DD");
  const initDateTo = Moment(today.valueOf() + 2592000000).format("YYYY-MM-DD");

  const [dateFrom, setDateFrom] = useState(initDateFrom);
  const [dateTo, setDateTo] = useState(initDateTo);
  
  return (
    <AppContext.Provider
      value={{
        searchTerm, setSearchTerm,
        priceRange, setPriceRange,
        searchCategory, setCategories,
        sort, setSort,
        currentId, setCurrentId,
        historyQuery, setHistoryQuery,
        dateFrom, setDateFrom,
        dateTo, setDateTo,
        currentPage, setCurrentPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
