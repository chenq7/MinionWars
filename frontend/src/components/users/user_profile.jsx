import React from 'react';
import "./user_profile.css";

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="user-profile-container">
        <h1>User Profile Page</h1>
      </div>
    );
  }
}

export default UserProfile;