// Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";
// import Filter from "./Filter";
import Modal from "react-modal";
import Panier from "./Panier";
import logo from "../images/logo.png";
import cartImage from "../images/cart.png";
import { NavLink } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Fonction pour ouvrir le modal
  function openModal() {
    setIsOpen(true);
  }

  // Fonction pour fermer le modal
  function closeModal() {
    setIsOpen(false);
  }

  // Fonction pour gérer l'ouverture/fermeture du menu mobile
  function handleMenuToggle() {
    setIsMobileOpen(!isMobileOpen);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo du site" />
        </a>
      </div>
      {/* Icône du menu mobile, qui s'affiche lorsqu'il est ouvert */}
      <div
        className={`menu-toggle ${isMobileOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span>Accueil</span>
        <span>Boutique</span>
      </div>
      {/* Liens de navigation, qui s'affichent lorsque le menu mobile est ouvert */}
      <div className={`links ${isMobileOpen ? "open" : ""}`}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/boutique">Boutique</NavLink>
      </div>
      {/* Bouton du panier, qui ouvre le modal du panier au clic */}
      <button className="cart" onClick={openModal}>
        <img src={cartImage} alt="Panier" />
      </button>
      {/* Le modal qui s'ouvre lorsque le bouton du panier est cliqué */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* Le composant Panier  */}
        <Panier />
      </Modal>
    </nav>
  );
};

export default Navbar;
