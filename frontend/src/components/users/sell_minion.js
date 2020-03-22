import React from "react";
import { withRouter } from "react-router-dom";
import "../buyAlert/buy_alert.css";
import Scroll from '../buyAlert/scroll.png';
import Handshake from './handshake.png';

class SellMinion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scroll">
                <img className='scroll-image' src={Scroll}></img>
                <p className="deal"> Great Deal! </p>
                <img className='handShake' src={Handshake}></img>
            </div>

        );
    }
}

export default withRouter(SellMinion);
