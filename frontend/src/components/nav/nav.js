import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";
import Logo from '../../../src/app/assets/logo.png'




class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.changeClass = this.changeClass.bind(this)

    this.state = {
      hidden: true
    }
    
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  changeClass(){
    const currentState = this.state.hidden;

    this.setState({hidden: !currentState})
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='nav-items'>
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

  showGetLinks(){
    if(this.props.loggedIn){

    }
  }

  render() {
    return (
      <div className="background">
        <header>
          <div className="logo">
            <img className="logo" src={Logo} />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/minions">Minions</Link>
            </li>
          </ul>

            <div className="dropdown">
              <i onClick={this.changeClass} class="fas fa-bars dots"></i>
              <div className={this.state.hidden ? "hide-me" : "dropdown-content"}>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
                <li>{this.getLinks()}</li>
              </div>
            </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Nav);
