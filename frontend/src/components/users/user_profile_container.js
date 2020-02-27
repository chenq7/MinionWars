import { connect } from "react-redux";
import { logout, receiveCurrentUser } from "../../actions/session_actions";
import UserProfile from "./user_profile";
import { fetchMinions } from "../../actions/minion_actions"

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        minions: state.minions
    }
};

const mapDispatchToProps = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        fetchMinions: () => dispatch(fetchMinions())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
