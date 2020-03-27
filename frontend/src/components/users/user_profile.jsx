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
    this.sellMinion = this.sellMinion.bind(this);
  }

  componentDidMount() {
    this.props.fetchMinions();
    this.props.fetchUsers();
  }

  handleVersus(user2){
    let newState = { currentUser: this.user, enemy: user2 }
    this.props.history.push({ pathname: `/users/${this.user._id}/vs/${user2}`, state: newState });
  }

  refresh() {
    setTimeout(function () {
      window.location.reload()
    }, 2500);
  }
  sellMinion(minion){
    
    this.props.deleteMinion(minion._id);
    this.user.coins += minion.price / 2;
    this.props.updateUser(this.user);
    this.props.SellMinion();
    this.refresh();    
  }

  render() {

    const userMinions = this.props.minions && this.props.minions.data ?
     this.props.minions.data.map(minion => {
        if(minion.userId === this.props.currentUser.id){
          return (
            <div className="grid">
              <div className="sell-container">
                <SingleCard minion={minion}/>
                <button className='sell' onClick={() => this.sellMinion(minion)}>sell for {minion.price/2}</button>
              </div>
            </div>
           
          );
        }
      }) : null;

    let otherUsers = [];
    if (this.props.users && this.props.users.data) {
      let allUsers = this.props.users.data;
      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username !== this.props.currentUser.username) {
          otherUsers.push(allUsers[i]);
        }
      }
      allUsers = allUsers.sort(() => 0.5 - Math.random()).slice(0, 10);

      otherUsers = allUsers.map(user => {
        return (
          <button className="userToAttack" onClick={() => this.handleVersus(user)}>
            {user.username}
          </button>
        );
      });
    }

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