// Navbar.jsx
import React from "react";
import "../styles/Navbar.css";
import Filter from "./Filter";
import Modal from "react-modal";
import Panier from "./Panier";
import logo from "../images/logo.png";

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://www.media.forma-stock.com/wp-content/uploads/2023/07/logo.png"
          alt=""
        />
      </div>
      <div className="links">
        <a href="#">Accueil</a>
        <a href="#">Boutique</a>
      </div>
      <button className="cart" onClick={openModal}>
        <img src="cart.png" alt="Panier" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Panier />
      </Modal>
    </nav>
  );
};
export default Navbar;
