import { connect } from "react-redux";
import UserData from "../components/UserData";

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    hasError: state.loadingUserError,
    isLoading: state.loadingUserInProgress,
    addPointsHasError: state.addPointsError
  };
};


const User = connect(mapStateToProps)(UserData);

export default User;
