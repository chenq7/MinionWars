import React from 'react';
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
        <h1>Card Index Page</h1>  
        <span className="user-profile-btn" onClick={() => this.props.history.push(`/users/${this.props.currentUserId}`)}>user profile</span>
        {minions}
      </div>
    );
  }
}


export default CardIndex;
