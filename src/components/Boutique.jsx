import React, { useState, useEffect } from "react";
import "../styles/Boutique.css";
import PRODUITS from "../data/products.json";
import { Link } from "react-router-dom";

const Boutique = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("");
  const [selectedMinRating, setSelectedMinRating] = useState("");
  const [selectedMaxRating, setSelectedMaxRating] = useState("");

  const handleCategoryChange = (category) => {
    // Checker si la catégorie a déjà té coché
    if (selectedCategories.includes(category)) {
      const newValues = selectedCategories.filter((cat) => cat !== category);
      setSelectedCategories(newValues);
    } else {
      const newValues = [...selectedCategories, category];
      setSelectedCategories(newValues);
    }
  };

  const [produits, setProduits] = useState(PRODUITS);

  useEffect(() => {
    // Filtres sur les categories des produits
    // Premier boucle sur la liste des produits dispo (fichier JSON)
    const newValue = PRODUITS.filter((produit) => {
      if (selectedCategories.length === 0) {
        return true;
      }
      // Deuxième boucle sur la liste de categorie selectionnée
      const categoryIsPresent = selectedCategories.map((cat) =>
        produit.categories.includes(cat)
      );
      
      const isGoodPriceMin = selectedMinPrice
        ? parseInt(produit.prix) >= parseInt(selectedMinPrice)
        : true;
      const isGoodPriceMax = selectedMaxPrice
        ? parseInt(produit.prix) <= parseInt(selectedMaxPrice)
        : true;

      if (
        categoryIsPresent.includes(true) &&
        isGoodPriceMin &&
        isGoodPriceMax
      ) {
        return true;
      } else {
        return false;
      }
    });
    // Mise a jour du nouveau état des produits a afficher
    setProduits(newValue);
  }, [selectedCategories]);

  const handleMinPriceChange = (event) => {
    setSelectedMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setSelectedMaxPrice(event.target.value);
  };

  const handleMinRatingChange = (event) => {
    setSelectedMinRating(event.target.value);
  };

  const handleMaxRatingChange = (event) => {
    setSelectedMaxRating(event.target.value);
  };

  return (
    <div className="boutique">
      <div className="filter-container">
        <div className="categories">
          <h2>Categories</h2>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.length === 0}
                  onChange={() => setSelectedCategories([])}
                />
                Tous
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Chocolat blanc")}
                  onChange={() => handleCategoryChange("Chocolat blanc")}
                />
                Chocolat blanc
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Chocolat au lait")}
                  onChange={() => handleCategoryChange("Chocolat au lait")}
                />
                Chocolat au lait
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Chocolat noir")}
                  onChange={() => handleCategoryChange("Chocolat noir")}
                />
                Chocolat noir
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Noix, Noisettes")}
                  onChange={() => handleCategoryChange("Noix, Noisettes")}
                />
                Noix, Noisettes
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Fruits")}
                  onChange={() => handleCategoryChange("Fruits")}
                />
                Fruits
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Caramel")}
                  onChange={() => handleCategoryChange("Caramel")}
                />
                Caramel
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Liqueur")}
                  onChange={() => handleCategoryChange("Liqueur")}
                />
                Liqueur
              </label>
            </li>
          </ul>
        </div>
        <div className="price">
          <h2>Prix</h2>
          <select value={selectedMinPrice} onChange={handleMinPriceChange}>
            <option value="">Prix mini</option>
            <option value="20">20€</option>
            <option value="30">30€</option>
            <option value="40">40€</option>
            <option value="50">50€</option>
            <option value="60">60€</option>
          </select>
          <select value={selectedMaxPrice} onChange={handleMaxPriceChange}>
            <option value="">Prix maxi</option>
            <option value="20">20€</option>
            <option value="30">30€</option>
            <option value="40">40€</option>
            <option value="50">50€</option>
            <option value="60">60€</option>
          </select>
        </div>
        <div className="rating">
          <h2>Note</h2>
          <select value={selectedMinRating} onChange={handleMinRatingChange}>
            <option value="">Note mini</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select value={selectedMaxRating} onChange={handleMaxRatingChange}>
            <option value="">Note maxi</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="row">
        {produits.map((item) => (
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
