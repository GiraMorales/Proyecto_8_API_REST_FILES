const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({ message: 'No estas autorizado' });
    }
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const jugador = await jugadorName.findByPk(id);
    jugador.password = null;
    req.jugador = jugador;
    next();
  } catch (error) {
    return res.status(400).json(error);
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
