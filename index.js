require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const PORT = 3000;
const cors = require('cors');
const mainRouter = require('./src/api/routes/main');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const app = express();

// Middleware para parsear JSON y enviar datos de inmsonia en Json a la base de datos
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
connectDB();
// Rutas
app.use('/api/v1', mainRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada 🤨');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('servidor desplegado 🚀 en http://localhost:' + PORT);
});
