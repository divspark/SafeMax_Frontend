import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css"; // Import the CSS file

export default function Example() {
  return (
    <div className="container">
      <div className="form-container">
        <img
          alt="Your Company"
          src="Logo.png"
          className="logo"
        />
        <h2 className="heading">Sign in to your account</h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="input"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="submit-btn">
                Sign in
              </button>
            </div>
          </form>

          <div className="text-sm">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <p className="footer-text">
          <Link to="/signup" className="footer-link">
              Don't have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
