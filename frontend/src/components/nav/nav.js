import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";
import Logo from '../../../src/app/assets/logo.png'
// import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navItems">
          <div className="userProfile" onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}`)}>Profile</div>
          <div className="SessionButton" onClick={this.logoutUser}>
            <a>Logout</a>
          </div>
        </div >
      );
    } else {
      return (

        <div className="SessionButton" onClick={this.props.loginForm}>
          <a>Login</a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='background'>
        <header>
          <div className="logo">
            <img className='logo' src={Logo} />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/minions">Minions</Link></li>

            <div className="dropdown" >
              <FontAwesomeIcon className="dots" icon={f0} />
              <div className="dropdown-content">
              <a href="#">
                <i className="fa fab fa-github"></i>
              </a>
              <li>{this.getLinks()}</li>
              </div>

            </div>
          </ul>
        </header>
      </div>
    );
  }
}

export default withRouter(Nav);
