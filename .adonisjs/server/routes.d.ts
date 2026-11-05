import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'signup.create': { paramsTuple?: []; params?: {} }
    'signup.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'admin.index': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.index': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.create': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.store': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.desarrolladores.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.desarrolladores.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.index': { paramsTuple?: []; params?: {} }
    'admin.habilidades.create': { paramsTuple?: []; params?: {} }
    'admin.habilidades.store': { paramsTuple?: []; params?: {} }
    'admin.habilidades.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.index': { paramsTuple?: []; params?: {} }
    'admin.proyectos.create': { paramsTuple?: []; params?: {} }
    'admin.proyectos.store': { paramsTuple?: []; params?: {} }
    'admin.proyectos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.index': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.create': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.store': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'session.create': { paramsTuple?: []; params?: {} }
    'signup.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'admin.index': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.index': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.create': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.index': { paramsTuple?: []; params?: {} }
    'admin.habilidades.create': { paramsTuple?: []; params?: {} }
    'admin.habilidades.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.index': { paramsTuple?: []; params?: {} }
    'admin.proyectos.create': { paramsTuple?: []; params?: {} }
    'admin.proyectos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.index': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.create': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'session.create': { paramsTuple?: []; params?: {} }
    'signup.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'admin.index': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.index': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.create': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.index': { paramsTuple?: []; params?: {} }
    'admin.habilidades.create': { paramsTuple?: []; params?: {} }
    'admin.habilidades.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.index': { paramsTuple?: []; params?: {} }
    'admin.proyectos.create': { paramsTuple?: []; params?: {} }
    'admin.proyectos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.index': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.create': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'session.store': { paramsTuple?: []; params?: {} }
    'signup.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'admin.desarrolladores.store': { paramsTuple?: []; params?: {} }
    'admin.habilidades.store': { paramsTuple?: []; params?: {} }
    'admin.proyectos.store': { paramsTuple?: []; params?: {} }
    'admin.requerimientos.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'admin.desarrolladores.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'admin.desarrolladores.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.habilidades.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.proyectos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.requerimientos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}