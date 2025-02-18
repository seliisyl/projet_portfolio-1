import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Informations de Contact</h2>
        <p>Pour toute question, veuillez nous contacter à l'adresse suivante :</p>
        <p>Email : contact@youlive.com</p>
        <p>Téléphone : +33 1 00 00 00 00</p>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
