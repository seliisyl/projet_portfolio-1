import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Bienvenue sur YOULIVEVENT</h2>
        <p>Une plateforme interactive révolutionnaire pour vos événements.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;