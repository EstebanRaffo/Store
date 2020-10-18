import React from "react";
import Products from "../containers/Products";
import { connect } from "react-redux";
import { getHistory } from "../actions/actions";

const History = ({ getHistory, match }) => {
  getHistory(); 

  return (
    <div className="home">
      <h4>Historial de Canjes</h4>
      <hr></hr>
      <Products match={match} />
    </div>
  );
};

const mapDispatchToProps = {
  getHistory
};

export default connect(null, mapDispatchToProps)(History);
