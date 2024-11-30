const express = require('express');
const app = express();
const path = require('path'); // Add this line to import the path module

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/main/templates/main/eventPage.html')); // Corrected path
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
