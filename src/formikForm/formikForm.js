import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

class FormikForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isValid: false,
  };

  render() {
    return (
      <div>
        <h5>Formik form with Yup</h5>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            isSubmitting: true,
          }}
        >
          {({}) => {
            return (
              <form noValidate>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input className="form-control" type="text" name="username" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control" type="email" name="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                  />
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default FormikForm;
