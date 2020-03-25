import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";
import Logo from "../../../src/app/assets/logo.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.changeClass = this.changeClass.bind(this);

    this.state = {
      hidden: true
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  changeClass() {
    const currentState = this.state.hidden;

    this.setState({ hidden: !currentState });
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <li
            className="userProfile"
            onClick={() =>
              this.props.history.push(`/users/${this.props.currentUser.id}`)
            }
          >
            Profile
          </li>
          <li className="SessionButton" onClick={this.logoutUser}>
            <a>Logout</a>
          </li>
          </>
      );
    } else {
      return (
        <li className="SessionButton" onClick={this.props.loginForm}>
          <a>Login</a>
        </li>
      );
    }
  }

  showGetLinks() {
    if (this.props.loggedIn) {
    }
  }

  render() {
    return (
      <header>
        <div className="logo-container">
          <img className="logo" src={Logo} />
        </div>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/minions">Marketplace</Link></li>
          {this.getLinks()}
        </ul>
        <div className="dropdown-container">
          <i onClick={this.changeClass} className="fas fa-bars hamburger"></i>
          <div className="dropdown">
            <div className={this.state.hidden ? "hide-me" : "dropdown-content"}>
              <ul className='nav-dropdown'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/minions">Marketplace</Link>
                </li>
                {this.getLinks()}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Nav);
