import React from "react";
import { useParams } from "react-router-dom";
import PRODUITS from "../data/products.json";
import "../styles/DetailProduct.css";

const DetailProducts = () => {
  const params = useParams();
  const productId = params.id;

  const product = PRODUITS.find((item) => item.id === parseInt(productId));

  return (
    <div>
      <div className="row">
        <img src={product.url} style={{maxWidth: '100%'}} alt=""/>
        <div>
          <h1>{product.nom}</h1>
          <strong>{product.prix}</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="button">Ajouter au panier</button>
          </div>
        </div>
      </div>
      <h2>Ingrédients</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default DetailProducts;
