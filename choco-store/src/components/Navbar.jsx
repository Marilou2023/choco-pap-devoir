// Navbar.jsx
import React from "react";
import "./Navbar.css";
import Filter from "./Filter";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <ul className="links">
        <li className="link">Accueil</li>
        <li className="link">Boutique</li>
      </ul>
      <div className="cart">Panier</div>
      <Filter /> {Filter.jsx}
    </nav>
  );
};

export default Navbar;
