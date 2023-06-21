import React from 'react';
import './Boutique.css';

function Boutique() {
    return (
        <div className="boutique">
            <div className="row">
                <div className="product">
                    <img src="product1.jpg" alt="Product 1" />
                    <h2 className="product-name">Nom du produit 1</h2>
                    <p className="product-price">€19.99</p>
                    <p className="product-note">Note:</p>
                    <button className="add-to-cart">Ajouter au panier</button>
                </div>
                <div className="product">
                    <img src="product2.jpg" alt="Product 2" />
                    <h2 className="product-name">Nom du produit 2</h2>
                    <p className="product-price">€14.99</p>
                    <p className="product-note">Note:</p>
                    <button className="add-to-cart">Ajouter au panier</button>
                </div>
                <div className="product">
                    <img src="product3.jpg" alt="Product 3" />
                    <h2 className="product-name">Nom du produit 3</h2>
                    <p className="product-price">€24.99</p>
                    <p className="product-note">Note:</p>
                    <button className="add-to-cart">Ajouter au panier</button>
                </div>
            </div>
            <div className="row">
                <!-- Repeat additional products for second row -->
            </div>
            <div className="row">
                <!-- Repeat additional products for third row -->
            </div>
        </div>
    );
}

export default Boutique;
