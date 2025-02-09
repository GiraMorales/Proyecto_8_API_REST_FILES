const Jugador = require('../api/models/jugador');
const { verifyjwt } = require('../config/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No estas logueado' });
    }
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const jugador = await jugadorName.findByPk(id);
    if (!Jugador) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    jugador.password = null;
    req.jugador = jugador;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'No estas logueado', error });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const jugador = await jugadorName.findByPk(id);
    if (jugador.rol !== 'admin') {
      jugador.password = null;
      req.jugador = jugador;
      next();
    } else {
      return res
        .status(400)
        .json('Esta acción sólo la pueden realizar los administradores');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { isAuth, isAdmin };
