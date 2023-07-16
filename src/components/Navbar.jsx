// Navbar.jsx
import React from "react";
import "../styles/Navbar.css";
import Filter from "./Filter";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./assets/images/logo.png" alt="" />
      </div>
      <div className="links">
        <a href="#">Accueil</a>
        <a href="#">Boutique</a>
      </div>
      <div className="cart">
        <img src="cart.png" alt="Panier" />
      </div>
    </nav>
  );
};
export default Navbar;
