import React from 'react';
import Nav from '../nav/nav_container';
import SingleCard from './single_card';
import { receiveAllMinions } from '../../actions/minion_actions';


class CardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMinions();
  }

  render() {
    debugger
    const minions = this.props.minions && this.props.minions.data ?
    this.props.minions.data.map(minion => {
      return <div key={minion.id}>{minion.name}</div>;
    }) : null
    ;

    return <div>{minions}</div>;
  }
}


export default CardIndex;
