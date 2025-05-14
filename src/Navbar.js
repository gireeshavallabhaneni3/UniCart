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
                    <Link className="dropdown-item" to="/mobiles">
                      Mobiles & Tablets
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/laptops">
                      Laptops & Computers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/appliances">
                      Home Appliances
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tv">
                      Televisions
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/audio">
                      Audio Devices
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menfashion">
                      Fashion for Men
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/womenfashion">
                      Fashion for Women
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/kidswearfashion">
                      Kids' Wear
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/kitchen">
                      Kitchen Essentials
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/beauty">
                      Beauty & Personal Care
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/furniture">
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fitness">
                      Fitness & Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/books">
                      Books & Stationery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gaming">
                      Gaming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/automobile">
                      Automobile Accessories
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/groceries">
                      Groceries
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pet">
                      Pet Supplies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/travel">
                      Travel & Luggage
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/decor">
                      Home Decor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/accessories">
                      Watches & Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart"></i>
                <span className="badge bg-danger">{totalQuantity}</span>
              </Link>
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