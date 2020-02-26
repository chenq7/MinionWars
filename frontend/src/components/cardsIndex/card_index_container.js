import {fetchMinions} from '../../actions/minion_actions';
import CardIndex from './card_index';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
        minions: state.minions
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchMinions: () => dispatch(fetchMinions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
