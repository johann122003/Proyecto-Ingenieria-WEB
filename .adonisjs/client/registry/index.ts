/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.mostrar_login': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.mostrar_login']['types'],
  },
  'auth.iniciar_sesion': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.iniciar_sesion']['types'],
  },
  'auth.mostrar_registro': {
    methods: ["GET","HEAD"],
    pattern: '/registro',
    tokens: [{"old":"/registro","type":0,"val":"registro","end":""}],
    types: placeholder as Registry['auth.mostrar_registro']['types'],
  },
  'auth.registrar': {
    methods: ["POST"],
    pattern: '/registro',
    tokens: [{"old":"/registro","type":0,"val":"registro","end":""}],
    types: placeholder as Registry['auth.registrar']['types'],
  },
  'auth.cerrar_sesion': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.cerrar_sesion']['types'],
  },
  'profesionals.index': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [{"old":"/dashboard","type":0,"val":"dashboard","end":""}],
    types: placeholder as Registry['profesionals.index']['types'],
  },
  'profesionals.store': {
    methods: ["POST"],
    pattern: '/profesionales',
    tokens: [{"old":"/profesionales","type":0,"val":"profesionales","end":""}],
    types: placeholder as Registry['profesionals.store']['types'],
  },
  'profesionals.update': {
    methods: ["PUT"],
    pattern: '/profesionales/:id',
    tokens: [{"old":"/profesionales/:id","type":0,"val":"profesionales","end":""},{"old":"/profesionales/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['profesionals.update']['types'],
  },
  'profesionals.destroy': {
    methods: ["DELETE"],
    pattern: '/profesionales/:id',
    tokens: [{"old":"/profesionales/:id","type":0,"val":"profesionales","end":""},{"old":"/profesionales/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['profesionals.destroy']['types'],
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
