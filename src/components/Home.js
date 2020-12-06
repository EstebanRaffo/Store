import React, {useContext, useEffect} from "react";
import Products from "../containers/Products";
import { connect } from "react-redux";
import { getProducts } from "../actions/actions";
import { AppContext } from "../components/ContextProvider";


const Home = ({ getProducts }) => {
  const {setHistoryQuery} = useContext(AppContext);
  
  useEffect(() => {
    setHistoryQuery(false);
    getProducts();
  }, [getProducts, setHistoryQuery]);

  return (
    <div className="home">
      <hr></hr>
      <Products />
    </div>
  );
};

const mapDispatchToProps = {
  getProducts
};

export default connect(null, mapDispatchToProps)(Home);
