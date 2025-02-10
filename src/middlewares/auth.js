const { verifyjwt } = require('../config/jwt');
const Jugador = require('../api/models/jugador');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No estas logueado' });
    }
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const jugador = await Jugador.findById(id);

    if (!jugador) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    jugador.password = null;
    req.jugador = jugador;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'No tienes permisos', error: error.message });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const jugador = await Jugador.findById(id);
    if (!jugador) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if (jugador.rol !== 'admin') {
      return res
        .status(403)
        .json('Esta acción sólo la pueden realizar los administradores');
    }
    jugador.password = null;
    req.jugador = jugador;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: 'Error en la verificación del token o rol', error });
  }
};

module.exports = { isAuth, isAdmin };
