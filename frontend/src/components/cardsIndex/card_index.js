import React from 'react';
import SingleCard from './single_card';
import './single_card.css'
import './card_index.css'

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = { notice: "" }
    this.buyMinion = this.buyMinion.bind(this);
  }

  componentDidMount() {
    this.props.fetchMinions();
    this.props.fetchUsers();
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

  buyMinion(minion){
    let newAmount = this.user.coins - minion.price;
    if (newAmount < 0){
      this.props.NotEnough()
      return
    }
    else {
      this.user.coins = newAmount;
      this.props.updateUser(this.user);
    }
    
    let newMinion = {
      url: minion.url,
      name: minion.name,
      attack: minion.attack,
      defense: minion.defense,
      hp: minion.hp,
      rarity: minion.rarity,
      ability: minion.ability,
      price: minion.price,
      userId: this.props.currentUser.id
    };
        
      this.props.createMinion(newMinion);
      this.props.BuyAlert()
    }


  render() {
    // const hiddenTokens = [1,2,3,4,5,6,7].map(ele => <div className="scene scene--card hidden"></div>)
    let minions = this.props.minions && this.props.minions.data ?
    this.shuffleMinions(this.props.minions.data).map(minion => {
      if(minion.userId === null){
      return (
        <div className="card-container">
            <SingleCard minion={minion} />
          {this.props.loggedIn ? <button className="BuyAlert" 
          onClick={() => this.buyMinion(minion)}>Buy this card for {minion.price}</button>:null}
        </div>
      )};
    }) : null;
    
    if (this.props.currentUser && this.props.users.data){
      for (let i=0; i < this.props.users.data.length; i++){
        if (this.props.users.data[i]["username"] === this.props.currentUser.username){
          this.user = this.props.users.data[i];
          break;
        }
      }
    }

    
    return (
      <>
        <div className="market">
           <h1>Minions Market</h1>
          <img className="coin" src="/static/media/coin.849bfb99.png"></img>
          {/* <span className="not-enough-coins">{this.state.notice}</span>     */}
          <div className="currency">{this.user ? + this.user.coins : null}</div>
        </div>
        {/* <span className="user-profile-btn" onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}`)}>user profile</span> */}
        <div className='cards-list'>
          {minions}
          {/* {hiddenTokens} */}
        </div>
      </>
    );
  }
}

export default CardIndex;
