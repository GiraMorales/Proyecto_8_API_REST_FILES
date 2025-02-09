const { isAdmin, isAuth } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const {
  postPantalla,
  getPantallas,
  updatePantalla,
  deletePantalla
} = require('../controllers/pantalla');

const PantallaRoutes = require('express').Router();

// PantallaRoutes.post('/', /*[isAdmin],*/ upload.fields('imagen'), postPantalla);
PantallaRoutes.post('/', [isAdmin], upload.single('imagen'), postPantalla);
PantallaRoutes.get('/', [isAuth], getPantallas);
PantallaRoutes.put('/:id', [isAdmin], updatePantalla);
PantallaRoutes.delete('/:id', [isAdmin], deletePantalla);

module.exports = PantallaRoutes;
