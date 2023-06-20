import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
                <h1 className="title">Title 1</h1>
                <p className="text">Text 1</p>
            </div>
            <div className="column">
                <h1 className="title">Title 2</h1>
                <p className="text">Text 2</p>
            </div>
            <div className="column">
                <div className="social-media">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
