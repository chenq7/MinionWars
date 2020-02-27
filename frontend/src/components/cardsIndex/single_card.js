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
      <div class="scene scene--card">
        <div
          class={this.state.active ? "card is-flipped" : "card"}
          onClick={this.flipCard}
        >
          <div class="card__face card__face--front">
            <div className={minion.rarity+'-'+'background'}></div>
            {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> */}
            {/* <div className="card_title">
              <h3 className='name'>{minion.name}</h3>
              <h3 className='type'>{minion.rarity}</h3>
            </div> */}
          </div>
          <div class="card__face card__face--back">back</div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
