import React from "react";
import NavBar from "../components/Navbar";
import PRODUITS from "../data/products.json";

const Accueil = () => {
  return (
    <>
      {PRODUITS.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </>
  );
};

export default Accueil;
