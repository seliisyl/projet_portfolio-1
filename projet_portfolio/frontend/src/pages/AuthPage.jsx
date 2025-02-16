// src/pages/AuthPage/AuthPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './src/assets/css/style.css';
import axios from 'axios';


const AuthPage = ({ isAuthenticated, handleLogin, handleLogout, user }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      // 1. Valider les credentials avec Django
      const response = await axios.post('http://127.0.0.1:8000/api/validate-event/', {
        eventId: formData.get('eventId'),
        password: formData.get('password')
      });

      // 2. Si validation OK, rediriger vers Auth0
      if (response.data.valid) {
        handleLogin();
        navigate('/');
      }
    } catch (error) {
      console.error('Erreur de validation:', error);
    }
  };

  return (
    <div className="auth-page">
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      
      <div className="container">
        {!isAuthenticated ? (
          <form id="authForm" onSubmit={handleSubmit}>
            {/* ... (gardez vos champs de formulaire) */}
          </form>
        ) : (
          <div>
            <h2>Événement validé pour {user.name}</h2>
            <button onClick={() => navigate('/')}>
              Accéder au chat
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
