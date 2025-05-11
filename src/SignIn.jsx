import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

export const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);  // Toggle between Sign In and Sign Up
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('userEmail', email);  // Save email to localStorage
      setIsLoggedIn(true); // Mark user as logged in
      navigate('/'); // Redirect to home page
    } else {
      alert('Please enter email and password!');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (email && password) {
      localStorage.setItem('userEmail', email);  // Save email to localStorage
      localStorage.setItem('userPassword', password);  // Save password to localStorage
      alert('Account created successfully!');
      navigate('/signin');  // Redirect to Sign In page
    } else {
      alert('Please enter email and password!');
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);  // Toggle between Sign In and Sign Up
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isSignUp && (
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <p className="mt-3">
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button onClick={toggleForm} className="btn btn-link">Sign In</button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <button onClick={toggleForm} className="btn btn-link">Sign Up</button>
          </>
        )}
      </p>
    </div>
  );
};
