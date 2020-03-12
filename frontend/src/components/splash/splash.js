import React from 'react';
import "./splash.css";
import Character from './pngwave.png';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    };

    render(){
      return (
        <div>
          <section id="top-section">
            <div id="top-section-title">
              <h2>Welcome to Minion Wars</h2>
            </div>
            <div className="cards-container">
              <ul className="cards">
                <li id="item-1" className="single-card-container">
                  <img
                    className="monster"
                    src="https://i.imgur.com/lBC7PWk.png"
                    alt=""
                  ></img>
                </li>
                <li id="item-2" className="single-card-container">
                  <img className="monster" src={Character} alt=""></img>
                </li>
                <li id="item-3" className="single-card-container">
                  <img
                    className="monster"
                    src="https://i.imgur.com/XVNQ98E.png"
                    alt=""
                  ></img>
                </li>
              </ul>
            </div>
          </section>

          <section id="bottom-section">
            <div id="welcome-page-information">
              <h2>Let The Battle Begin</h2>
              <p>
                They were called Minions. Creatures of many sizes, shapes,
                origins: followers of your command. Once a myth of the past. Now
                they are in your hands.
              </p>
              <Link to="./learn">Learn more</Link>
            </div>
          </section>
        </div>
      );
    }
}

export default Splash;
