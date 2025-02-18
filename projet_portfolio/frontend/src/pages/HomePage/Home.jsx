import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactFrom from "../../components/ContactForm/ContactForm";


const Home = () => {
  return (
    <div>
      <Header />
      <main>
      <div className="container">
          <div className="carousel">
            <ion-icon name="chevron-back-outline" className="nav-btp" id="prevBtn"></ion-icon>
            <div className="slider" id="slider"></div>
            <ion-icon name="chevron-forward-outline" className="nav-btp" id="nextBtn"></ion-icon>
            <div className="slider_indicators" id="indicators"></div>
          </div>

          <section className="intro-section">
            <h2>Qu'est-ce que YOULIVEVENT ?</h2>
            <p>Découvrez YOULIVEVENT, une plateforme interactive révolutionnaire pour vos événements. Avec notre
              service, chaque participant peut partager en direct des vidéos et contenus qui seront projetés sur des
              écrans sur place, créant ainsi une expérience immersive et collective.</p>
            <p>Nous compilons tous ces contenus pour former une capsule temporelle numérique, préservant vos souvenirs
              de manière innovante et durable. Grâce aux vidéos en direct, chaque participant contribue à l'événement
              en temps réel, qu'il soit présent ou non.</p>
          </section>

          <section className="form-section">
            <ContactFrom />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
