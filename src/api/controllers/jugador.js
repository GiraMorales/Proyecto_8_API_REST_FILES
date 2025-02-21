const { generateSing } = require('../../config/jwt');
const Jugador = require('../models/jugador');
const bcrypt = require('bcrypt');
const { deleteFile } = require('../../utils/deleteFile'); // Importamos la función para eliminar archivos

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
    if (!jugador) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }

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
    return res.status(400).json({ message: 'como', error: error.message });
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
    // Verifica que el usuario autenticado es el mismo que intenta actualizar
    if (req.jugador._id.toString() !== id) {
      return res.status(403).json({
        message: 'No puedes actualizar otro perfil que no sea el tuyo'
      });
    }

    const oldJugador = await Jugador.findById(id);
    if (!oldJugador) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    const updates = req.body;

    // Verifica si la contraseña está incluida en la solicitud, y encripta si es necesario
    if (updates.password) {
      updates.password = bcrypt.hashSync(updates.password, 10);
    }
    // Actualiza el jugador con los datos nuevos
    const updateJugadores = await Jugador.findByIdAndUpdate(id, updates, {
      new: true
    });

    return res.status(200).json(updateJugadores);
  } catch (error) {
    return res.status(400).json({
      message: 'Error al actualizar la Jugador',
      error: error.message
    });
  }
};

//! DELETE
const deleteJugador = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (req.jugador._id.toString() !== id) {
      return res
        .status(403)
        .json({ message: 'No puedes eliminar otro perfil' });
    }

    const jugadorDeleted = await Jugador.findByIdAndDelete(id);
    if (!jugadorDeleted) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }

    // Eliminamos la imagen asociada si existe
    if (jugadorDeleted.imageUrl) {
      deleteFile(jugadorDeleted.imageUrl);
    }
    return res
      .status(200)
      .json({ message: 'Jugador eliminado', jugadorDeleted });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al eliminar el jugador', error: error.message });
  }
};

module.exports = {
  getJugadores,
  register,
  login,
  updateJugadores,
  deleteJugador
};
