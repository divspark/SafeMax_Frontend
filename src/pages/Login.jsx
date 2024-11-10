import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css"; // Import the CSS file

export default function Example() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://safe-max-backend.vercel.app/api/admin/login', formData);
      console.log('Login response:', response);
      const { token } = response.data;

      // Save the token to localStorage or a similar secure storage
      localStorage.setItem('authToken', token);

      // Redirect to the admin page
      navigate('/admin');
    } catch (error) {
      setError(error.response?.data.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <img alt="Your Company" src="Logo.png" className="logo" />
        <h2 className="heading">Sign in to your account</h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="email" className="label">Email address</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="input"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div>
              <button type="submit" className="submit-btn">Sign in</button>
            </div>
          </form>

          <div className="text-sm">
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <p className="footer-text">
            <Link to="/signup" className="footer-link">Don't have an account? Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
