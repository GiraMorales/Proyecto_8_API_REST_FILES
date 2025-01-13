const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    textoSuperior: { type: String, required: false },
    textoInferior: { type: String, required: false }
  },
  {
    timestamp: true,
    Collection: 'memes'
  }
);

const Meme = mongoose.model('memes', memeSchema, 'memes');
module.exports = Meme;
