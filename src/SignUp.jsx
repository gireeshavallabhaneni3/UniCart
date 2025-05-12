import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (email && password) {
      localStorage.setItem('userEmail', email); // Save email to localStorage
      localStorage.setItem('userPassword', password); // Save password to localStorage
      alert('Account created successfully!');
      navigate('/signin'); // Redirect to SignIn page
    } else {
      alert('Please enter email and password!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
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

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>

      <p className="mt-3">
        Already have an account?{' '}
        <button onClick={() => navigate('/signin')} className="btn btn-link">Sign In</button>
      </p>
    </div>
  );
};
