import React from "react";
import { connect } from "react-redux";
import { RootState } from "redux-root-types";
import SigninRegisterPage from "../../pages/signin-register/signin-register.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { Navigate } from "react-router-dom";

type RouteProps = {
  currentUser: any;
};

const PrivateRoute: React.FC<RouteProps> = ({ currentUser }) => {
  return currentUser ? <Navigate to="/" /> : <SigninRegisterPage />;
};

const mapStateToProps = (state: RootState): { currentUser: any } => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(PrivateRoute);
