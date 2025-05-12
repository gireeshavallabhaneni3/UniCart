import React from 'react';

export const Profile = () => {
  const userEmail = localStorage.getItem('userEmail'); // Get user email from localStorage

  return (
    <div className="container mt-5">
      <h2>My Profile</h2>
      <div className="mt-3">
        <p><strong>Email:</strong> {userEmail}</p>
        {/* You can add more user information here */}
      </div>
    </div>
  );
};
