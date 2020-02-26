import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import Nav from "./nav";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    loginForm: () => dispatch(openModal("loginForm")),
    signupForm: () => dispatch(openModal("signupForm"))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Nav);
