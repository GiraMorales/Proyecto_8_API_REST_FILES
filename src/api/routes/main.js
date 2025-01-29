const JugadoresRoutes = require('./jugador');
const MundoRoutes = require('./mundo');
const PantallaRoutes = require('./pantalla');
const mainRouter = require('express').Router();

mainRouter.use('/mundos', MundoRoutes);
mainRouter.use('/pantallas', PantallaRoutes);
mainRouter.use('/jugadores', JugadoresRoutes);

module.exports = mainRouter;
