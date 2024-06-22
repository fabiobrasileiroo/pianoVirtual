const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'src')));
const port = 80;

// Configura o diretório estático para servir arquivos
app.use(express.static(path.join(__dirname, '/')));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
