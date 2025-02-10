const { deleteFile } = require('../../utils/deleteFile');
const Pantallas = require('../models/pantalla');

//! CREATE
const postPantalla = async (req, res, next) => {
  try {
    const newPantalla = new Pantallas(req.body);
    newPantalla.verified = req.user?.rol === 'admin';
    // if (req.files && req.files.imagen) {
    //   newPantalla.imagen = req.files.imagen[0].path;
    // }
    if (req.file) {
      newPantalla.imagen = req.file.path;
    }

    const pantallaDB = await newPantalla.save();
    return res.status(201).json(pantallaDB);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al crear pantalla', error: error.message });
  }
};

//! READ
const getPantallas = async (req, res, next) => {
  try {
    const allPantallas = await Pantallas.find();
    return res.status(200).json(allPantallas);
  } catch (error) {
    return res.status(400).json('Error al obtener pantallas');
  }
};

//! UPDATE
const updatePantalla = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPantallas = await Pantallas.findById(id, req.body, {
      new: true
    });
    if (!oldPantallas) {
      return res.status(404).json({ message: 'Pantalla no encontrada' });
    }
    Object.assign(oldPantallas, req.body);

    if (req.file) {
      if (oldPantallas.imagen) {
        deleteFile(oldPantallas.imagen);
      }
      oldPantallas.imagen = req.file.path;
    }
    const updatedPantallas = await oldPantallas.save();
    return res.status(200).json(updatedPantallas);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al actualizar pantalla', error: error.message });
  }
};

//! DELETE
const deletePantalla = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPantallas = await Pantallas.findByIdAndDelete(id);
    if (!deletedPantallas) {
      return res.status(404).json({ message: 'Pantalla no encontrada' });
    }

    if (deletedPantallas.imagen) {
      deleteFile(deletedPantallas.imagen);
    }
    return res
      .status(200)
      .json({ message: 'Pantalla eliminada correctamente', deletedPantallas });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al eliminar pantalla', error: error.message });
  }
};

module.exports = { postPantalla, getPantallas, updatePantalla, deletePantalla };
