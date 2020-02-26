import React from "react";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="minion-card">
        <div className="minion-header">
          <div className="minion-content">
            <div>
              <div className="minion-title">{this.props.minion}</div>
            </div>
          </div>
          <div className="minion-content">
            <div>
              <div className={"minion-text" + " " + this.props.type}>
                {this.props.type}
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <div className={this.props.background}>
            <img
              className="image-minion"
              src="https://homepages.cae.wisc.edu/~ece533/images/cat.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
