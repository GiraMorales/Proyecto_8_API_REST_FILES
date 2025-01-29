const { generateSing } = require('../../config/jwt');
const Jugador = require('../models/jugador');
const bcrypt = require('bcrypt');

const getJugadores = async (req, res, next) => {
  try {
    const jugadores = await Jugador.find();
    return res.status(200).json(jugadores);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const register = async (req, res, next) => {
  try {
    const newJugador = new Jugador({
      jugadorName: req.body.jugadorName,
      password: req.body.password,
      rol: 'jugador'
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
    return res.status(201).json(jugadorSaved);
  } catch (error) {
    // if (error.code === 11000) {
    // return res
    // .status(400)
    //.json({ message: 'Ese nombre de usuario ya existe' });
    // }
    return res.status(400).json(error);
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
        return res.status(200).json({ jugador, token, message: 'Bienvenido' });
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

module.exports = { register, login, deleteJugador, getJugadores };
