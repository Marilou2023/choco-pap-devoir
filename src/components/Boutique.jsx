import React from "react";
import "../styles/Boutique.css";
import PRODUITS from "../data/products.json";
import { Link } from "react-router-dom";

const Boutique = () => {
  return (
    <div className="boutique">
      <div className="row">
        {PRODUITS.map((item) => (
          <Produit
            id={item.id}
            nom={item.nom}
            image={item.url}
            categories={item.categories}
            prix={item.prix}
            note={3}
          />
        ))}
      </div>
    </div>
  );
};

const Produit = ({ id, nom, image, categorie, prix, note }) => {
  return (
    <Link to={`/detail/${id}`} className="produit">
      <img src={image} alt={nom} />
      <h2>{nom}</h2>
      <div className="categorie">{categorie}</div>
      <div className="prix">{prix} €</div>
      <div className="note">Note : {note}</div>
      <button className="btn">Ajouter au panier</button>
    </Link>
  );
};

export default Boutique;
