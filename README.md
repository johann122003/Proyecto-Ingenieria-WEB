# Sistema de Gestión de Profesionales (CRUD + Autenticación)

Este proyecto es una aplicación web full-stack desarrollada bajo el patrón de arquitectura **MVC (Modelo-Vista-Controlador)**. Permite gestionar un registro de profesionales mediante operaciones CRUD completas, protegiendo el acceso a través de un sistema de autenticación seguro.

## 📺 Demostración en Video
https://youtu.be/WAmtypAlp3U

En el video se demuestra:
- Explicación de la arquitectura MVC (Modelos, Vistas y Controladores).
- Bloqueo de URLs protegidas para usuarios no autenticados (Middleware).
- Funcionamiento del Login y Registro.
- Operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
- Verificación de la encriptación automática de contraseñas en la base de datos.

## 🛠️ Tecnologías Utilizadas

*   **Backend:** AdonisJS v6 (Node.js framework MVC con TypeScript)
*   **Frontend:** Vue.js 3 (Composition API)
*   **Puente de Comunicación:** Inertia.js
*   **Base de Datos:** Microsoft SQL Server
*   **Seguridad:** Encriptación de contraseñas automática mediante Model Hooks (Argon2/Bcrypt).

## ⚙️ Características Principales

1.  **Arquitectura MVC:** Separación estricta de responsabilidades (Modelos para la DB, Vistas en Vue.js, Controladores para la lógica de negocio).
2.  **Rutas Protegidas:** Uso de Middlewares (`auth` y `guest`) para restringir el acceso al Dashboard únicamente a usuarios logueados.
3.  **CRUD Privado:** Cada usuario tiene su propio panel aislado. Los registros están vinculados mediante Llaves Foráneas (`user_id`).
4.  **Seguridad de Datos:** Prevención de almacenamiento de contraseñas en texto plano.

## 🚀 Instalación y Configuración Local

Sigue estos pasos para descargar y ejecutar el proyecto en un entorno local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/johann122003/Proyecto-Ingenieria-WEB.git
   cd proyecto-vue
   ```

2. **Instalar las dependencias**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno**
   Crea o renombra el archivo `.env.example` a `.env` y configura tus credenciales de SQL Server:
   ```env
   DB_CONNECTION=mssql
   DB_HOST=127.0.0.1
   DB_PORT=1433
   DB_USER=TuUsuarioSQL
   DB_PASSWORD=TuPasswordSQL
   DB_DATABASE=SistemaMVC
   ```

4. **Ejecutar las migraciones**
   Este comando construirá las tablas necesarias en SQL Server automáticamente de acuerdo a los Modelos:
   ```bash
   node ace migration:run
   ```

5. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3333`.

## 🧑‍💻 Autor
* **Johann Said Vasquez Lopez** 
* Proyecto Académico de Ingeniería Web
