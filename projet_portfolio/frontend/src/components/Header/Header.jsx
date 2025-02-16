import React from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
  const location = useLocation();

  // Affiche le tittre seulement sur la page d'acceuil
  const shouldDisplayTitle = location.pathname === '/';

  return (
    <header className="header">
      {shouldDisplayTitle && <h1>Bienvenue sur notre plateforme interactive d'événements</h1>}
      <nav className="navbar">
        {/* Menu Hamburger */}
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {/* Menu Navigation */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">Événements</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Galerie</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Prestations</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
