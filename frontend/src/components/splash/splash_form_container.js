import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { closeModal, openModal } from '../../actions/modal_actions';
import SplashForm from './splash'

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    loginForm: () => dispatch(openModal("loginForm")),
    signupForm: () => dispatch(openModal("signupForm"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
