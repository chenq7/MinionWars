import React from "react";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const minion = this.props.minion
    return (
        <div class="card 1">
          <div class="card_image">
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div class="card_title title-white">
            <p>{minion.rarity}</p>
          </div>
        </div>
    );
  }
}

export default SingleCard;
