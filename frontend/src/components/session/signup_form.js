import React from "react";
import { withRouter } from "react-router-dom";
import "./signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push("/signup");
  //   }

  //   this.setState({ errors: nextProps.errors });
  // }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user);
    this.props.closeModal();
    this.props.history.push("/minions");
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signupForm">
        <h3 className="signupTitle">Signup</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="signupFieldContainer">
            <div className="signupFields">
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
                className="usernameField"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="passwordField"
              />
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
                className="passwordField"
              />
              <br />
              <input type="submit" value="Submit" className="submitButton" />
              {this.renderErrors()}
              <div className="loginLink" onClick={this.props.loginForm}>
                Already a member? Log in!
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
