import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
const AdminController = () => import('#controllers/admin/admin_controller')
const DesarrolladoresController = () => import('#controllers/admin/desarrolladores_controller')
const HabilidadesController = () => import('#controllers/admin/habilidades_controller')
const ProyectosController = () => import('#controllers/admin/proyectos_controller')
const RequerimientosController = () => import('#controllers/admin/requerimientos_controller')

router.get('/', async ({ response }) => response.redirect('/dashboard'))

// Rutas públicas: Login y Registro
router.get('/login', [AuthController, 'mostrarLogin']).as('session.create').use(middleware.guest())
router.post('/login', [AuthController, 'iniciarSesion']).as('session.store')

router.get('/registro', [AuthController, 'mostrarRegistro']).as('signup.create').use(middleware.guest())
router.post('/registro', [AuthController, 'registrar']).as('signup.store')

router.post('/logout', [AuthController, 'cerrarSesion']).as('session.destroy')

// Rutas protegidas para usuarios autenticados
router
  .group(() => {
    router.get('/dashboard', async ({ inertia, auth }) => {
      const u = auth.user
      const user = u
        ? {
            id: u.id,
            fullName: u.fullName || (u as any).full_name || null,
            full_name: (u as any).full_name || u.fullName || null,
            email: u.email,
            rol: u.rol || 'user',
          }
        : null

      return inertia.render('Dashboard', { user })
    }).as('dashboard')
  })
  .use(middleware.auth())

// Panel de administración exclusivo para administradores
router
  .group(() => {
    router.get('/', [AdminController, 'index']).as('admin.index')

    // CRUD Desarrolladores
    router.get('/desarrolladores', [DesarrolladoresController, 'index']).as('admin.desarrolladores.index')
    router.get('/desarrolladores/crear', [DesarrolladoresController, 'create']).as('admin.desarrolladores.create')
    router.post('/desarrolladores', [DesarrolladoresController, 'store']).as('admin.desarrolladores.store')
    router.get('/desarrolladores/:id/editar', [DesarrolladoresController, 'edit']).as('admin.desarrolladores.edit')
    router.put('/desarrolladores/:id', [DesarrolladoresController, 'update']).as('admin.desarrolladores.update')
    router.delete('/desarrolladores/:id', [DesarrolladoresController, 'destroy']).as('admin.desarrolladores.destroy')

    // CRUD Habilidades
    router.get('/habilidades', [HabilidadesController, 'index']).as('admin.habilidades.index')
    router.get('/habilidades/crear', [HabilidadesController, 'create']).as('admin.habilidades.create')
    router.post('/habilidades', [HabilidadesController, 'store']).as('admin.habilidades.store')
    router.get('/habilidades/:id/editar', [HabilidadesController, 'edit']).as('admin.habilidades.edit')
    router.put('/habilidades/:id', [HabilidadesController, 'update']).as('admin.habilidades.update')
    router.delete('/habilidades/:id', [HabilidadesController, 'destroy']).as('admin.habilidades.destroy')

    // CRUD Proyectos
    router.get('/proyectos', [ProyectosController, 'index']).as('admin.proyectos.index')
    router.get('/proyectos/crear', [ProyectosController, 'create']).as('admin.proyectos.create')
    router.post('/proyectos', [ProyectosController, 'store']).as('admin.proyectos.store')
    router.get('/proyectos/:id/editar', [ProyectosController, 'edit']).as('admin.proyectos.edit')
    router.put('/proyectos/:id', [ProyectosController, 'update']).as('admin.proyectos.update')
    router.delete('/proyectos/:id', [ProyectosController, 'destroy']).as('admin.proyectos.destroy')

    // CRUD Requerimientos
    router.get('/requerimientos', [RequerimientosController, 'index']).as('admin.requerimientos.index')
    router.get('/requerimientos/crear', [RequerimientosController, 'create']).as('admin.requerimientos.create')
    router.post('/requerimientos', [RequerimientosController, 'store']).as('admin.requerimientos.store')
    router.get('/requerimientos/:id/editar', [RequerimientosController, 'edit']).as('admin.requerimientos.edit')
    router.put('/requerimientos/:id', [RequerimientosController, 'update']).as('admin.requerimientos.update')
    router.delete('/requerimientos/:id', [RequerimientosController, 'destroy']).as('admin.requerimientos.destroy')
  })
  .prefix('/admin')
  .use([middleware.auth(), middleware.admin()])
