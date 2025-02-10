const { deleteFile } = require('../../utils/deleteFile');
const Mundo = require('../models/mundo');

//! CREATE
const postMundos = async (req, res, next) => {
  try {
    const newMundo = new Mundo(req.body);
    newMundo.verified = req.user?.rol === 'admin';
    // if (req.files && req.files.imagen) {
    //   newMundo.imagen = req.files.imagen[0].path;
    // }
    if (req.file) {
      newMundo.imagen = req.file.path;
    }

    const mundoDB = await newMundo.save();
    return res.status(201).json(mundoDB);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al crear el Mundo', error: error.message });
  }
};

//! READ
const getMundos = async (req, res, next) => {
  try {
    const allMundos = await Mundo.find().populate('namepantalla');
    return res.status(200).json(allMundos);
  } catch (error) {
    return res.status(400).json('Error al obtener Mundos', error);
  }
};
const getPantallaMundos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pantallaMundos = await Mundo.findOne({ pantalla: id }).populate(
      namepantalla
    );

    return res.status(200).json(pantallaMundos);
  } catch (error) {
    return res
      .status(400)
      .json('Error al obtener las pantallatas de los mundos', error);
  }
};

//! UPDATE
const updateMundos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldMundo = await Mundo.findById(id, {
      new: true
    });
    if (!oldMundo) {
      return res.status(404).json({ message: 'Mundo no encontrado' });
    }

    Object.assign(oldMundo, req.body);

    if (req.file) {
      // Borra la imagen anterior si existía
      if (oldMundo.imagen) {
        deleteFile(oldMundo.imagen);
      }
      oldMundo.imagen = req.file.path;
    }

    // const newMundo = new Mundo(req.body);
    // newMundo._id = id;
    // if (req.file) {
    //   newMundo.imagen = req.file.path;
    //   deleteFile(oldMundo.imagen);
    // }

    const updatedMundo = await oldMundo.save();
    return res.status(200).json(updatedMundo);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al actualizar el Mundo', error: error.message });
  }
};

//! DELETE
const deleteMundos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mundoDeleted = await Mundo.findByIdAndDelete(id);
    if (!mundoDeleted) {
      return res.status(404).json({ message: 'Mundo no encontrado' });
    }
    if (mundoDeleted.imagen) {
      deleteFile(mundoDeleted.imagen);
    }

    return res
      .status(200)
      .json({ message: 'Mundo eliminado correctamente', mundoDeleted });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al eliminar el Mundo', error: error.message });
  }
};

module.exports = {
  getMundos,
  getPantallaMundos,
  postMundos,
  updateMundos,
  deleteMundos
};
