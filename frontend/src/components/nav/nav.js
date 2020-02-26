import React from "react";
import { Link, withRouter } from "react-router-dom";


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
        <div>
          <button onClick={this.logoutUser}>Logout</button>
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
      <div>
        <div className="background">
          <div className="header">
            <div className="title">
              <Link to="/">Minion Wars</Link>
            </div>
            <Link to="/" className="splash-links">
              about
            </Link>
            <Link to="/" className="splash-links">
              Minions
            </Link>
            <Link to="/" className="splash-links">
              For Sale
            </Link>
            <Link to="/" className="splash-links">
              contact
            </Link>
            <div className="splash-links">
              {this.getLinks()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
