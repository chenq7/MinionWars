import { connect } from "react-redux";
import BuyAlert from "./buy_alert";
import { fetchMinions } from "../../actions/minion_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        minions: state.minions
    }
};

const mapDispatchToProps = dispatch => {

    return {
        fetchMinions: () => dispatch(fetchMinions()),
        closeModal: () => dispatch(closeModal()),
     
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BuyAlert);
