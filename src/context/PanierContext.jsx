import React, { useState, createContext, useContext } from "react";

const PanierContext = createContext(null);

export function usePanier() {
  return useContext(PanierContext);
}

export function PanierProvider({ children }) {
  // Etat de notre panier / Contenu
  const [panier, setPanier] = useState([]);

  // Fonction pour ajouter un produit au panier existant
  const addProduct = (produit) => {
    setPanier([...panier, produit]);
  };

  // Fonction pour réinisitalisé le panier au complet
  const resetPanier = () => {
    setPanier([]);
  };

  // Fonction pour supprimer un produit
  const deleteProduit = (index) => {
    const nouveauxPanier = [...panier];
    nouveauxPanier.splice(index, 1);
    setPanier(nouveauxPanier);
  };

  return (
    <PanierContext.Provider
      value={{ panier, addProduct, resetPanier, deleteProduit }}
    >
      {children}
    </PanierContext.Provider>
  );
}
