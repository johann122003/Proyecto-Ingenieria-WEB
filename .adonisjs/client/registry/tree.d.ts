/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  signup: {
    create: typeof routes['signup.create']
    store: typeof routes['signup.store']
  }
  dashboard: typeof routes['dashboard']
  admin: {
    index: typeof routes['admin.index']
    api: {
      desarrolladoresPorRol: typeof routes['admin.api.desarrolladores_por_rol']
    }
    desarrolladores: {
      asignarHabilidad: typeof routes['admin.desarrolladores.asignar_habilidad']
      guardarAsignarHabilidad: typeof routes['admin.desarrolladores.guardar_asignar_habilidad']
      index: typeof routes['admin.desarrolladores.index']
      create: typeof routes['admin.desarrolladores.create']
      store: typeof routes['admin.desarrolladores.store']
      edit: typeof routes['admin.desarrolladores.edit']
      update: typeof routes['admin.desarrolladores.update']
      destroy: typeof routes['admin.desarrolladores.destroy']
    }
    habilidades: {
      index: typeof routes['admin.habilidades.index']
      create: typeof routes['admin.habilidades.create']
      store: typeof routes['admin.habilidades.store']
      edit: typeof routes['admin.habilidades.edit']
      update: typeof routes['admin.habilidades.update']
      destroy: typeof routes['admin.habilidades.destroy']
    }
    proyectos: {
      index: typeof routes['admin.proyectos.index']
      create: typeof routes['admin.proyectos.create']
      store: typeof routes['admin.proyectos.store']
      edit: typeof routes['admin.proyectos.edit']
      update: typeof routes['admin.proyectos.update']
      destroy: typeof routes['admin.proyectos.destroy']
    }
    requerimientos: {
      index: typeof routes['admin.requerimientos.index']
      create: typeof routes['admin.requerimientos.create']
      store: typeof routes['admin.requerimientos.store']
      edit: typeof routes['admin.requerimientos.edit']
      update: typeof routes['admin.requerimientos.update']
      destroy: typeof routes['admin.requerimientos.destroy']
    }
  }
}
