const mongoose = require('mongoose');

const PantallaSchema = new mongoose.Schema(
  {
    imagen: { type: String, required: true },
    namepantalla: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'Pantallas'
  }
);

const Pantalla = mongoose.model('Pantallas', PantallaSchema, 'Pantallas');
module.exports = Pantalla;
