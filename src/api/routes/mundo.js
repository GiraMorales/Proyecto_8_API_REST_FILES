const { isAuth, isAdmin } = require('../../middlewares/auth');
const Upload = require('../../middlewares/file');

const {
  getMundos,
  getPantallaMundos,
  postMundos,
  updateMundos,
  deleteMundos
} = require('../controllers/mundo');

const MundoRoutes = require('express').Router();

MundoRoutes.post('/', [isAdmin], Upload.single('imagen'), postMundos);
MundoRoutes.get('/', [isAuth], getMundos);
MundoRoutes.get('/:id', [isAuth], getPantallaMundos);
MundoRoutes.put('/:id', [isAdmin], updateMundos);
MundoRoutes.delete('/:id', [isAdmin], deleteMundos);

module.exports = MundoRoutes;
