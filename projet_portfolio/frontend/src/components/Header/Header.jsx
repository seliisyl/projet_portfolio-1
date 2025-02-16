<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Bienvenue sur notre plateforme interactive d'événements</h1>
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
            <Link to="/evenements" className="nav-link">Événements</Link>
          </li>
          <li className="nav-item">
            <Link to="/galerie" className="nav-link">Galerie</Link>
          </li>
          <li className="nav-item">
            <Link to="/prestations" className="nav-link">Prestations</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
=======
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>YOULIVEVENT</h1>
      <nav className="navbar">
        <ul className="nav-menu">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/events">Événements</Link></li>
          <li><Link to="/gallery">Galerie</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
>>>>>>> 377b3bb78d43e7a8ff4c10ea8eff451bcf31061d
        </ul>
      </nav>
    </header>
  );
};

export default Header;