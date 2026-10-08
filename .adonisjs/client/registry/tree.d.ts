/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    mostrarLogin: typeof routes['auth.mostrar_login']
    iniciarSesion: typeof routes['auth.iniciar_sesion']
    mostrarRegistro: typeof routes['auth.mostrar_registro']
    registrar: typeof routes['auth.registrar']
    cerrarSesion: typeof routes['auth.cerrar_sesion']
  }
  profesionals: {
    index: typeof routes['profesionals.index']
    store: typeof routes['profesionals.store']
    update: typeof routes['profesionals.update']
    destroy: typeof routes['profesionals.destroy']
  }
}
