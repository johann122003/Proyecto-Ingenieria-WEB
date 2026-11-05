import '@adonisjs/inertia/types'

import type { VNodeProps, AllowedComponentProps, ComponentInstance } from 'vue'

type ExtractProps<T> = Omit<
  ComponentInstance<T>['$props'],
  keyof VNodeProps | keyof AllowedComponentProps
>

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'admin/desarrolladores/asignar_habilidad': ExtractProps<(typeof import('../../inertia/pages/admin/desarrolladores/asignar_habilidad.vue'))['default']>
    'admin/desarrolladores/create': ExtractProps<(typeof import('../../inertia/pages/admin/desarrolladores/create.vue'))['default']>
    'admin/desarrolladores/edit': ExtractProps<(typeof import('../../inertia/pages/admin/desarrolladores/edit.vue'))['default']>
    'admin/desarrolladores/index': ExtractProps<(typeof import('../../inertia/pages/admin/desarrolladores/index.vue'))['default']>
    'admin/habilidades/create': ExtractProps<(typeof import('../../inertia/pages/admin/habilidades/create.vue'))['default']>
    'admin/habilidades/edit': ExtractProps<(typeof import('../../inertia/pages/admin/habilidades/edit.vue'))['default']>
    'admin/habilidades/index': ExtractProps<(typeof import('../../inertia/pages/admin/habilidades/index.vue'))['default']>
    'admin/index': ExtractProps<(typeof import('../../inertia/pages/admin/index.vue'))['default']>
    'admin/proyectos/create': ExtractProps<(typeof import('../../inertia/pages/admin/proyectos/create.vue'))['default']>
    'admin/proyectos/edit': ExtractProps<(typeof import('../../inertia/pages/admin/proyectos/edit.vue'))['default']>
    'admin/proyectos/index': ExtractProps<(typeof import('../../inertia/pages/admin/proyectos/index.vue'))['default']>
    'admin/requerimientos/create': ExtractProps<(typeof import('../../inertia/pages/admin/requerimientos/create.vue'))['default']>
    'admin/requerimientos/edit': ExtractProps<(typeof import('../../inertia/pages/admin/requerimientos/edit.vue'))['default']>
    'admin/requerimientos/index': ExtractProps<(typeof import('../../inertia/pages/admin/requerimientos/index.vue'))['default']>
    'auth/login': ExtractProps<(typeof import('../../inertia/pages/auth/login.vue'))['default']>
    'auth/signup': ExtractProps<(typeof import('../../inertia/pages/auth/signup.vue'))['default']>
    'Dashboard': ExtractProps<(typeof import('../../inertia/pages/Dashboard.vue'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.vue'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.vue'))['default']>
    'Login': ExtractProps<(typeof import('../../inertia/pages/Login.vue'))['default']>
    'Registro': ExtractProps<(typeof import('../../inertia/pages/Registro.vue'))['default']>
  }
}
