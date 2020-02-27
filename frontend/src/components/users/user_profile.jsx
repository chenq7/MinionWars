import React from 'react';
import "./user_profile.css";

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchMinions()
  }

 

  render() {

    const userMinions = this.props.minions && this.props.minions.data ?
     this.props.minions.data.map(minion => {
        if(minion.userId === this.props.currentUser.id){
          return (
            <div>{minion.name}</div>
          )
        }
      }) : null
    
    return (
      <div className="user-profile-container">
        <h1>{this.props.currentUser.username}</h1>
        <div>{userMinions}</div>
      </div>
    );
  }
}

export default UserProfile;