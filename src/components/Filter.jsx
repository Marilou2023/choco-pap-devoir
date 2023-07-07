import React, { useState } from "react";
import "../styles/filter.css";

const Filter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("");
  const [selectedMinRating, setSelectedMinRating] = useState("");
  const [selectedMaxRating, setSelectedMaxRating] = useState("");

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

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
    <div className="filter-container">
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("Tous")}
                onChange={() => handleCategoryChange("Tous")}
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
  );
};

export default Filter;
