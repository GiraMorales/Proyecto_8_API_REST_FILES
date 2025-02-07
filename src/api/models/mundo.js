const mongoose = require('mongoose');

const MundoSchema = new mongoose.Schema(
  {
    imagen: { type: String, required: true },
    namemundo: { type: String, required: true },
    namepantalla: {
      type: mongoose.Types.ObjectId,
      ref: 'pantallas'
    },
    verified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: 'Mundos'
  }
);

const Mundo = mongoose.model('Mundos', MundoSchema, 'Mundos');
module.exports = Mundo;
