import { connect } from "react-redux";
import NotEnough from "./not_enough";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownprops) => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user
    }
};

const mapDispatchToProps = dispatch => {

    return {
        closeModal: () => dispatch(closeModal()),

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NotEnough);
