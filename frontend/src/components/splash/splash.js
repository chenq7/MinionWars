import React from 'react';
import "./splash.css";
import SplashCard from './card';
import Footer from '../footer/footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    };

    render(){
      return (
        <div>
          <section id="shop">
              <div className="content">
                  <h2>Choose your Minion</h2>
                  <div class="images">
                      <img src="http://placekitten.com/g/200/300" alt="" ></img>
                      <img src="http://placekitten.com/g/200/300" alt="" ></img>
                      <img src="http://placekitten.com/g/200/300" alt="" ></img>
                  </div>
              </div>
          </section>
          
          <section id="contact">
              <div className="content">
                  <h2>Let the Battle begin</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sodales nulla in posuere tempus.
                      Fusce malesuada odio vitae imperdiet molestie.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sodales nulla in posuere tempus.
                      Fusce malesuada odio vitae imperdiet molestie.
                  </p>
                  <a href="#">Learn more</a>
              </div>
          </section>
        </div>
      );
    }
}

export default Splash;
