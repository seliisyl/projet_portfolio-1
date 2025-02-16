import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Events = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Événements</h2>
        <p>Découvrez les événements à venir.</p>
        <ul>
          <li>📅 DemoDay - 20 Mars</li>
          <li>🎉 Mariage de Sophie et Paul - 25 Novembre</li>
          <li>🎶 Concert Live - 5 Décembre</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Events;