import React from "react";
import Products from "../containers/Products";
import { connect } from "react-redux";
import { getProducts } from "../actions/actions";

const Home = ({ getProducts, match }) => {
  getProducts();
  return (
    <div className="home">
      <hr></hr>
      <Products match={match} />
    </div>
  );
};

const mapDispatchToProps = {
  getProducts
};

export default connect(null, mapDispatchToProps)(Home);
