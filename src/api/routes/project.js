const { isAuth, isAdmin } = require('../../middlewares/auth');
const Upload = require('../../middlewares/file');

const {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  deleteProjects
} = require('../controllers/project');

const ProjectRoutes = require('express').Router();

ProjectRoutes.get('/', getProjects);
ProjectRoutes.get('/:id', getUserProjects);
ProjectRoutes.post('/', [isAuth], Upload.single('imagen'), postProjects);
ProjectRoutes.put('/:id', [isAdmin], updateProjects);
ProjectRoutes.delete('/:id', [isAdmin], deleteProjects);

module.exports = ProjectRoutes;
