import {fetchMinions, createMinion } from '../../actions/minion_actions';
import CardIndex from './card_index';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  debugger;
  const user = (state.session ? state.session.user : null);
  return {
    minions: state.minions,
    currentUser: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchMinions: () => dispatch(fetchMinions()),
      createMinion: (minionForm) => dispatch(createMinion(minionForm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
