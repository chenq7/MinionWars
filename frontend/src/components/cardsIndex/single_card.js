import React from "react";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.flipCard = this.flipCard.bind(this)
  }

  flipCard(){
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }

  render() {
      const minion = this.props.minion
    return (
      <>
        <div
          class={this.state.active ? "card is-flipped" : "card"}
          onClick={this.flipCard}
        >
          <div class="card__face card__face--front">
            <div className="info">

              <h3 className="name">{minion.name}</h3>
              <h3 className={minion.rarity + "-" + "tag"}>
                {minion.rarity}
              </h3>
            </div>
            <div className={minion.rarity + "-" + "background"}></div>
            {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> */}
            {/* <div className="card_title">
            </div> */}
          </div>
          <div class="card__face card__face--back">back</div>
        </div>
        </>
    );
  }
}

export default SingleCard;
