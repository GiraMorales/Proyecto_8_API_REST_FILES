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

MundoRoutes.get('/', getMundos);
MundoRoutes.get('/:id', getPantallaMundos);
MundoRoutes.post('/', [isAuth], Upload.single('imagen'), postMundos);
MundoRoutes.put('/:id', [isAdmin], updateMundos);
MundoRoutes.delete('/:id', [isAdmin], deleteMundos);

module.exports = MundoRoutes;
