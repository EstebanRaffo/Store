import { connect } from "react-redux";
import UserData from "../components/UserData";

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};


const User = connect(mapStateToProps)(UserData);

export default User;
