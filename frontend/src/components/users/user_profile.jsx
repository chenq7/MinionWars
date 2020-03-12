import React from 'react';
import "./user_profile.css";
import SingleCard from '../cardsIndex/single_card';
import '../cardsIndex/card_index.css';
import '../cardsIndex/single_card.css'; 
import Coin from '../../../src/app/assets/coin.png'

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.user = null;
    this.handleVersus = this.handleVersus.bind(this);
  }

  componentDidMount() {
    this.props.fetchMinions();
    this.props.fetchUsers();
  }

  handleVersus(user2){
    let newState = { currentUser: this.user, enemy: user2 }
    this.props.history.push({ pathname: `/users/${this.user._id}/vs/${user2}`, state: newState });
  }

  render() {

    const userMinions = this.props.minions && this.props.minions.data ?
     this.props.minions.data.map(minion => {
        if(minion.userId === this.props.currentUser.id){
          return (
            <div className="grid">
               <div className="scene scene--card">
              <SingleCard minion={minion} />
            </div>
            </div>
           
          );
        }
      }) : null;

    const otherUsers = this.props.users && this.props.users.data ?
      this.props.users.data.map(user => {
        if (user.username !== this.props.currentUser.username){
          return (
            <button onClick={() => this.handleVersus(user)}>
              {user.username}
            </button>
          );
        }
      }) : null;

    if (this.props.currentUser && this.props.users.data) {
      for (let i = 0; i < this.props.users.data.length; i++) {
        if (this.props.users.data[i]["username"] === this.props.currentUser.username) {
          this.user = this.props.users.data[i];
          break;
        }
      }
    }
    
    return (
      <div className="user-profile-container">
        <span className="profile">
        <h1>{this.props.currentUser.username}</h1>   
        <img className='coin' src={Coin}/>
        <p className="money">{this.user ? this.user.coins : null}</p>
        </span>
        <div className="profileContent">
          <div className="minions">{userMinions}</div>
        <div className="otherUsers">{otherUsers}</div>
        </div>
        
      </div>
    );
  }
}

export default UserProfile;