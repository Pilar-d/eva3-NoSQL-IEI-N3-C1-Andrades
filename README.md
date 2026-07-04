# Evaluación 03: Gestión de Biblioteca con MongoDB

Proyecto desarrollado para la unidad de **Búsqueda avanzada con MongoDB**, enfocado en la persistencia de datos relacionales (1:N) utilizando Mongoose, Node.js y Express.

## 📋 Descripción del Proyecto
Aplicación web diseñada para la gestión administrativa de una biblioteca. El sistema permite registrar, consultar y eliminar usuarios y libros. La arquitectura implementa relaciones de uno a muchos (1:N), utilizando agregaciones avanzadas mediante `$lookup` para integrar información de ambas colecciones.

## 🚀 Tecnologías Utilizadas
- **Backend:** Node.js, Express.
- **Base de Datos:** MongoDB, Mongoose (ODM).
- **Seguridad:** Bcrypt (hashing de contraseñas).
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla con validación en tiempo real).

## 🛠️ Instalación y Ejecución

### 1. Requisitos Previos
* **Node.js:** Asegúrate de tener instalada una versión LTS.
* **MongoDB:** Debe estar instalado y activo.
    * **Verificación:** El servicio debe estar escuchando en `mongodb://127.0.0.1:27017/`.
    * **Iniciar servicio (macOS):** `brew services start mongodb-community`
    * **Iniciar servicio (Windows):** Iniciar el servicio `MongoDB` desde el Administrador de Servicios.

### 2. Pasos de Instalación
Clona el repositorio y prepara el entorno:

```bash
# 1. Clonar el repositorio
git clone <URL_DE_TU_REPOSITORIO>
cd <NOMBRE_DE_TU_CARPETA>

# 2. Instalar dependencias necesarias
npm install

# 3. Ejecución
Asegúrate de que el servicio de MongoDB esté activo.

Inicia el servidor:

Bash
node server.js
El sistema confirmará la conexión: ✅ Conectado a MongoDB de forma impecable.

# 4. Acceso a la Interfaz
Abre tu navegador y dirígete a:
http://127.0.0.1:3000

📂 Estructura del Proyecto
├── models/
│   ├── Usuario.js      # Esquema de Usuario (validaciones, bcrypt)
│   └── Libro.js        # Esquema de Libro (relación 1:N con Usuario)
├── public/
│   └── index.html      # Interfaz con validación visual dinámica
├── server.js           # API REST, rutas y lógica de agregación $lookup
├── .gitignore          # Archivos excluidos (node_modules)
└── README.md           # Documentación técnica

```

