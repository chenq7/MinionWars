import React from 'react';
import Nav from '../nav/nav_container';
import SingleCard from './single_card';
import { receiveAllMinions } from '../../actions/minion_actions';
import './single_card.css'

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMinions();
  }

  render() {
    const minions = this.props.minions && this.props.minions.data ?
    this.props.minions.data.map(minion => {
      return (
        <div>
          <SingleCard minion={minion} />
        </div>
      );
    }) : null
    ;
    return (
      <div>
        <Nav />
        <div className='cards-list'>
        {minions}
        </div>
      </div>
    );
  }
}


export default CardIndex;
