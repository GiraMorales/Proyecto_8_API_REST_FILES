const OwnerRoutes = require('./owners');
const ProjectRoutes = require('./project');
const UsersRoutes = require('./users');
const mainRouter = require('express').Router();

mainRouter.use('/projects', ProjectRoutes);
mainRouter.use('/owners', OwnerRoutes);
mainRouter.use('/users', UsersRoutes);

module.exports = mainRouter;
