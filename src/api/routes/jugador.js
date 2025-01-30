const { isAdmin } = require('../../middlewares/auth');
const {
  getJugadores,
  register,
  login,
  updateJugadores,
  deleteJugador
} = require('../controllers/jugador');

const JugadoresRoutes = require('express').Router();

JugadoresRoutes.get('/', [isAdmin], getJugadores);
JugadoresRoutes.post('/register', register);
JugadoresRoutes.post('/login', login);
JugadoresRoutes.put('/:id', [isAdmin], updateJugadores);
JugadoresRoutes.delete('/:id', [isAdmin], deleteJugador);

module.exports = JugadoresRoutes;
