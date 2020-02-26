import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="header">
            <div className="title">
              <a href="">Minion Wars</a>
            </div>
            <a className="splash-links" href="">
              about
            </a>
            <a className="splash-links" href="">
              Minions
            </a>
            <a className="splash-links" href="">
              For Sale
            </a>
            <a className="splash-links" href="">
              contact
            </a>
            <div className="login" onClick={this.props.loginForm}>
              Login
            </div>
          </div>
        </div>
        {/* {this.getLinks()} */}
      </div>
    );
  }
}

export default Nav;
