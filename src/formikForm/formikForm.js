import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

class FormikForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isValid: false,
  };

  handleChange = (value) => {
    this.setState({
      username: value.username,
      email: value.email,
      password: value.password,
      confirmPassword: value.confirmPassword,
    });
  };

  validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username should be at least 4 characters')
      .max(
        15,
        'Username should be at most 15 characters, u wan finish the whole space?'
      )
      .required('Username is required'),

    email: Yup.string()
      .email('Invalid Email Address')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords do not match'
    ),
  });

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
          validationSchema={this.validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(true);
              resetForm();
              setSubmitting(false);
            }, 4000);
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleBlur,
            handleReset,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  <span className="help-block text-danger">
                    {
                      errors.username && touched.username && errors.username
                      //if errors.username && touched.username, then display error.username
                    }
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className="help-block text-danger">
                    {
                      errors.email && touched.email && errors.email
                      //if errors.email && touched.email, then display error.email
                    }
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className="help-block text-danger">
                    {
                      errors.password && touched.password && errors.password
                      //if errors.password && touched.password, then display error.password
                    }
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <span className="help-block text-danger">
                    {
                      errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword
                      //if errors.confirmPassword && touched.confirmPassword, then display error.confirmPassword
                    }
                  </span>
                </div>
                <div className="btn-group">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn-primary"
                  >
                    Submit
                  </button>
                  <button
                    disabled={!dirty}
                    type="submit"
                    className="btn-danger"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
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
