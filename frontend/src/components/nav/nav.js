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
        <div className="nav-items">
          <div
            className="userProfile"
            onClick={() =>
              this.props.history.push(`/users/${this.props.currentUser.id}`)
            }
          >
            Profile
          </div>
          <div className="SessionButton" onClick={this.logoutUser}>
            <a>Logout</a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="SessionButton" onClick={this.props.loginForm}>
          <a>Login</a>
        </div>
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
        <ul className='nav'>
          <Link to="/">Home</Link>
          <Link to="/minions">Marketplace</Link>
          {this.getLinks()}
        </ul>
        <div className="dropdown-container">
          <i onClick={this.changeClass} class="fas fa-bars hamburger"></i>
          <div className="dropdown">
            <div className={this.state.hidden ? "hide-me" : "dropdown-content"}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/minions">Marketplace</Link>
                </li>
                <li>{this.getLinks()}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Nav);
