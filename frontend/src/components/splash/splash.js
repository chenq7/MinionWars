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
          <>
            <div className="splash-container">
              <section className="splash-content">
                <div className="information">
                  <h2>Let the battle begin!</h2>
                  <p>
                    Players battle against one another in a race to build up
                    their armies. Who will rein supreme?
                  </p>
                  <ul>
                    <li>collect cards to build your army</li>
                    <li>Use your minions to attack other players' armies</li>
                    <li>Form alliances with other players to crush your enemies</li>
                    <li>Rule the minion universe!</li>
                  </ul>
                </div>
                <div className="minion-container">
                  <ul className="minion-list">
                    <li>
                   <SplashCard type='rare' background='rare-background' minion='dark dragon'/>
                    </li>
                    <li>
                   <SplashCard type='legendary' background='legendary-background' minion='cosmocat'/>
                    </li>
                    <li>
                   <SplashCard type='common' background='common-background' minion='demigod'/>
                    </li>
                  </ul>
                  <ul className="minion-list">
                    <li>
                   <SplashCard type='uncommon' background='uncommon-background' minion='james bond'/>
                    </li>
                    <li>
                   <SplashCard type='epic' background='epic-background' minion='tweetie'/>
                    </li>
                    <li>
                   <SplashCard type='legendary' background='legendary-background' minion='mr.wiggle'/>
                    </li>
                  </ul>
                </div>
                <section className='buttons'>
                    <div className='buttons-container'>
                        <div className='tab-1'>
                            
                        </div>
                    </div>
                </section>
              </section>
              <Footer/>
            </div>
          </>
        );
    }
}

export default Splash;
