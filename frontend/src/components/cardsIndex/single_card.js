import React from "react";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const minion = this.props.minion
    return (
     <div className='card-container'>
         <div className='title-header'>
             <h1>{minion.name}</h1>
             <h2>{minion.rarity}</h2>
         </div>
         <div className='minion-image-container'>
            
         </div>

     </div>
    );
  }
}

export default SingleCard;
