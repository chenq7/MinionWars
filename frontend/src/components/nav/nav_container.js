import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import Nav from "./nav";

<<<<<<< HEAD
const mapStateToProps = state => {
  const user = (state.session ? state.session.user : null);
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    currentUser: user
  }
};
=======
const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    currentUser: state.session.user
});
>>>>>>> modal

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
