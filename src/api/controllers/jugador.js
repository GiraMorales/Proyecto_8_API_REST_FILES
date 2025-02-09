const { generateSing } = require('../../config/jwt');
const Jugador = require('../models/jugador');
const bcrypt = require('bcrypt');

//! CREATE
const register = async (req, res, next) => {
  try {
    const newJugador = new Jugador({
      jugadorName: req.body.jugadorName,
      password: req.body.password
    });

    const jugadorDuplicate = await Jugador.findOne({
      jugadorName: req.body.jugadorName
    });
    if (jugadorDuplicate) {
      return res
        .status(400)
        .json({ message: 'Ese nombre de jugador ya existe' });
    }

    const jugadorSaved = await newJugador.save();
    return res
      .status(201)
      .json({ message: 'Enhorabuena, jugador resgistrado', jugadorSaved });
  } catch (error) {
    return res.status(400).json({ message: 'Nose ha podido guardar', error });
  }
};

const login = async (req, res, next) => {
  try {
    const jugador = await Jugador.findOne({
      jugadorName: req.body.jugadorName
    });

    if (jugador) {
      if (bcrypt.compareSync(req.body.password, jugador.password)) {
        //! aqui va la logica del login
        const token = generateSing(jugador._id);
        return res
          .status(200)
          .json({ message: 'Bienvenido al juego', jugador, token });
      } else {
        return res.status(404).json('Jugador o contraseña son incorrectos');
      }
    } else {
      return res.status(404).json('Jugador o contraseña son incorrectos');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

//! READ
const getJugadores = async (req, res, next) => {
  try {
    const jugadores = await Jugador.find();
    return res.status(200).json(jugadores);
  } catch (error) {
    return res.status(400).json(error);
  }
};

//! UPDATE
const updateJugadores = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldJugador = await Jugador.findById(id);
    const newJugador = new Jugador(req.body);
    newJugador._id = id;
    if (req.file) {
      newJugador.imagen = req.file.path;
      deleteFile(oldJugador.imagen);
    }

    const updateJugadores = await Jugador.findByIdAndUpdate(id, newJugador, {
      new: true
    });
    return res.status(200).json(updateJugadores);
  } catch (error) {
    return res.status(400).json('Error al actualizar la Jugador');
  }
};

//! DELETE
const deleteJugador = async (req, res, next) => {
  try {
    const { id } = req.params;
    const jugadorDeleted = await Jugador.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ mensaj: 'Jugador eliminado', jugadorDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getJugadores,
  register,
  login,
  updateJugadores,
  deleteJugador
};
