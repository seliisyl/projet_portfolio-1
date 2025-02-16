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
        </ul>
      </nav>
    </header>
  );
};

export default Header;