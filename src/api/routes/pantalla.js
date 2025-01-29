const { isAdmin } = require('../../middlewares/auth');
const {
  postPantalla,
  getPantalla,
  updatePantalla,
  deletePantalla
} = require('../controllers/pantallas');

const PantallaRoutes = require('express').Router();

PantallaRoutes.post('/', [isAdmin], postPantalla); // Crear propietario
PantallaRoutes.get('/', getPantalla); // Obtener todos los pripietarios
PantallaRoutes.put('/:id', [isAdmin], updatePantalla); // Actualizar propietario por ID
PantallaRoutes.delete('/:id', [isAdmin], deletePantalla); // Eliminar propietario por ID

module.exports = PantallaRoutes; // Exportar rutas de usuarios
