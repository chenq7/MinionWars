import React from "react";
import { withRouter } from "react-router-dom";
import "./nav.css";
import Logo from './logo.png'


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
        <div className="logout" onClick={this.logoutUser}>
          <a>Logout</a>
        </div>
      );
    } else {
      return (
        <div className="login" onClick={this.props.loginForm}>
          <a>Login</a>
        </div>
      );
    }
  }

  render() {
    return (
       <header>
            <div className="logo">
                <img className='logo' src={Logo}/>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Minions</a></li>
                <li>{this.getLinks()}</li>
                <li>
                    <a href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </header>
    );
  }
}

export default withRouter(Nav);
