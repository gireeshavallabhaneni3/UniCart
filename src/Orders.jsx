import React from "react";

export const Orders = () => {
  const userEmail = sessionStorage.getItem("userEmail"); // Get user email from sessionStorage

  return (
    <div className="container mt-5">
      <h2>My Orders</h2>
      <div className="mt-3">
        <p>
          <strong>Email:</strong> {userEmail}
        </p>
        <p>No orders yet.</p>
        {/* You can populate this page with real orders in the future */}
      </div>
    </div>
  );
};
