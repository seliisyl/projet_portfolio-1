import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import axios from 'axios';


function App() {
const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
const [message, setMessage] = useState('');

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
