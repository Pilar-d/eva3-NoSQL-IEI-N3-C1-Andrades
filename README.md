# Evaluación 03: Gestión de Biblioteca con MongoDB

Proyecto desarrollado para la unidad de **Búsqueda avanzada con MongoDB**, enfocado en la persistencia de datos relacionales entre entidades (Usuarios y Libros) utilizando Mongoose, Node.js y Express.

## 📋 Descripción del Proyecto
Aplicación web para la gestión administrativa de una biblioteca. El sistema permite el registro, consulta y eliminación de usuarios y libros. La arquitectura implementa relaciones de uno a muchos (1:N), utilizando agregaciones avanzadas (`$lookup`) para integrar información de ambas colecciones.

## 🚀 Tecnologías Utilizadas
- **Backend:** Node.js, Express.
- **Base de Datos:** MongoDB, Mongoose (ODM).
- **Seguridad:** Bcrypt (hashing de contraseñas para resguardo de datos sensibles).
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla con validación dinámica).

🛠️ Instalación y Ejecución
Para levantar el proyecto en tu entorno local, sigue estos pasos:

1. Requisitos Previos
Asegúrate de tener instalado Node.js.

Asegúrate de tener MongoDB instalado y ejecutándose localmente en el puerto 27017.

2. Pasos de Instalación
Clona este repositorio en tu equipo:

Bash
git clone <URL_DE_TU_REPOSITORIO>
cd <NOMBRE_DE_LA_CARPETA>
Instala las dependencias necesarias definidas en el proyecto:

Bash
npm install
3. Ejecución
Inicia el servidor mediante Node.js:

Bash
node server.js
El sistema confirmará la conexión: ✅ Conectado a MongoDB de forma impecable.

Abre tu navegador y accede a la interfaz en:
http://127.0.0.1:3000
