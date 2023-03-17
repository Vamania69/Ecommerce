import React, { useState, useEffect } from "react";
import "../App.css";
import "../pages/buy";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CountContext } from "../utils/context";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  //cart state
  const countContext = useContext(CountContext);

  const [navbar, setNavbar] = useState(false);
  const Sticknavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    Sticknavbar();
    window.addEventListener("scroll", Sticknavbar);
  });
  return (
    <nav
      className={navbar ? "nav-container sticky   " : "nav-container"}
      id="nav"
    >
      <div className="left-nav ">
        <img src="logo.png" alt="" />
      </div>
      <div className="right-nav  m-t-1 s">
        {
          // navigation for the wider screen
        }
        <ul className="nav-pages  d-none d-md-flex">
          {navbar ? (
            <button className="primary-btn">
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          ) : (
            <span>
            </span>
          )}
          <li>
            <Link to="/"> Home </Link>
          </li>

          <li>
            <Link to="/Order"> Orders </Link>
          </li>
          <li>
            <Link to="/Checkout"> Checkout </Link>
          </li>
          <li>
            <Link to="/ShoppingCart">
              <i className="fas fa-shopping-cart">
                <span className="cart-count">
                  {countContext.countState.cart.length}
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/Wishlist">
              <i className="far fa-heart wishlist"></i>
            </Link>
          </li>
          <li>
            <Link to="/User" title="signed in">
              <i className="far fa-user"></i>
            </Link>
          </li>

        </ul>
        {
          // hamburger menu for the md-screen size using the bootstrap component 
        }
        <span className="d-md-none d-flex m-t-3 ">
          <Dropdown >
            <Dropdown.Toggle style={{ backgroundColor: '#183852', borderColor: "#183852", padding: '10px 12px', margin: '3px 4px' }} variant="success" id="dropdown-basic">
              <i class="fa-solid fa-list-ul"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item ><Link to="/" >    Home</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/ShoppingCart" > Cart </Link></Dropdown.Item>
              <Dropdown.Item> <Link to="/Wishlist" > Wishlist</Link></Dropdown.Item>
              <Dropdown.Item> <Link to="/User" > Login </Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>

      </div>
    </nav >
  );
};

export default Navbar;
