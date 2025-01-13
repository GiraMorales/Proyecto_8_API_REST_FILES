# Proyecto_8

API-REST-AUTH-FILE
Esta es una API REST AUTH creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar proyectos.
Hay que resgristrarse, si eres admin puedes buscar usuarios, borrar usuarios propietarios y proyectos, actualizar proyectos, crear propietarios y actualizar propietarios.
Si eres user solo buscar propietarios y proyectos, registrarte y loguearte.
Y el Autorizado puesde crear los proyectos.

La contraseña tanto de los usuarios se encrypta.

Las key de la base de datos de cloudinary como la de mondongo y el token donde guarda las contraseñas por 30 dias se guarda en el archivo .env.

Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Proyecto_8.

## Endpoints

### Users

POST /api/v1/users/register: Registro de un nuevo usuario.
POST /api/v1/users/login: Inicio de sesión de un usuario.

### Projects

GET /api/v1/projects: Obtiene todos los proyectos.
POST /api/v1/projects: Crea un nuevo proyecto.
PUT /api/v1/projects/:id: Actualiza un proyecto existente.
DELETE /api/v1/projects/:id: Elimina un proyecto y su archivo asociado en Cloudinary.

### Owners

GET /api/v1/owners: Obtiene todos los propietarios.
POST /api/v1/owners: Crea un nuevo propietario.
PUT /api/v1/owners/:id: Actualiza un propietario existente.
DELETE /api/v1/owners/:id: Elimina un propietario y su archivo asociado en Cloudinary.

## Funcionalidades

Subida de archivos a Cloudinary: Los modelos de Projects y Owners permiten almacenar archivos multimedia en Cloudinary.
Eliminación de archivos: Cuando se elimina un documento de la base de datos, también se elimina el archivo correspondiente en Cloudinary.
Relación entre colecciones: Los proyectos están relacionados con los propietarios.
Seguridad: Implementación de autenticación con JWT.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB(Atlas)
- Mongoose
- INMSOMIA
- Visual Studio Code
- Cloudinary

## Instalación

### Se clona este repositorio

- https://github.com/GiraMorales/Proyecto_8_API_REST_FILES.git

### Se instala las dependencias

- "bcrypt"
- "cloudinary"
- "cors"
- "dotenv"
- "express"
- "jsonwebtoken"
- "mongodb"
- "mongoose"
- "multer"
- "multer-storage-cloudinary"
