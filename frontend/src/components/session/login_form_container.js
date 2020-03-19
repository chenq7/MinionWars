import { connect } from "react-redux";
import { login, demologin } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    loginForm: () => dispatch(openModal("loginForm")),
    signupForm: () => dispatch(openModal("signupForm")),
    demologin: () => dispatch(demologin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
