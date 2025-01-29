const Jugador = require('../api/models/jugadores');

const buscarJugador = async (req, res, next) => {
  try {
    const jugador = await Jugador.findOne({
      jugadorName: req.body.jugadorName
    }); //busca el usuario por el nombre
    if (jugador);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { buscarJugador };
