import React from "react";
import { withRouter } from "react-router-dom";
import "./buy_alert.css";

class BuyAlert extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
                <div className="scroll">
                     <p className="congrats"> Congratulations! Meet your new Minion! </p>
                     </div>
        );
    }
}

export default withRouter(BuyAlert);
