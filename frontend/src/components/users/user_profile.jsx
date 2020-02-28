import React from 'react';
import "./user_profile.css";
import SingleCard from '../cardsIndex/single_card';
import '../cardsIndex/card_index.css';
import '../cardsIndex/single_card.css';
import Coin from '../../../src/app/assets/coin.png'

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchMinions()
  }

 

  render() {

    const userMinions = this.props.minions && this.props.minions.data ?
     this.props.minions.data.map(minion => {
       
        if(minion.userId === this.props.currentUser.id){
          return (
            <div className="scene scene--card">
              <SingleCard minion={minion} />
            </div>
          );
        }
      }) : null
    
    return (
      <div className="user-profile-container">
        <div className="profile">
        <h1>{this.props.currentUser.username}</h1>   
        <img className='coin' src={Coin}/>
        <p className="money">1000</p>
        </div>
        <div>{userMinions}</div>
      </div>
    );
  }
}

export default UserProfile;