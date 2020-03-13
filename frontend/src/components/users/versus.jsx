import React from "react";
import { fetchMinions } from '../../actions/minion_actions';
import { connect } from 'react-redux';
import './versus.css';

const mapStateToProps = (state) => {
  return {
    minions: state.entities.minions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMinions: () => dispatch(fetchMinions()),
  };
};

class Versus extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = null;
    this.enemy = null;
    this.minion1 = null;
    this.minion2 = null;
    this.result = "";
    this.attack = this.attack.bind(this);
  }

  componentDidMount() {
    this.props.fetchMinions();
  }

  attack(minion1, minion2){
    if (!minion1){
      this.result = this.currentUser.username + " go buy a minion!"
      return;
    }
    if (!minion2){
      this.result = this.currentUser.username + " wins by default"
      return;
    }
    
    let dmg;
    while (minion1.hp > 0 && minion2.hp > 0){
      dmg = minion1.attack - minion2.defense;
      minion2.hp -= dmg;
      this.result += `${minion1.name} deals ${dmg} to ${minion2.name}, hp left: ${minion2.hp}\n`;
      if (minion2.hp <= 0){
        this.result += this.currentUser.username + "'s " + minion1.name + " wins";
        break
      }
      dmg = minion2.attack - minion1.defense
      minion1.hp -= dmg;
      this.result += `${minion2.name} deals ${dmg} to ${minion1.name}, hp left: ${minion1.hp}\n`;
      if (minion1.hp <= 0) {
        this.result += this.enemy.username + "'s " + minion2.name + " wins";
        break
      }
    }
  }

  render() {
    
    if (this.props.history.location.state){
      this.currentUser = this.props.history.location.state.currentUser; 
      this.enemy = this.props.history.location.state.enemy;

      let minions = Object.values(this.props.minions.data);

      if (minions) {
        for (let i = 0; i < minions.length; i++) {
          if (this.minion1 && this.minion2) break;
          else if (minions[i].userId === this.currentUser._id){
            this.minion1 = minions[i];
          }
          else if (minions[i].userId === this.enemy._id) {
            this.minion2 = minions[i];
          }
        }
      }

      this.attack(this.minion1, this.minion2);
    }


    
    return(
      <div className="versus-container">
        <div className="vs">
          <div className="textLog">
        {this.currentUser ? this.currentUser.username : null}
                        {" vs "}
                        {this.enemy ? this.enemy.username : null }
                        <br/>
                        {this.minion1 ? this.minion1.name : null}
                        {" vs "}
                        {this.minion2 ? this.minion2.name : null}
                
                <ul>
                  {this.result.split("\n").map(line => {
                    return <li>
                      {line}
                    </li>
                  })}
                </ul>
          </div>
        
    </div>
          
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Versus);
