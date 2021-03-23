import React, { Component } from 'react';

class StandardForm extends Component {
  render() {
    return (
      <div>
        <h5>Standard Form</h5>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default StandardForm;
