import React, { useState } from 'react';
import '../styles/auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Form Submitted:', formData);
    // Handle sign-in logic here (e.g., authenticate with API)
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-submit-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
