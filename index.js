const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Docker + CI/CD!');
});

// On lance le serveur seulement si ce fichier est exécuté directement
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// On exporte à la fois l'app et le serveur pour les tests
module.exports = { app, server };