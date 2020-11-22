import { connect } from "react-redux";
import ProductsList from "../components/ProductsList";


const mapStateToProps = (state, props) => {

  return {
    match: props.match,
    user: state.user,
    products: state.products,
    history: state.history,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};


const Products = connect(mapStateToProps)(ProductsList);

export default Products;
