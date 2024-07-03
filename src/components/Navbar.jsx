import React from "react";
import "../Styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ size }) {
  return (
    <div className="navbar container">
      <a href="home" className="logo">
        Fr<span>es</span>hMart
      </a>
      <div className="navlink">
        <NavLink to="/" className="home" title="Home">
          Home
        </NavLink>
        <NavLink to="Cards" title="Items">
          Items
        </NavLink>
        <NavLink to="about" title="About">
          About
        </NavLink>
      </div>
      <div className="nav-btn">
        <div className="shopping-btn">
          <Link to="/signup" className="signup-btn" title="Account">
            <RiAccountCircleLine />
          </Link>
          <Link to="/Basket" title="Basket">
            <FaShoppingCart />
            <span>{size}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
