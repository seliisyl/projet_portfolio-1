// src/App.js
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { StreamChat } from 'stream-chat';
import 

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [chatClient, setChatClient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fonction pour récupérer le token GetStream depuis Django
  const getChatToken = async (username = null) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/get-token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du token');
      }

      const data = await response.json();
      setUserId(data.userID);
      setToken(data.token);
      return data;
    } catch (error) {
      setError('Erreur lors de la récupération du token.');
      console.error('Erreur:', error);
    }
  };

  // Fonction pour connecter l'utilisateur à GetStream
  const connectToChat = async () => {
    setLoading(true);
    setError('');

    try {
      const username = user ? user.name : null;
      const userData = await getChatToken(username || null);

      console.log("Utilisateur connecté :", userData);

      // Connexion à GetStream avec le token récupéré
      const client = StreamChat.getInstance('n3esdddgvfpz'); // API Key publique

      if (!client.user) {  // Vérifie si aucun utilisateur n'est déjà connecté
        await client.connectUser(
          {
            id: userData.userID,
            name: userData.userID.includes("guest") ? "Invité" : userData.userID,
          },
          userData.token
        );
        setChatClient(client);
        console.log("✅ Connecté à GetStream Chat !");
      }
    } catch (error) {
      setError('Erreur lors de la connexion au chat.');
      console.error('Erreur lors de la connexion à GetStream:', error);
    } finally {
      setLoading(false);
    }
  };

  // Récupérer un message sécurisé depuis Django avec Auth0
  const fetchMessage = async () => {
    setLoading(true);
    setError('');

    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get('http://127.0.0.1:8000/api/messages', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setError('Erreur lors de la récupération du message.');
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  // Effet pour gérer l'authentification et la connexion au chat
  useEffect(() => {
    if (isAuthenticated) {
      connectToChat();
      fetchMessage();
    }
  }, [isAuthenticated]);

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Se connecter</button>
        ) : (
          <div>
            <h2>Bienvenue, {user.name}</h2>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Se déconnecter
            </button>

            <h3>Message sécurisé :</h3>
            {loading ? (
              <p>Chargement...</p>
            ) : (
              <p>{message}</p>
            )}
          </div>
        )}

        {error && (
          <p style={{ color: 'red' }}>⚠️ {error}</p>
        )}
      </header>
    </div>
  );
};

export default App;
