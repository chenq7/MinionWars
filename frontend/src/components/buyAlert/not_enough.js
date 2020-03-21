import React from "react";
import { withRouter } from "react-router-dom";
import "./buy_alert.css";
import BrokeMan from './broke.png';
import Scroll from './scroll.png'

class NotEnough extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scroll">
                <img className='scroll-image' src={Scroll}></img>
                <p className="notEnoughHeader"> Not enough coins! </p>
                <img className='brokeMan' src={BrokeMan}></img>
            </div>

        );
    }
}

export default withRouter(NotEnough);
