import { connect } from "react-redux";
import BuyAlert from "./buy_alert";
import { fetchMinions } from "../../actions/minion_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state,ownprops) => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        // oneMinion: 
        // oneMinion: state.entities.movies[ownprops.match.params.minionId]
    }
};

const mapDispatchToProps = dispatch => {

    return {
        closeModal: () => dispatch(closeModal()),
     
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BuyAlert);
