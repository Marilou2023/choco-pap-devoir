import React from "react";
import "../styles/Boutique.css";

const Boutique = () => {
  return (
    <div className="boutique">
      <div className="row">
        <Produit
          nom="Choco-cerise"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit1.jpg"
          categories="Fruit|Noix/Noisettes|Chocolat au lait|Tous"
          prix={10}
          note={3}
        />
        <Produit
          nom="Chocolaitcaramel"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit2.jpg"
          categories="Caramel|Chocolat au lait|Tous"
          prix={15}
          note={4}
        />
        <Produit
          nom="choco-griottes"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit3.jpg"
          categories="Fruit|chocolat au lait|Liqueur|Tous"
          prix={12}
          note={5}
        />
      </div>
      <div className="row">
        <Produit
          nom="choco-love"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit4.jpg"
          categories="Chocolat blanc|Tous"
          prix={18}
          note={2}
        />
        <Produit
          nom="Choco-noisette"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit5.jpg"
          categories="Noix/Noisettes|Chocolat au lait|Tous"
          prix={10}
          note={4}
        />
        <Produit
          nom="Choco-tendre"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit6.jpg"
          categories="Chocolat blanc|Chocolat au lait|Tous"
          prix={8}
          note={3}
        />
      </div>
      <div className="row">
        <Produit
          nom="Choco-fraise"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit7.jpg"
          categories="Fruit|Noix/Noisettes|Liqueur|Tous"
          prix={14}
          note={5}
        />
        <Produit
          nom="Choco-blacklove"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit8.jpg"
          categories="Chocolat noir|Liqueur|Tous"
          prix={20}
          note={4}
        />
        <Produit
          nom="Choco-croc"
          image="https://www.media.forma-stock.com/wp-content/uploads/2023/07/produit9.jpg"
          categories="Chocolat au lait|Tous"
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
