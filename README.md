# Proyecto_8

## Descripción

Esta es una API REST AUTH creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar proyectos.

Es posible crear un usuario y hacerlo administrador directamente desde la base de datos para gestionar ciertas secciones restringidas, como la creación, actualización y eliminación de mundos y pantallas. Estas acciones están limitadas a administradores por motivos de seguridad.

Cualquier persona puede crear un usuario, siempre que el nombre de usuario no esté ya en uso por otro jugador.
Solo es posible buscar otros usuarios si estás logueado.
Si estás logueado, puedes borrar y actualizar tu propio usuario, así como consultar todas las pantallas y mundos disponibles.

Las contraseñas de los jugadores se encriptan tanto al momento de crear como al actualizar el usuario.

Las claves de conexión a Cloudinary, la conexión a MongoDB, y el token secreto de autenticación (con una validez de 30 días), se almacenan en el archivo .env.

Para realizar las operaciones CRUD, utilizo la aplicación Insomnia, y toda la información se gestiona en la base de datos de MongoDB llamada Proyecto_8.

## 📚 Funcionalidades

- **Gestión de usuarios (jugadores).**
- **Gestión de mundos y pantallas.**
- **Subida de archivos multimedia a Cloudinary.**
- **Eliminación de archivos en Cloudinary al borrar registros.**
- **Relación entre colecciones (pantallas vinculadas a mundos).**
- **Autenticación segura con JWT.**
- **Encriptación de contraseñas con bcrypt.**

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express**
- **Nodemon** (reinicio automático en desarrollo)
- **MongoDB (Atlas)**
- **Mongoose**
- **Insomnia** (para pruebas de endpoints)
- **Cloudinary** (gestión de imágenes)
- **JWT** (autenticación y autorización)
- **Multer** (gestión de subida de archivos)

## 📂 Estructura de Carpetas

src
├── api
├── controllers
├── jugador.js
├── mundo.js
└── pantalla.js
├── models
├── jugador.js
├── mundo.js
└── pantalla.js
└── routes
├── jugador.js
├── main.js
├── mundo.js
└── pantalla.js
├── config
├── cloudinary.js
├── db.js
├── jwt.js
└── Storage.js
├── middlewares
├── auth.js
└── file.js
├── seeds
└── seedUsers.js
└── utils
└── deleteFile.js
.gitattributes
.gitignore
index.js
package-lock.json
package.json
README.md

## 🔗 Endpoints

### Users (Jugadores)

POST /api/v1/jugadores/register: Registro de un nuevo jugador.
POST /api/v1/jugadores/login: Inicio de sesión de un jugador.
GET /api/v1/jugadores/: Buscar todos los jugadores (requiere login).
PUT /api/v1/jugadores/:id: Actualizar perfil de jugador (solo el propio).
DEL /api/v1/jugadores/:id: Eliminar perfil de jugador (solo el propio).

### Mundos

GET /api/v1/mundos: Listar todos los mundos (cualquier jugador).
POST /api/v1/mundos: Crear un nuevo Mundo (solo administrador).
PUT /api/v1/mundos/:id: Actualizar un Mundo existente (solo administrador).
DELETE /api/v1/mundos/:id: Eliminar un Mundo y su archivo asociado en Cloudinary (solo administrador).

### Pantallas

GET /api/v1/pantallas: Listar todas las pantallas (cualquier jugador).
POST /api/v1/pantallas: Crear una nueva pantalla (solo administrador).
PUT /api/v1/pantallas/:id: Actualizar una pantalla existente (solo administrador).
DELETE /api/v1/pantallas/:id: Eliminar una pantalla y su archivo asociado en Cloudinary (solo administrador).

## 🔐 Seguridad

- **Autenticación por token JWT.**
- **Contraseñas encriptadas con bcrypt.**
- **Protección de rutas para usuarios autenticados y administradores.**

## 💻 Instalación

### Se clona este repositorio

```
git clone https://github.com/GiraMorales/Proyecto_8_API_REST_FILES.git
cd Proyecto_8_API_REST_FILES
```

### Incializar un paquete de npm

- nmp init -y

### ⚙️ Ejecutar el proyecto

- npm run start (Se inicia y se cierra en cada cambio)
- npm run dev (Se inicia y se reinicia automáticamente al detectar cambios)

### 🌐 Variables del entorno

DATABASE_URL=mongodb
PORT=3001
JWT_SECRET=tu_clave_secreta
CLOUD_NAME=CLOUD_NAME
API_KEY=API_KEY
API_SECRET=API_SECRET

🛠️ Notas
Puedes gestionar el primer usuario administrador directamente en la base de datos.
La relación entre mundos y pantallas permite estructurar la información de forma jerárquica.

📥 Contacto
Proyecto desarrollado por Gira Morales como parte de un aprendizaje continuo en desarrollo backend.
