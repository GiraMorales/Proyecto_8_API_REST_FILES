const { deleteFile } = require('../../utils/deleteFile');
const Project = require('../models/project');

//! CREATE
const postProjects = async (req, res, next) => {
  try {
    const newProyect = new Project(req.body);

    if (req.file) {
      newProyect.imagen = req.file.path;
    }
    if (req.user.rol === 'admin') {
      newProyect.verified = true;
    } else {
      newProyect.verified = false;
    }

    const projectSaved = await newProyect.save();
    return res.status(201).json(projectSaved);
  } catch (error) {
    return res.status(400).json('Error al crear el proyecto');
  }
};

//! READ
const getProjects = async (req, res, next) => {
  try {
    const allProjects = await Project.find().populate('username');
    return res.status(200).json(allProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener proyectos');
  }
};
const getUserProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userProjects = await Project.findById({ user: id }).populate(
      username
    );

    return res.status(200).json(userProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener proyectos');
  }
};
//! UPDATE
const updateProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldProject = await Project.findById(id);
    const newProyect = new Project(req.body);
    newProyect._id = id;
    if (req.file) {
      newProyect.imagen = req.file.path;
      deleteFile(oldProject.imagen);
    }

    const updateProjects = await Project.findByIdAndUpdate(id, newProyect, {
      new: true
    });
    return res.status(200).json(updateProjects);
  } catch (error) {
    return res.status(400).json('Error al actualizar el proyecto');
  }
};

//! DELETE
const deleteProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectDeleted = await Project.findByIdAndDelete(id);
    deleteFile(projectDeleted.imagen);
    return res.status(200).json(projectDeleted);
  } catch (error) {
    return res.status(400).json('Error al eliminar el proyecto');
  }
};

module.exports = {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  deleteProjects
};
