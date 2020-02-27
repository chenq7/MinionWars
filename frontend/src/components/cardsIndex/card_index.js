import React from 'react';
import SingleCard from './single_card';
import './single_card.css'

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMinions();
  }

  shuffleMinions(array){
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}



  render() {
    const hiddenTokens = [1,2,3,4,5,6,7].map(ele => <div className="scene scene--card hidden"></div>)
    let minions = this.props.minions && this.props.minions.data ?
    this.shuffleMinions(this.props.minions.data).map(minion => {
      return (
        <div className="scene scene--card">
          <SingleCard minion={minion} />
        </div>
      );
    }) : null;
    
    return (
      <div>
        <h1>Card Index Page</h1>  
        <span className="user-profile-btn" onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}`)}>user profile</span>
        <div className='cards-list'>
          {minions}
          {hiddenTokens}
        </div>
      </div>
    );
  }
}

export default CardIndex;
