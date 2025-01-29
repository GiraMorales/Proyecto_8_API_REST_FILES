require('dotenv').config();
const mongoose = require('mongoose');
const Jugador = require('../api/models/jugadors');

// Datos iniciales
const jugadors = [
  {
    jugadorname: 'admin',
    password: 'admin123'
  },
  {
    jugadorname: 'jugador1',
    password: 'jugador123'
  },
  {
    jugadorname: 'jugador2',
    password: 'jugador456'
  }
];

// Función para poblar la base de datos
const seedJugadores = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a la base de datos');

    // Limpiar la colección antes de insertar
    await Jugador.deleteMany({});
    console.log('Colección jugadores limpiada');

    // Insertar datos
    await Jugador.insertMany(jugadors);
    console.log('Jugadores insertados correctamente');

    // Cerrar la conexión
    mongoose.disconnect();
    console.log('Desconectado de la base de datos');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1); // Finalizar el proceso con error
  }
};

// Ejecutar la semilla
seedJugadores();
