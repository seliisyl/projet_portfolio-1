const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app); // Création du serveur HTTP
const io = socketIo(server); // Ajout de Socket.IO au serveur HTTP

app.use(cors({
  origin: 'http://127.0.0.1:8000',
  methods: ['GET', 'POST'],
}));

const PORT = 3000;


// Route pour la page d'événement
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/main/templates/main/eventPage.html'));
});

// Gérer les connexions Socket.IO
io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');

  // Gérer les messages de chat
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Envoyer le message a tous les clients connectés
  });

  // Gérer la déconnexion
  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

// Démarrer le serveur
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
