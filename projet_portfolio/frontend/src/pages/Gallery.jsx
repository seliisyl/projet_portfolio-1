import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Galerie</h2>
        <p>Photos et vidéos des événements passés.</p>
        <div className="gallery">
          <img src="image1.jpg" alt="Événement 1" />
          <img src="image2.jpg" alt="Événement 2" />
          <video controls>
            <source src="video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;