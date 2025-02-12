import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import axios from 'axios';
import { StreamChat } from 'stream-chat';


function App() {
const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
const [message, setMessage] = useState('');
const [userId, setUserId] = useState('');
const [token, setToken] = useState('');

const getChatToken = async (username = null) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/get-token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();
    setUserId(data.userId);
    setToken(data.token);
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération du token:', error);
  }
};

const connectToChat = async () => {
  let username = user ? user.name : null;

  const userData = await getChatToken(username || null);
  console.log("Utilisateur connecté :", userData);

  // Connexion à GetStream avec le token récupéré
  const client = StreamChat.getInstance('n3esdddgvfpz'); // API Key publique
  await client.connectUser(
    {
      id: userData.userId,
      name: userData.userId.includes("guest") ? "Invité" : userData.userId,
    },
    userData.token
  );

  console.log("✅ Connecté à GetStream Chat !");
};

useEffect(() => {
  const fetchMessage = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get('http://localhost:8000/api/messages', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('There was an error fetching the data: ', error);
    }
  };

  if (isAuthenticated) {
    fetchMessage();
  }
}, [isAuthenticated, getAccessTokenSilently]);

return (
  <div className="App">
    <header className="App-header">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}

      {isAuthenticated && (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </div>
      )}
    </header>
  </div>
  );
}

export default App;
