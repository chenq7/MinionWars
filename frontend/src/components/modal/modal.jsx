import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import './modal.css';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
      case "loginForm":
        component = <LoginFormContainer />;
        break;
      case "signupForm":
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
         signupForm: () => dispatch(openModal("signupForm"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
