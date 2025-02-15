import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>YOULIVEVENT</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/events">Événements</Link>
        <Link to="/gallery">Galerie</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

const styles = {
    header: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px",
      textAlign: "center",
    },
  };
  
  export default Header;  