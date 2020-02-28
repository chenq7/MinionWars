import React from 'react';
import "./splash.css";
import SplashCard from './card';
import Footer from '../footer/footer';
import Character from './pngwave.png';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    };

    render(){
      return (
        <div className="splash-page">
          <section id="shop">
            <div className="content">
              <h2>Choose your Minion</h2>
              <div className="images">
                <div className="monster-background">
                  <img
                    className="monster"
                    src="https://i.imgur.com/lBC7PWk.png"
                    alt=""
                  ></img>
                </div>
                <div className="monster-background">
                  <img className="monster" src={Character} alt=""></img>
                </div>
                <div className="monster-background">
                  <img
                    className="monster"
                    src="https://i.imgur.com/XVNQ98E.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="content">
              <div className="content-container">
                <h2>Let the Battle begin</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sodales nulla in posuere tempus. Fusce malesuada odio vitae
                  imperdiet molestie. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed sodales nulla in posuere tempus. Fusce
                  malesuada odio vitae imperdiet molestie.
                </p>
                <Link to="./learn">Learn more</Link>
              </div>
            </div>
          </section>
        </div>
      );
    }
}

export default Splash;
