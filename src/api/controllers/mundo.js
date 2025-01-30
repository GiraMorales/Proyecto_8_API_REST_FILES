const { deleteFile } = require('../../utils/deleteFile');
const Mundo = require('../models/mundo');

//! CREATE
const postMundos = async (req, res, next) => {
  try {
    const newMundo = new Mundo(req.body);

    if (req.file) {
      newMundo.imagen = req.file.path;
    }
    if (req.user.rol === 'admin') {
      newMundo.verified = true;
    } else {
      newMundo.verified = false;
    }

    const mundoSaved = await newMundo.save();
    return res.status(201).json(mundoSaved);
  } catch (error) {
    return res.status(400).json('Error al crear el Mundo');
  }
};

//! READ
const getMundos = async (req, res, next) => {
  try {
    const allMundos = await Mundo.find().populate('pantallaname');
    return res.status(200).json(allMundos);
  } catch (error) {
    return res.status(400).json('Error al obtener Mundos');
  }
};
const getPantallaMundos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pantallaMundos = await Mundo.findById({ pantalla: id }).populate(
      pantallaname
    );

    return res.status(200).json(pantallaMundos);
  } catch (error) {
    return res.status(400).json('Error al obtener mundos');
  }
};

//! UPDATE
const updateMundos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldMundo = await Mundo.findById(id);
    const newMundo = new Mundo(req.body);
    newMundo._id = id;
    if (req.file) {
      newMundo.imagen = req.file.path;
      deleteFile(oldMundo.imagen);
    }

    const updateMundos = await Mundo.findByIdAndUpdate(id, newMundo, {
      new: true
    });
    return res.status(200).json(updateMundos);
  } catch (error) {
    return res.status(400).json('Error al actualizar la Mundo');
  }
};

//! DELETE
const deleteMundos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mundoDeleted = await Mundo.findByIdAndDelete(id);
    deleteFile(mundoDeleted.imagen);
    return res.status(200).json(mundoDeleted);
  } catch (error) {
    return res.status(400).json('Error al eliminar el Mundo');
  }
};

module.exports = {
  getMundos,
  getPantallaMundos,
  postMundos,
  updateMundos,
  deleteMundos
};
