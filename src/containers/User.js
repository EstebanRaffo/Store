import { connect } from "react-redux";
import UserData from "../components/UserData";

const mapStateToProps = (state, props) => {
  return {
    match: props.match,
    user: state.user,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};


const User = connect(mapStateToProps)(UserData);

export default User;
