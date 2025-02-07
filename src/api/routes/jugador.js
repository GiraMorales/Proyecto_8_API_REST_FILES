const { isAuth } = require('../../middlewares/auth');
const {
  getJugadores,
  register,
  login,
  updateJugadores,
  deleteJugador
} = require('../controllers/jugador');

const JugadoresRoutes = require('express').Router();

JugadoresRoutes.post('/register', register);
JugadoresRoutes.post('/login', login);
JugadoresRoutes.get('/', [isAuth], getJugadores);
JugadoresRoutes.put('/:id', [isAuth], updateJugadores);
JugadoresRoutes.delete('/:id', [isAuth], deleteJugador);

module.exports = JugadoresRoutes;
