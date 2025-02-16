import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Bienvenue sur YOULIVEVENT</h2>
        <p>Une plateforme interactive révolutionnaire pour vos événements.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;