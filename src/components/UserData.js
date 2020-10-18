import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/actions";

const UserData = ({getUser, user}) => {
    getUser();
    console.log("user: ", user)
  return (
    <div className="UserData">
      <h4>UserData</h4>
    </div>
  );
};

const mapStateToProps = (state, props) => {
    return {
      user: state.user
    };
  };

const mapDispatchToProps = {
    getUser
};
  
export default connect(mapStateToProps, mapDispatchToProps)(UserData);
