import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    resetForm();
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username} {/* Explicit value */}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {touched.username && errors.username && (
                <small className="error-text">{errors.username}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email} {/* Explicit value */}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {touched.email && errors.email && (
                <small className="error-text">{errors.email}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password} {/* Explicit value */}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {touched.password && errors.password && (
                <small className="error-text">{errors.password}</small>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
