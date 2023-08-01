// Panier.js
import React, { useState, useContext } from "react";
import "../styles/Panier.css";
import PanierContext from "../App";
import { usePanier } from "../context/PanierContext";

const ComposantPanier = () => {
  const panierData = usePanier();
  console.log("context", panierData);

  const produits = panierData.panier; // Contenu du panier sous forme de tableau []

  console.log("PANIER > ", produits);

  const supprimerProduit = (index) => {
    panierData.deleteProduit(index);
  };

  const calculerTotal = () => {
    // Calcul du total des produits
    let total = 0;
    produits.forEach((produit) => {
      total += produit.prix * produit.quantite;
    });
    return total;
  };

  const reinitialiserPanier = () => {
    // Réinitialiser le panier
    panierData.resetPanier();
  };

  return (
    <div className="panier-container">
      <h1 className="panier-title">Panier</h1>
      <button className="close-button">&#10005;</button>
      {produits.map((produit, index) => (
        <div className="produit-container" key={index}>
          <button
            className="supprimer-produit"
            onClick={() => supprimerProduit(index)}
          >
            &#10005;
          </button>
          <img
            className="produit-image"
            src={produit.image}
            alt={produit.nom}
          />
          <div className="produit-info">
            <p className="produit-nom">{produit.nom}</p>
            <p className="produit-prix">{produit.prix}€</p>
          </div>
          <div className="quantite-selector">
            <button
              className="quantite-button"
              disabled={produit.quantite === 1}
            >
              &#8592;
            </button>
            <p className="quantite">{produit.quantite}</p>
            <button
              className="quantite-button"
              disabled={produit.quantite === 20}
            >
              &#8594;
            </button>
          </div>
        </div>
      ))}
      <p className="total">Total: {calculerTotal()}€</p>
      <button className="reset-button" onClick={reinitialiserPanier}>
        Réinitialiser le panier
      </button>
      <button className="valider-button">Valider le panier</button>
    </div>
  );
};

export default ComposantPanier;
