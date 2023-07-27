// Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";
import Filter from "./Filter";
import Modal from "react-modal";
import Panier from "./Panier";
import logo from "../images/logo.png";
import cartImage from "../images/cart.png";

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
  // État local pour gérer l'ouverture/fermeture du modal et l'état du menu mobile
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
        <a href="#">
          <img src={logo} alt="Logo du site" />
        </a>
      </div>
      {/* Icône du menu mobile, qui s'affiche lorsqu'il est ouvert */}
      <div
        className={`menu-toggle ${isMobileOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Liens de navigation, qui s'affichent lorsque le menu mobile est ouvert */}
      <div className={`links ${isMobileOpen ? "open" : ""}`}>
        <a href="#">Accueil</a>
        <a href="#">Boutique</a>
      </div>
      {/* Bouton du panier, qui ouvre le modal du panier au clic */}
      <button className="cart" onClick={openModal}>
        <a href="#">
          <img src={cartImage} alt="Panier" />
        </a>
      </button>
      {/* Le modal qui s'ouvre lorsque le bouton du panier est cliqué */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* Le composant Panier qui s'affiche dans le modal */}
        <Panier />
      </Modal>
    </nav>
  );
};

export default Navbar;
