import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? (
    <>
      <li class="nav-item">
        <Link to="/profile" class="nav-link active text-danger">
          Welcome, {`${user.name.toUpperCase()}`}
        </Link>
      </li>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        {/* <Link>
          Orders
        </Link> */}
      </li>
      <li class="nav-item">
        <Link to="" class="nav-link" onClick={handleLogout}>
          <i className="fas fa-user-circle"></i>
          LOG OUT
        </Link>
      </li>
    </>
  ) : (
    <>
      <li class="nav-item">
        <Link to="/login" class="nav-link">
          <i className="fas fa-user-circle"></i>LOG IN
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/signup" class="nav-link">
          <i className="fas fa-user"></i>SIGN UP
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  BOX OFFICE
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;
            </ul>
            <ul class="navbar-nav ms-md-auto">
              {nav}
              <li class="nav-item">
                <Link to="/cart" class="nav-link">
                  <i className="fas fa-shopping-cart">
                    <span class="badge bg-danger rounded-pill sup">ORDERS</span>
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
