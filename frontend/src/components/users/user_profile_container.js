import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UserProfile from "./user_profile";

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
