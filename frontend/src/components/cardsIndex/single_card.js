import React from "react";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const minion = this.props.minion
    return (
        <div className="card 1">
          <div className="card_image">
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>{minion.rarity}</p>
          </div>
        </div>
    );
  }
}

export default SingleCard;
