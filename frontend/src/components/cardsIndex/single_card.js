import React from "react";

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
          class={this.state.active ? "card is-flipped" : "card"}
          onClick={this.flipCard}
        >
          <div class="card__face card__face--front">
            <div className="info">
              <div className="show-top">
                <h3 className="name">{minion.name}</h3>
              <div className="show-bottom">
                <h3 className={minion.rarity + "-" + "tag"}>{minion.rarity}</h3>
                <h4 className="gold">{minion.price}</h4>
              </div>
            </div>
            <div className={minion.rarity + "-" + "background"}></div>
            {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> */}
            {/* <div className="card_title">
            </div> */}
          </div>
          <div class="card__face card__face--back">
            <ul className="abilities">
              <li>HP:{minion.hp}<i class="fa fas fa-briefcase-medical"></i></li>
              <li>{minion.attack}</li>
              <li>{minion.defense}</li>
              <li>{minion.ability}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default SingleCard;
