import React, { Component } from 'react';

class StandardForm extends Component {
  state = {
    username: '',
    usernameValid: false,
    email: '',
    emailValid: false,
    password: '',
    passwordValid: '',
    passwordConfirm: '',
    passwordConfirmValid: false,
    formValid: false,
    errorMsg: {},
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 6 || username.length > 15) {
      usernameValid = false;
      errorMsg.username = 'Username should be between 6 and 15 characters';
    }

    this.setState({ errorMsg, usernameValid }, this.validateForm);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = 'Invalid Email Address';
    }

    this.setState({ errorMsg, emailValid }, this.validateForm);
  };

  validatepassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Password should be at least 6 characters';
    }

    this.setState({ errorMsg, passwordValid }, this.validateForm);
  };

  validateConfirmPassword = () => {
    const { passwordConfirm, password } = this.state;
    let passwordConfirmValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = 'Passwords do not match';
    }

    this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
  };

  validateForm = () => {
    const {
      usernameValid,
      passwordConfirmValid,
      emailValid,
      passwordValid,
    } = this.state;
    this.setState({
      formValid:
        usernameValid && emailValid && passwordValid && passwordConfirmValid,
    });
  };

  render() {
    return (
      <div>
        <h5>Standard Form</h5>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={this.state.passwordConfirm}
              onChange={(e) =>
                this.setState({ passwordConfirm: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default StandardForm;
