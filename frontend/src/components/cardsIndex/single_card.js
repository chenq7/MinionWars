import React from "react";
import troll from "./cardimage/troll.png";
import dragon from "./cardimage/dragon1.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const minion = this.props.minion;
    return (
      <>
        <div
          className={this.state.active ? "card is-flipped" : "card"}
          onClick={this.flipCard}
        >
          <div className="card__face card__face--front">
            <div className="info"></div>
            <div className="show-top">
              <h3 className="name">{minion.name}</h3>
            </div>

            <div className="show-bottom">
              <h3 className={minion.rarity + "-" + "tag"}>{minion.rarity}</h3>
              {/* <h4 className="gold">{minion.price}</h4> */}
            </div>
            <div className={minion.rarity + "-" + "background"}>
              <div className="info"></div>
              <div className="show-top">
                {minion.url === "tempurl" ? null : <img src={minion.url}></img>}
                <h3 className="name">{minion.name}</h3>
              </div>

              <div className="show-bottom">
                <h3 className={minion.rarity + "-" + "tag"}>{minion.rarity}</h3>
                {/* <h4 className="gold">{minion.price}</h4> */}
              </div>
            </div>
          </div>
          <div className="card__face card__face--back">
            <ul className="abilities">
              <li>
                HP:{minion.hp}<i className="fas fa-briefcase-medical"></i>
              </li>
              <li>
                Attack:{minion.attack}<i class="fas fa-bolt"></i>
              </li>
              <li>Defense:{minion.defense}<i class="fas fa-shield-alt"></i></li>
              <li>Ability:{minion.ability}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default SingleCard;
