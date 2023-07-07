import React from "react";
import "./Boutique.css";

const Boutique = () => {
  return (
    <div className="boutique">
      <div className="row">
        <Produit
          nom="Produit 1"
          image="url_de_l_image"
          categorie="Tous"
          prix={10}
          note={3}
        />
        <Produit
          nom="Produit 2"
          image="url_de_l_image"
          categorie="Chocolat blanc"
          prix={15}
          note={4}
        />
        <Produit
          nom="Produit 3"
          image="url_de_l_image"
          categorie="Chocolat au lait"
          prix={12}
          note={5}
        />
      </div>
      <div className="row">
        <Produit
          nom="Produit 4"
          image="url_de_l_image"
          categorie="Chocolat noir"
          prix={18}
          note={2}
        />
        <Produit
          nom="Produit 5"
          image="url_de_l_image"
          categorie="Noix, Noisettes"
          prix={10}
          note={4}
        />
        <Produit
          nom="Produit 6"
          image="url_de_l_image"
          categorie="Fruits"
          prix={8}
          note={3}
        />
      </div>
      <div className="row">
        <Produit
          nom="Produit 7"
          image="url_de_l_image"
          categorie="Caramel"
          prix={14}
          note={5}
        />
        <Produit
          nom="Produit 8"
          image="url_de_l_image"
          categorie="Liqueur"
          prix={20}
          note={4}
        />
        <Produit
          nom="Produit 9"
          image="url_de_l_image"
          categorie="Tous"
          prix={16}
          note={3}
        />
      </div>
    </div>
  );
};

const Produit = ({ nom, image, categorie, prix, note }) => {
  return (
    <div className="produit">
      <img src={image} alt={nom} />
      <h2>{nom}</h2>
      <div className="categorie">{categorie}</div>
      <div className="prix">{prix} €</div>
      <div className="note">Note : {note}</div>
      <button className="btn">Ajouter au panier</button>
    </div>
  );
};

export default Boutique;
