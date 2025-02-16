import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Nos Services</h2>
        <p>Découvrez nos prestations pour vos événements.</p>
        <ul>
          <li>📹 Streaming en direct</li>
          <li>📸 Photographie et vidéos professionnelles</li>
          <li>💬 Chat interactif</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Services;