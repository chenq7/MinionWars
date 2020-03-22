import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UserProfile from "./user_profile";
import { fetchMinions, deleteMinion } from "../../actions/minion_actions";
import { fetchUsers, updateUser } from "./../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";;

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        minions: state.entities.minions,
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        fetchMinions: () => dispatch(fetchMinions()),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteMinion: (minionId) => dispatch(deleteMinion(minionId)),
        updateUser: (userData) => dispatch(updateUser(userData)),
        SellMinion: () => dispatch(openModal("SellMinion"))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
