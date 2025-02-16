import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import ChatComponent from "../components/Chat";

const EventPage = ({ userId, token }) => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Détails de l'événement</h2>
        <p>Informations sur un événement spécifique.</p>
        <p>Date : 20 Mars 2024</p>
        <p>Lieu : Paris, France</p>
      </main>

      {/* Ajout du chat */}
      <section>
        <h3>Discussion en direct</h3>
        <ChatComponent userId={userId} token={token} />
      </section>

      <Footer />
    </div>
  );
};

export default EventPage;
