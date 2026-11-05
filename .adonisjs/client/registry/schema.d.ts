/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'session.create': {
    methods: ["GET","HEAD"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['mostrarLogin']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['mostrarLogin']>>>
    }
  }
  'session.store': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['iniciarSesion']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['iniciarSesion']>>>
    }
  }
  'signup.create': {
    methods: ["GET","HEAD"]
    pattern: '/registro'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['mostrarRegistro']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['mostrarRegistro']>>>
    }
  }
  'signup.store': {
    methods: ["POST"]
    pattern: '/registro'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['registrar']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['registrar']>>>
    }
  }
  'session.destroy': {
    methods: ["POST"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['cerrarSesion']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['cerrarSesion']>>>
    }
  }
  'dashboard': {
    methods: ["GET","HEAD"]
    pattern: '/dashboard'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/admin_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/admin_controller').default['index']>>>
    }
  }
  'admin.desarrolladores.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin/desarrolladores'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['index']>>>
    }
  }
  'admin.desarrolladores.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/desarrolladores/crear'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['create']>>>
    }
  }
  'admin.desarrolladores.store': {
    methods: ["POST"]
    pattern: '/admin/desarrolladores'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/desarrollador').desarrolladorValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/desarrollador').desarrolladorValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.desarrolladores.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/desarrolladores/:id/editar'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['edit']>>>
    }
  }
  'admin.desarrolladores.update': {
    methods: ["PUT"]
    pattern: '/admin/desarrolladores/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/desarrollador').desarrolladorValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/desarrollador').desarrolladorValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.desarrolladores.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/desarrolladores/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/desarrolladores_controller').default['destroy']>>>
    }
  }
  'admin.habilidades.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin/habilidades'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['index']>>>
    }
  }
  'admin.habilidades.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/habilidades/crear'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['create']>>>
    }
  }
  'admin.habilidades.store': {
    methods: ["POST"]
    pattern: '/admin/habilidades'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/habilidad').createHabilidadValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/habilidad').createHabilidadValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.habilidades.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/habilidades/:id/editar'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['edit']>>>
    }
  }
  'admin.habilidades.update': {
    methods: ["PUT"]
    pattern: '/admin/habilidades/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['update']>>>
    }
  }
  'admin.habilidades.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/habilidades/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/habilidades_controller').default['destroy']>>>
    }
  }
  'admin.proyectos.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin/proyectos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['index']>>>
    }
  }
  'admin.proyectos.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/proyectos/crear'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['create']>>>
    }
  }
  'admin.proyectos.store': {
    methods: ["POST"]
    pattern: '/admin/proyectos'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/proyecto').proyectoValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/proyecto').proyectoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.proyectos.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/proyectos/:id/editar'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['edit']>>>
    }
  }
  'admin.proyectos.update': {
    methods: ["PUT"]
    pattern: '/admin/proyectos/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/proyecto').proyectoValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/proyecto').proyectoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.proyectos.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/proyectos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/proyectos_controller').default['destroy']>>>
    }
  }
  'admin.requerimientos.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin/requerimientos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['index']>>>
    }
  }
  'admin.requerimientos.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/requerimientos/crear'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['create']>>>
    }
  }
  'admin.requerimientos.store': {
    methods: ["POST"]
    pattern: '/admin/requerimientos'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/requerimiento').requerimientoValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/requerimiento').requerimientoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.requerimientos.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/requerimientos/:id/editar'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['edit']>>>
    }
  }
  'admin.requerimientos.update': {
    methods: ["PUT"]
    pattern: '/admin/requerimientos/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/requerimiento').requerimientoValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/requerimiento').requerimientoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.requerimientos.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/requerimientos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/requerimientos_controller').default['destroy']>>>
    }
  }
}
