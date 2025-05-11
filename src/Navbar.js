import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { useCart } from "./Cart";
import { Link } from "react-router-dom";

export const Navbar = ({ isLoggedIn, setIsLoggedIn, searchQuery,setSearchQuery}) => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Unicart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu"
                  style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    overflowX: "none",
                  }}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/mobiles">
                      Mobiles & Tablets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/laptops">
                      Laptops & Computers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/appliances">
                      Home Appliances
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tv">
                      Televisions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/audio">
                      Audio Devices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/menfashion">
                      Fashion for Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/womenfashion">
                      Fashion for Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kidswearfashion">
                      Kids' Wear
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kitchen">
                      Kitchen Essentials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/beauty">
                      Beauty & Personal Care
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/furniture">
                      Furniture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/fitness">
                      Fitness & Sports
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/books">
                      Books & Stationery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/gaming">
                      Gaming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/automobile">
                      Automobile Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/groceries">
                      Groceries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pet">
                      Pet Supplies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/travel">
                      Travel & Luggage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/decor">
                      Home Decor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/accessories">
                      Watches & Accessories
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link" href="/cart">
                <i className="bi bi-cart"></i>
                <span className="badge bg-danger">{totalQuantity}</span>
              </a>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />
              <button className="btn btn-outline-danger me-3" type="submit">
                Clear
              </button>
              {/* Profile Section */}
              {!isLoggedIn ? (
                <Link to="/signin" className="btn btn-outline-light" style={{width: "180px"}}>
                  <i className="bi bi-person-circle"></i> Sign In
                </Link>
              ) : (
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                    <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
                    <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};