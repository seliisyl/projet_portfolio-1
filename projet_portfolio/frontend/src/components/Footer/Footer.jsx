import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 YOULIVE. Tous droits réservés.</p>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedIn-in"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="/private-policy">Politique de confidentialité</a>
        <a href="/terms-of-service">Conditions d'utilisation</a>
      </div>
    </footer>
  );
};

export default Footer;