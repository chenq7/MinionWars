import React from "react";
import troll from "./cardimage/troll.png";
import dragon from "./cardimage/dragon1.png";
import rare from '../../app/cards/rare.png'
import legendary from '../../app/cards/legendary.png'
import common from '../../app/cards/common.png'
import epic from "../../app/cards/epic.png";



class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.flipCard = this.flipCard.bind(this);
    this.rarity = this.rarity.bind(this)
  }

  flipCard() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  rarity(minion){
    switch (minion.rarity) {
      case "Common":
        return <img className="card" src={common}></img>;
        break;
      case "Rare":
        return <img className="card" src={rare}></img>;
        break;
      case "Legendary":
        return <img className="card" src={legendary}></img>;
        break;
      case "Epic":
        return <img className="card" src={epic}></img>;
        break;

      default:
        break;
    }
  }

  minionName(minion){
     switch (minion.rarity) {
       case "Common":
         return <li className="commonName">{minion.name}</li>;
         break;
       case "Rare":
         return <li className="rareName">{minion.name}</li>;
         break;
       case "Legendary":
         return <li className="legendaryName">{minion.name}</li>;
         break;
       case "Epic":
         return <li className="epicName">{minion.name}</li>;
         break;

       default:
         break;
     }
  }

  render() {
    const minion = this.props.minion;
    return (
      <>
        <div id="container" class="col-lg-3">
          <div class="img-container">
            <div className={minion.rarity === 'Epic' ? 'epic-positioning':'image-positioning'}>
              <img src={minion.url}></img>
            </div>
            <div className="positioning">
              <ul className={minion.rarity === 'Epic' ? 'epic-text-color':null}>
                {this.minionName(minion)}
                <li>
                  HP:{minion.hp}
                  <i className="fas fa-briefcase-medical"></i>
                </li>
                <li>
                  Defense:{minion.defense}
                  <i class="fas fa-shield-alt"></i>
                </li>
                <li>
                  Attack:{minion.attack}
                  <i class="fas fa-bolt"></i>
                </li>
                <li>Ability:{minion.ability}</li>
              </ul>
            </div>
            {this.rarity(minion)}
          </div>
          
        </div>
      </>
    );
  }
}

export default SingleCard;
