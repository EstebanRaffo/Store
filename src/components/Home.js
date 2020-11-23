import React, {useContext, useEffect} from "react";
import Products from "../containers/Products";
import { connect } from "react-redux";
import { getProducts } from "../actions/actions";
import { AppContext } from "../components/ContextProvider";


const Home = ({ getProducts, match }) => {
  const {historyQuery, setHistoryQuery} = useContext(AppContext);
  
  useEffect(() => {
    setHistoryQuery(false);
    getProducts();
    console.log("Se ejecutó getProducts()")
  }, []);
  

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
