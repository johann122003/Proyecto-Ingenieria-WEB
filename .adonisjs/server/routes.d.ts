import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.mostrar_login': { paramsTuple?: []; params?: {} }
    'auth.iniciar_sesion': { paramsTuple?: []; params?: {} }
    'auth.mostrar_registro': { paramsTuple?: []; params?: {} }
    'auth.registrar': { paramsTuple?: []; params?: {} }
    'auth.cerrar_sesion': { paramsTuple?: []; params?: {} }
    'profesionals.index': { paramsTuple?: []; params?: {} }
    'profesionals.store': { paramsTuple?: []; params?: {} }
    'profesionals.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profesionals.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'auth.mostrar_login': { paramsTuple?: []; params?: {} }
    'auth.mostrar_registro': { paramsTuple?: []; params?: {} }
    'profesionals.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'auth.mostrar_login': { paramsTuple?: []; params?: {} }
    'auth.mostrar_registro': { paramsTuple?: []; params?: {} }
    'profesionals.index': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'auth.iniciar_sesion': { paramsTuple?: []; params?: {} }
    'auth.registrar': { paramsTuple?: []; params?: {} }
    'auth.cerrar_sesion': { paramsTuple?: []; params?: {} }
    'profesionals.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'profesionals.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'profesionals.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}