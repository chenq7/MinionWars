import {fetchMinions, createMinion } from '../../actions/minion_actions';
import CardIndex from './card_index';
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchUsers, updateUser } from "../../actions/user_actions";

const mapStateToProps = (state) => {
  const user = (state.session ? state.session.user : null);
  return {
    loggedIn: state.session.isAuthenticated,
    minions: state.entities.minions,
    currentUser: user,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchMinions: () => dispatch(fetchMinions()),
      createMinion: (minionForm) => dispatch(createMinion(minionForm)),
      BuyAlert: () => dispatch(openModal("BuyAlert")),
      NotEnough: () => dispatch(openModal("NotEnough")),
      fetchUsers: () => dispatch(fetchUsers()),
      updateUser: (userData) => dispatch(updateUser(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
