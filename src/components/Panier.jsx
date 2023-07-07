// ComposantPanier.js
import React, { useState } from "react";
import "../styles/ComposantPanier.css";

const ComposantPanier = () => {
  const [produits, setProduits] = useState([]); // Tableau pour stocker les produits choisis

  const ajouterProduit = () => {
    // Ajouter un produit au panier
    const nouveauProduit = { nom: "Nom du produit", prix: 10, quantite: 1 };
    setProduits([...produits, nouveauProduit]);
  };

  const supprimerProduit = (index) => {
    // Supprimer un produit du panier
    const nouveauxProduits = [...produits];
    nouveauxProduits.splice(index, 1);
    setProduits(nouveauxProduits);
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
    setProduits([]);
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
