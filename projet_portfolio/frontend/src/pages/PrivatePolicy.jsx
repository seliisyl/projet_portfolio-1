import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const PrivatePolicy = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Politique de Confidentialité</h2>
        <p>Nous nous engageons à protéger vos données personnelles.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivatePolicy;