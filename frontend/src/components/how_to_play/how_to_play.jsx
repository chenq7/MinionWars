import React from 'react'
import './how_to.css'
import Logo from '../../app/assets/logo.png';
import Vs from '../../app/assets/vs.png';
import M1 from '../../app/assets/robot1.png';
import M2 from '../../app/assets/witch.png';


class HowToPlay extends React.Component {
    
    render(){
        return(
            <div className='how-to-container'>
                <div className='title-container'>
                    <h1 className='how-title'>How to play:</h1>
                </div>
                <div className='description'>
                    <h3 id="how-to-market-title">Market Place</h3>
                    <p>
                        Player can buy minions with coins from market place to improve their territory. As well as sell their minions to earn coins.
                    </p>
                    <h2 id="how-to-battle-title">Battle</h2>
                    <p> 
                        Player select another player to faces off against in a duel between their minion. The goal is to eliminate the opponent's minion by attacking them base on the minion's stats. Attacking player earns coins if the battle is won. While defending player will be notified of the result. 
                    </p>
                    <div className="mvsm">
                        <div className="vs-background">
                            <img id="minion1" src={M1} />
                        </div>
                        <img className='how-to-vs' src={Vs} />
                        <div className="vs-background">
                            <img id="minion2" src={M2} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HowToPlay;