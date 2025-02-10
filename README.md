# Proyecto_8

API-REST-AUTH-FILE
Esta es una API REST AUTH creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar proyectos.
Crear un usuario y hacerlo administrador desde la base de datos para poder gestionar la parte de pantallas y mundos que no pueden gestionar los usuarios por seguridad, como crear mundos y pantallas, actualizarlos o borrarlos.
Puedes crear un usuario siempre y cuando ese nombre de usuario no este cogido por otro usuario.
Solo puedes buscar otros usuarios si estar logueado.
Si estas logueado puedes borrar y actualizar tu usuario y buscar todas las pantallas y mundos que hay.
La contraseña de los jugadores se encrypta tanto al crear como al actualizar.
Las key de la base de datos de cloudinary como la de mondongo y el token donde guarda las contraseñas por 30 dias se guarda en el archivo .env.
Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Proyecto_8.

## Endpoints

### Users

POST /api/v1/jugadores/register: Registro de un nuevo jugador.
POST /api/v1/jugadores/login: Inicio de sesión de un jugador.
GET /api/v1/jugadores/: Buscar todos los jugadores
PUT /api/v1/jugadores/:\_id: Actualizar tu perfil de jugador.
DEL /api/v1/jugadores/:\_id: Borrar tu perfil de jugador.

### Mundos

GET /api/v1/mundos: Un jugador puede obtener todos los Mundos.
POST /api/v1/mundos: Un administrador puede crear un nuevo Mundo.
PUT /api/v1/mundos/:id: Un administrador puede actualizar un Mundo existente.
DELETE /api/v1/mundos/:id: Un administrador puede eliminar un Mundo y su archivo asociado en Cloudinary.

### Pantallas

GET /api/v1/pantallas: Obtiene todas las pantallas.
POST /api/v1/pantallas: Un administrador puede crear una nueva pantalla.
PUT /api/v1/pantallas/:id: Un administrador puede actualizar una pantalla existente.
DELETE /api/v1/pantallas/:id: Un administrador puede eliminar una pantalla y su archivo asociado en Cloudinary.

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
