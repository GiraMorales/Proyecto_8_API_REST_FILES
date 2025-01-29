const { verify } = require('jsonwebtoken');
const Pantallas = require('../models/pantalla');

//! CREATE
const postPantalla = async (req, res, next) => {
  try {
    const newPantallas = new Pantallas({
      pantallaname: req.body.pantallaname
    });
    const pantallaSaved = await newPantallas.save();
    return res.status(201).json(pantallaSaved);
  } catch (error) {
    return res.status(400).json('Error al crear pantalla');
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
    const updatedPantallas = await Pantallas.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(updatedPantallas);
  } catch (error) {
    return res.status(400).json('Error al actualizar pantalla');
  }
};

//! DELETE
const deletePantalla = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPantallas = await Pantallas.findByIdAndDelete(id);
    return res.status(200).json(deletedPantallas);
  } catch (error) {
    return res.status(400).json('Error al eliminar pantalla');
  }
};

module.exports = { postPantalla, getPantallas, updatePantalla, deletePantalla };
