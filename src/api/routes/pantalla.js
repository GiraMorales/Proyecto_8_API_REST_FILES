const { isAdmin } = require('../../middlewares/auth');
const {
  postPantalla,
  getPantallas,
  updatePantalla,
  deletePantalla
} = require('../controllers/pantalla');

const PantallaRoutes = require('express').Router();

PantallaRoutes.post('/', [isAdmin], postPantalla);
PantallaRoutes.get('/', getPantallas);
PantallaRoutes.put('/:id', [isAdmin], updatePantalla);
PantallaRoutes.delete('/:id', [isAdmin], deletePantalla);

module.exports = PantallaRoutes;
