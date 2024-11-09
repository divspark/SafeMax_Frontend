import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css"; // Import the CSS file

export default function Example() {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await axios.post('http://localhost:5000/api/admin/register', formData);
      if (response.status === 201) {
        alert('Account created successfully!');
        navigate('/login'); // Redirect to login page on successful registration
      }
    } catch (error) {
      setError(error.response?.data.message || 'Registration failed. Try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <img alt="Your Company" src="Logo.png" className="logo" />
        <h2 className="heading">Create your account</h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="label">Name</label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
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
              <button type="submit" className="submit-btn">Sign Up</button>
            </div>
          </form>

          <p className="footer-text">
            <Link to="/login" className="footer-link">
              Already have an account? Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
