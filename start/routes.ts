import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const AuthController = () => import('#controllers/auth_controller')
const ProfesionalsController = () => import('#controllers/profesionals_controller')

router.get('/', async ({ response }) => response.redirect('/dashboard'))

// rutas públicas Login y Registro
router.get('/login', [AuthController, 'mostrarLogin']).use(middleware.guest())
router.post('/login', [AuthController, 'iniciarSesion'])

router.get('/registro', [AuthController, 'mostrarRegistro']).use(middleware.guest())
router.post('/registro', [AuthController, 'registrar'])

router.post('/logout', [AuthController, 'cerrarSesion'])

// rutas protegidas crud
router.group(() => {
  router.get('/dashboard', [ProfesionalsController, 'index'])
  router.post('/profesionales', [ProfesionalsController, 'store']) // crear
  router.put('/profesionales/:id', [ProfesionalsController, 'update']) // actualizar
  router.delete('/profesionales/:id', [ProfesionalsController, 'destroy']) // eliminar
}).use(middleware.auth())