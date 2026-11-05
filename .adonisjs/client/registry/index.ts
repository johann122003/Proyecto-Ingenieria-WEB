/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'signup.create': {
    methods: ["GET","HEAD"],
    pattern: '/registro',
    tokens: [{"old":"/registro","type":0,"val":"registro","end":""}],
    types: placeholder as Registry['signup.create']['types'],
  },
  'signup.store': {
    methods: ["POST"],
    pattern: '/registro',
    tokens: [{"old":"/registro","type":0,"val":"registro","end":""}],
    types: placeholder as Registry['signup.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [{"old":"/dashboard","type":0,"val":"dashboard","end":""}],
    types: placeholder as Registry['dashboard']['types'],
  },
  'admin.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin',
    tokens: [{"old":"/admin","type":0,"val":"admin","end":""}],
    types: placeholder as Registry['admin.index']['types'],
  },
  'admin.api.desarrolladores_por_rol': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/desarrolladores-por-rol',
    tokens: [{"old":"/admin/api/desarrolladores-por-rol","type":0,"val":"admin","end":""},{"old":"/admin/api/desarrolladores-por-rol","type":0,"val":"api","end":""},{"old":"/admin/api/desarrolladores-por-rol","type":0,"val":"desarrolladores-por-rol","end":""}],
    types: placeholder as Registry['admin.api.desarrolladores_por_rol']['types'],
  },
  'admin.desarrolladores.asignar_habilidad': {
    methods: ["GET","HEAD"],
    pattern: '/admin/desarrolladores/asignar-habilidad',
    tokens: [{"old":"/admin/desarrolladores/asignar-habilidad","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores/asignar-habilidad","type":0,"val":"desarrolladores","end":""},{"old":"/admin/desarrolladores/asignar-habilidad","type":0,"val":"asignar-habilidad","end":""}],
    types: placeholder as Registry['admin.desarrolladores.asignar_habilidad']['types'],
  },
  'admin.desarrolladores.guardar_asignar_habilidad': {
    methods: ["POST"],
    pattern: '/admin/desarrolladores/asignar-habilidad',
    tokens: [{"old":"/admin/desarrolladores/asignar-habilidad","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores/asignar-habilidad","type":0,"val":"desarrolladores","end":""},{"old":"/admin/desarrolladores/asignar-habilidad","type":0,"val":"asignar-habilidad","end":""}],
    types: placeholder as Registry['admin.desarrolladores.guardar_asignar_habilidad']['types'],
  },
  'admin.desarrolladores.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/desarrolladores',
    tokens: [{"old":"/admin/desarrolladores","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores","type":0,"val":"desarrolladores","end":""}],
    types: placeholder as Registry['admin.desarrolladores.index']['types'],
  },
  'admin.desarrolladores.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/desarrolladores/crear',
    tokens: [{"old":"/admin/desarrolladores/crear","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores/crear","type":0,"val":"desarrolladores","end":""},{"old":"/admin/desarrolladores/crear","type":0,"val":"crear","end":""}],
    types: placeholder as Registry['admin.desarrolladores.create']['types'],
  },
  'admin.desarrolladores.store': {
    methods: ["POST"],
    pattern: '/admin/desarrolladores',
    tokens: [{"old":"/admin/desarrolladores","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores","type":0,"val":"desarrolladores","end":""}],
    types: placeholder as Registry['admin.desarrolladores.store']['types'],
  },
  'admin.desarrolladores.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/desarrolladores/:id/editar',
    tokens: [{"old":"/admin/desarrolladores/:id/editar","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores/:id/editar","type":0,"val":"desarrolladores","end":""},{"old":"/admin/desarrolladores/:id/editar","type":1,"val":"id","end":""},{"old":"/admin/desarrolladores/:id/editar","type":0,"val":"editar","end":""}],
    types: placeholder as Registry['admin.desarrolladores.edit']['types'],
  },
  'admin.desarrolladores.update': {
    methods: ["PUT"],
    pattern: '/admin/desarrolladores/:id',
    tokens: [{"old":"/admin/desarrolladores/:id","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores/:id","type":0,"val":"desarrolladores","end":""},{"old":"/admin/desarrolladores/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.desarrolladores.update']['types'],
  },
  'admin.desarrolladores.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/desarrolladores/:id',
    tokens: [{"old":"/admin/desarrolladores/:id","type":0,"val":"admin","end":""},{"old":"/admin/desarrolladores/:id","type":0,"val":"desarrolladores","end":""},{"old":"/admin/desarrolladores/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.desarrolladores.destroy']['types'],
  },
  'admin.habilidades.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/habilidades',
    tokens: [{"old":"/admin/habilidades","type":0,"val":"admin","end":""},{"old":"/admin/habilidades","type":0,"val":"habilidades","end":""}],
    types: placeholder as Registry['admin.habilidades.index']['types'],
  },
  'admin.habilidades.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/habilidades/crear',
    tokens: [{"old":"/admin/habilidades/crear","type":0,"val":"admin","end":""},{"old":"/admin/habilidades/crear","type":0,"val":"habilidades","end":""},{"old":"/admin/habilidades/crear","type":0,"val":"crear","end":""}],
    types: placeholder as Registry['admin.habilidades.create']['types'],
  },
  'admin.habilidades.store': {
    methods: ["POST"],
    pattern: '/admin/habilidades',
    tokens: [{"old":"/admin/habilidades","type":0,"val":"admin","end":""},{"old":"/admin/habilidades","type":0,"val":"habilidades","end":""}],
    types: placeholder as Registry['admin.habilidades.store']['types'],
  },
  'admin.habilidades.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/habilidades/:id/editar',
    tokens: [{"old":"/admin/habilidades/:id/editar","type":0,"val":"admin","end":""},{"old":"/admin/habilidades/:id/editar","type":0,"val":"habilidades","end":""},{"old":"/admin/habilidades/:id/editar","type":1,"val":"id","end":""},{"old":"/admin/habilidades/:id/editar","type":0,"val":"editar","end":""}],
    types: placeholder as Registry['admin.habilidades.edit']['types'],
  },
  'admin.habilidades.update': {
    methods: ["PUT"],
    pattern: '/admin/habilidades/:id',
    tokens: [{"old":"/admin/habilidades/:id","type":0,"val":"admin","end":""},{"old":"/admin/habilidades/:id","type":0,"val":"habilidades","end":""},{"old":"/admin/habilidades/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.habilidades.update']['types'],
  },
  'admin.habilidades.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/habilidades/:id',
    tokens: [{"old":"/admin/habilidades/:id","type":0,"val":"admin","end":""},{"old":"/admin/habilidades/:id","type":0,"val":"habilidades","end":""},{"old":"/admin/habilidades/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.habilidades.destroy']['types'],
  },
  'admin.proyectos.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/proyectos',
    tokens: [{"old":"/admin/proyectos","type":0,"val":"admin","end":""},{"old":"/admin/proyectos","type":0,"val":"proyectos","end":""}],
    types: placeholder as Registry['admin.proyectos.index']['types'],
  },
  'admin.proyectos.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/proyectos/crear',
    tokens: [{"old":"/admin/proyectos/crear","type":0,"val":"admin","end":""},{"old":"/admin/proyectos/crear","type":0,"val":"proyectos","end":""},{"old":"/admin/proyectos/crear","type":0,"val":"crear","end":""}],
    types: placeholder as Registry['admin.proyectos.create']['types'],
  },
  'admin.proyectos.store': {
    methods: ["POST"],
    pattern: '/admin/proyectos',
    tokens: [{"old":"/admin/proyectos","type":0,"val":"admin","end":""},{"old":"/admin/proyectos","type":0,"val":"proyectos","end":""}],
    types: placeholder as Registry['admin.proyectos.store']['types'],
  },
  'admin.proyectos.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/proyectos/:id/editar',
    tokens: [{"old":"/admin/proyectos/:id/editar","type":0,"val":"admin","end":""},{"old":"/admin/proyectos/:id/editar","type":0,"val":"proyectos","end":""},{"old":"/admin/proyectos/:id/editar","type":1,"val":"id","end":""},{"old":"/admin/proyectos/:id/editar","type":0,"val":"editar","end":""}],
    types: placeholder as Registry['admin.proyectos.edit']['types'],
  },
  'admin.proyectos.update': {
    methods: ["PUT"],
    pattern: '/admin/proyectos/:id',
    tokens: [{"old":"/admin/proyectos/:id","type":0,"val":"admin","end":""},{"old":"/admin/proyectos/:id","type":0,"val":"proyectos","end":""},{"old":"/admin/proyectos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.proyectos.update']['types'],
  },
  'admin.proyectos.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/proyectos/:id',
    tokens: [{"old":"/admin/proyectos/:id","type":0,"val":"admin","end":""},{"old":"/admin/proyectos/:id","type":0,"val":"proyectos","end":""},{"old":"/admin/proyectos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.proyectos.destroy']['types'],
  },
  'admin.requerimientos.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/requerimientos',
    tokens: [{"old":"/admin/requerimientos","type":0,"val":"admin","end":""},{"old":"/admin/requerimientos","type":0,"val":"requerimientos","end":""}],
    types: placeholder as Registry['admin.requerimientos.index']['types'],
  },
  'admin.requerimientos.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/requerimientos/crear',
    tokens: [{"old":"/admin/requerimientos/crear","type":0,"val":"admin","end":""},{"old":"/admin/requerimientos/crear","type":0,"val":"requerimientos","end":""},{"old":"/admin/requerimientos/crear","type":0,"val":"crear","end":""}],
    types: placeholder as Registry['admin.requerimientos.create']['types'],
  },
  'admin.requerimientos.store': {
    methods: ["POST"],
    pattern: '/admin/requerimientos',
    tokens: [{"old":"/admin/requerimientos","type":0,"val":"admin","end":""},{"old":"/admin/requerimientos","type":0,"val":"requerimientos","end":""}],
    types: placeholder as Registry['admin.requerimientos.store']['types'],
  },
  'admin.requerimientos.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/requerimientos/:id/editar',
    tokens: [{"old":"/admin/requerimientos/:id/editar","type":0,"val":"admin","end":""},{"old":"/admin/requerimientos/:id/editar","type":0,"val":"requerimientos","end":""},{"old":"/admin/requerimientos/:id/editar","type":1,"val":"id","end":""},{"old":"/admin/requerimientos/:id/editar","type":0,"val":"editar","end":""}],
    types: placeholder as Registry['admin.requerimientos.edit']['types'],
  },
  'admin.requerimientos.update': {
    methods: ["PUT"],
    pattern: '/admin/requerimientos/:id',
    tokens: [{"old":"/admin/requerimientos/:id","type":0,"val":"admin","end":""},{"old":"/admin/requerimientos/:id","type":0,"val":"requerimientos","end":""},{"old":"/admin/requerimientos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.requerimientos.update']['types'],
  },
  'admin.requerimientos.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/requerimientos/:id',
    tokens: [{"old":"/admin/requerimientos/:id","type":0,"val":"admin","end":""},{"old":"/admin/requerimientos/:id","type":0,"val":"requerimientos","end":""},{"old":"/admin/requerimientos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.requerimientos.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
