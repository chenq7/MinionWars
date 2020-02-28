import React from 'react';
import SingleCard from './single_card';
import './single_card.css'
import './card_index.css'

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.buyMinion = this.buyMinion.bind(this);
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

  buyMinion(minion){
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
        if(this.props.currentUser.coins > minion.price){
          this.props.currentUser.coins = this.props.currentUser.coins - minion.price
        }
        
      this.props.createMinion(newMinion);
      this.props.BuyAlert()
    }

  
    

  

  render() {
    const hiddenTokens = [1,2,3,4,5,6,7].map(ele => <div className="scene scene--card hidden"></div>)
    let minions = this.props.minions && this.props.minions.data ?
    this.shuffleMinions(this.props.minions.data).map(minion => {
      return (
        <div className="card-container">
          <div className="scene scene--card">
            <SingleCard minion={minion} />
          </div>
          <button className="BuyAlert" 
<<<<<<< HEAD
          onClick={() => this.buyMinion(minion)}
          onClick={this.props.BuyAlert}>buy this card</button>
=======
          onClick={() => this.buyMinion(minion)}>Buy this card for {minion.price}</button>
>>>>>>> 5f0be4c9013df1d0a4672980f63b79954b59472a
        </div>
      );
    }) : null;
    
    return (
      <div>
        <h1>Minions Market</h1>  
        {/* <span className="user-profile-btn" onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}`)}>user profile</span> */}
        <div className='cards-list'>
          {minions}
          {hiddenTokens}
        </div>
      </div>
    );
  }
}

export default CardIndex;
