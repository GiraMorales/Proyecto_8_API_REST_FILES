# Proyecto_8

API-REST-AUTH-FILE
Esta es una API REST AUTH creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar proyectos.
Hay que resgristrarse, si eres admin puedes buscar jugadores, borrar jugadores, pantallas, mundos y actualizar, crear y actualizar mundos.
Si eres jugador solo buscar Mundos y pantallas, registrarte y loguearte.
Y el Autorizado puesde crear los Mundos.

La contraseña tanto de los jugadores se encrypta.

Las key de la base de datos de cloudinary como la de mondongo y el token donde guarda las contraseñas por 30 dias se guarda en el archivo .env.

Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Proyecto_8.

## Endpoints

### Users

POST /api/v1/jugadores/register: Registro de un nuevo jugador.
POST /api/v1/jugadores/login: Inicio de sesión de un jugador.

### Mundos

GET /api/v1/mundos: Obtiene todos los Mundos.
POST /api/v1/mundos: Crea un nuevo Mundo.
PUT /api/v1/mundos/:id: Actualiza un Mundo existente.
DELETE /api/v1/mundos/:id: Elimina un Mundo y su archivo asociado en Cloudinary.

### Pantallas

GET /api/v1/pantallas: Obtiene todas las pantallas.
POST /api/v1/pantallas: Crea una nueva pantalla.
PUT /api/v1/pantallas/:id: Actualiza una pantalla existente.
DELETE /api/v1/pantallas/:id: Elimina una pantalla y su archivo asociado en Cloudinary.

## Funcionalidades

Subida de archivos a Cloudinary: Los modelos de Mundos y pantallas permiten almacenar archivos multimedia en Cloudinary.
Eliminación de archivos: Cuando se elimina un documento de la base de datos, también se elimina el archivo correspondiente en Cloudinary.
Relación entre colecciones: Las pantallas están relacionados con los Mundos.
Seguridad: Implementación de autenticación con JWT.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB(Atlas)
- Mongoose
- INMSOMIA
- Visual Studio Code
- Cloudinary
- Multer

## Instalación

### Se clona este repositorio

- https://github.com/GiraMorales/Proyecto_8_API_REST_FILES.git

### Incializar un paquete de npm

- nmp init -y

### Se instala las dependencias

`Para encryptar las contraseñas de los jugadores.`

- "bcrypt"

`Para poder interactuar con la base de datos cloudinary y guardar allí las imagenes.`

- "cloudinary"

`Para permitir que mi servidor acepte solicitudes de origines diferentes.`

- "cors"

`Para manejar variables del archivo .env donde estan los datos sensibles que no pueden ver nadie.`

- "dotenv"

`Para simplificar la creación de rutas, middlewares y servidores.`

- "express"

`Para verificar y crear tokens de autenticación y autorización.`

- "jsonwebtoken"

`Para interactuar con la base de datos mongo.`

- "mongodb"

`Para crear modelos de dots y gestionarlos`

- "mongoose"

`Para procesar imagenes y documentos subidos por el jugador.`

- "multer"

`Para subir imágenes a Cloudinary a traves de Node.js`

- "multer-storage-cloudinary"

### añadir los scripts

`Para ejecutar el fichero  index.js`

- "start": "node index.js"

`Para levantar la base de datos`

- "dev": "nodemon index.js"
