import { connect } from "react-redux";
import ProductsList from "../components/ProductsList";


const mapStateToProps = (state, props) => {

  return {
    user: state.user,
    products: state.products,
    history: state.history,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
    exchangeHasError: state.loadingExchangeError,
    exchangeIsLoading: state.loadingExchangeInProgress,
    exchange: state.exchange
  };
};


const Products = connect(mapStateToProps)(ProductsList);

export default Products;
