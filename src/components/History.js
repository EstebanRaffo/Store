import React, {useContext, useEffect} from "react";
import Products from "../containers/Products";
import { connect } from "react-redux";
import { getHistory } from "../actions/actions";
import { AppContext } from "../components/ContextProvider";


const History = ({ getHistory }) => {
  const {setHistoryQuery} = useContext(AppContext);
  
  useEffect(() => {
    setHistoryQuery(true);
    getHistory();
  }, [getHistory, setHistoryQuery]);


  return (
    <div className="home">
      <hr></hr>
      <Products/>
    </div>
  );
};

const mapDispatchToProps = {
  getHistory
};

export default connect(null, mapDispatchToProps)(History);
