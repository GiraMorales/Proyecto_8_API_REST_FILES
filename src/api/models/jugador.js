const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const JugadorSchema = new mongoose.Schema(
  {
    jugadorName: { type: String, required: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'Jugadores'
  }
);

JugadorSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const Jugador = mongoose.model('Jugadores', JugadorSchema, 'Jugadores');
module.exports = Jugador;
