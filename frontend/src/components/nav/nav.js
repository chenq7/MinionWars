import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";


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
          Logout
        </div>
      );
    } else {
      return (
        <div className="login" onClick={this.props.loginForm}>
          Login
        </div>
      );
    }
  }

  render() {
    return (
       <header>
            {/* <input type="checkbox" name="" id="chk1"> */}
            <div className="logo">
                <h1>Minion Wars</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Minions</a></li>
                <li><a className="splash-links">{this.getLinks()}</a></li>
                <li>
                    <a href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
            </ul>
            <div className="menu">
                <label for="chk1">
                    <i className="fa fa-bars"></i>
                </label>
            </div>
        </header>
    );
  }
}

export default withRouter(Nav);
