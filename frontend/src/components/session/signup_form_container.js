import { connect } from "react-redux";
import { signup, login, demologin } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    signupForm: () => dispatch(openModal("signupForm")),
    loginForm: () => dispatch(openModal("loginForm")),
    closeModal: () => dispatch(closeModal()),
    demologin: () => dispatch(demologin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
