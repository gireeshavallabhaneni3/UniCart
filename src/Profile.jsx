import React from 'react';

export const Profile = () => {
  const userEmail = sessionStorage.getItem('userEmail'); // Get user email from sessionStorage

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
