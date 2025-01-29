const { isAdmin } = require('../../middlewares/auth');
const {
  register,
  login,
  deleteJugador,
  getJugadores
} = require('../controllers/jugador');

const JugadoresRoutes = require('express').Router();

JugadoresRoutes.get('/', [isAdmin], getJugadores);
JugadoresRoutes.post('/register', register);
JugadoresRoutes.post('/login', login);
JugadoresRoutes.delete('/:id', [isAdmin], deleteJugador);

module.exports = JugadoresRoutes;
