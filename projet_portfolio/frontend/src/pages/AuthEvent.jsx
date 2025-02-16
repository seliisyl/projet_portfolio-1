import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const AuthEvent = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Connexion à un événement</h2>
        <p>Entrez votre identifiant et votre mot de passe pour accéder à l'événement.</p>
        <form>
          <label>Email :</label>
          <input type="email" placeholder="Votre email" />
          <label>Mot de passe :</label>
          <input type="password" placeholder="Votre mot de passe" />
          <button type="submit">Se connecter</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AuthEvent;