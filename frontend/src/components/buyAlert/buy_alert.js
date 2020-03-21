import React from "react";
import { withRouter } from "react-router-dom";
import "./buy_alert.css";
import Scroll from './scroll.png'

class BuyAlert extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className="scroll">
            <img className='scroll-image' src={Scroll}></img>
            {/* <img src={Balloon}></img> */}
            <p className="congrats"> Congratulations! On Buying a Minion! </p>
                <br></br><br></br>
              <p className='congrats'> You are one step closer to world domination
           Keep buying minions to continue growing your army
         Check your user profile to see your newly purchased minion
         </p>
          </div>
          
        );
    }
}

export default withRouter(BuyAlert);
