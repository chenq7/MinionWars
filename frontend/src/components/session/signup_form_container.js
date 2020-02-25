import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
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
    signupForm: () => dispatch(openModal("signupForm")),
    loginForm: () => dispatch(openModal("loginForm"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
