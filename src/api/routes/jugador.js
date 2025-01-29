const { isAdmin } = require('../../middlewares/auth');
const {
  register,
  deleteJugador,
  login,
  getJugadores
} = require('../controllers/jugadores');

const JugadoresRoutes = require('express').Router();

JugadoresRoutes.get('/', [isAdmin], getJugadores);
JugadoresRoutes.post('/register', register);
JugadoresRoutes.post('/login', login);
JugadoresRoutes.delete('/:id', [isAdmin], deleteJugador);

module.exports = JugadoresRoutes;
