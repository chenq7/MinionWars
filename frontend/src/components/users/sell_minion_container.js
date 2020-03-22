import { connect } from "react-redux";
import SellMinion from "./sell_minion";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
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


export default connect(mapStateToProps, mapDispatchToProps)(SellMinion);