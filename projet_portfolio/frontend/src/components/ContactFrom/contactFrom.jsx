import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire à une API ou un service de messagerie
    // Exemple : axios.post('/api/contact', { name, email, message })
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Formulaire de Contact</h2>
      {submitted ? (
        <p>Merci pour votre message ! Nous vous répondrons dès que possible.</p>
      ) : (
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="contactName">Nom :</label>
          <input
            type="text"
            id="contactName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="contactEmail">Email :</label>
          <input
            type="email"
            id="contactEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="contactMessage">Message :</label>
          <textarea
            id="contactMessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
