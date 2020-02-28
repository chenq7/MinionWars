import React from "react";
import { withRouter } from "react-router-dom";
import "./login_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push("/");
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
      password: this.state.password
    };
    this.props.login(user);
    this.props.history.push('/minions');
    this.props.closeModal();
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demologin();
    this.props.history.push("/minions");
    this.props.closeModal();
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
      <div>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <h3 className="loginTitle">Login</h3>
          <div className="loginFieldContainer">
            <div className="loginFields">
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
              <input type="submit" value="Submit" className="submitButton" />
              {this.renderErrors()}
              <div className="signupLink" onClick={this.props.signupForm}>
                Need an account? Sign up!
              </div>
              <button className="demoLogin" onClick={this.handleDemo}>
                Demo Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
