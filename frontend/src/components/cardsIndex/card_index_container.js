import {fetchMinions} from '../../actions/minion_actions';
import CardIndex from './card_index';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const user = (state.session ? state.session.user : null);
  return {
    minions: state.minions,
    currentUser: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchMinions: () => dispatch(fetchMinions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
