import type { HttpContext } from '@adonisjs/core/http'
import Desarrollador from '#models/desarrollador'
import Habilidad from '#models/habilidad'
import { desarrolladorValidator } from '#validators/desarrollador'
import { asignarHabilidadValidator } from '#validators/asignar_habilidad'
import { ROLES_DISPONIBLES } from '#constants/roles'

export default class DesarrolladoresController {
  async index({ inertia }: HttpContext) {
    const desarrolladores = await Desarrollador.query().preload('habilidades').orderBy('id', 'desc')
    return inertia.render('admin/desarrolladores/index', {
      desarrolladores: desarrolladores.map((d) => ({
        ...d.toJSON(),
        id: d.id,
      })),
    })
  }

  async create({ inertia }: HttpContext) {
    const habilidades = await Habilidad.query().orderBy('nombre', 'asc')
    return inertia.render('admin/desarrolladores/create', {
      roles: ROLES_DISPONIBLES,
      habilidades: habilidades.map((h) => ({
        ...h.toJSON(),
        id: h.id,
      })),
    })
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(desarrolladorValidator)
    const { habilidades, ...devData } = payload

    const desarrollador = await Desarrollador.create(devData)

    if (habilidades && habilidades.length > 0) {
      const syncMap: Record<string, { nivel: string }> = {}
      for (const item of habilidades) {
        syncMap[String(item.habilidadId)] = { nivel: item.nivel }
      }
      await desarrollador.related('habilidades').sync(syncMap)
    }

    session.flash('success', 'Desarrollador creado exitosamente.')
    return response.redirect('/admin/desarrolladores')
  }

  async edit({ params, inertia }: HttpContext) {
    const desarrollador = await Desarrollador.query()
      .where('id', params.id)
      .preload('habilidades')
      .firstOrFail()
    const habilidades = await Habilidad.query().orderBy('nombre', 'asc')

    return inertia.render('admin/desarrolladores/edit', {
      roles: ROLES_DISPONIBLES,
      desarrollador: {
        ...desarrollador.toJSON(),
        id: desarrollador.id,
      },
      habilidades: habilidades.map((h) => ({
        ...h.toJSON(),
        id: h.id,
      })),
    })
  }

  async update({ params, request, response, session }: HttpContext) {
    const desarrollador = await Desarrollador.findOrFail(params.id)
    const payload = await request.validateUsing(desarrolladorValidator)
    const { habilidades, ...devData } = payload

    desarrollador.merge(devData)
    await desarrollador.save()

    const syncMap: Record<string, { nivel: string }> = {}
    if (habilidades && habilidades.length > 0) {
      for (const item of habilidades) {
        syncMap[String(item.habilidadId)] = { nivel: item.nivel }
      }
    }
    await desarrollador.related('habilidades').sync(syncMap)

    session.flash('success', 'Desarrollador actualizado exitosamente.')
    return response.redirect('/admin/desarrolladores')
  }

  async destroy({ params, response, session }: HttpContext) {
    const desarrollador = await Desarrollador.findOrFail(params.id)
    await desarrollador.delete()
    session.flash('success', 'Desarrollador eliminado exitosamente.')
    return response.redirect('/admin/desarrolladores')
  }

  /**
   * Endpoint JSON que devuelve los desarrolladores filtrados por rol principal.
   * Utilizado por el watch en Vue para el dropdown dependiente.
   */
  async porRol({ request, response }: HttpContext) {
    const rol = request.input('rol')
    if (!rol) {
      return response.json([])
    }

    const desarrolladores = await Desarrollador.query()
      .where('rolPrincipal', rol)
      .select('id', 'nombre', 'rolPrincipal')
      .orderBy('nombre', 'asc')

    return response.json(
      desarrolladores.map((d) => ({
        id: d.id,
        nombre: d.nombre,
        rolPrincipal: d.rolPrincipal,
      }))
    )
  }

  /**
   * Vista para el formulario de asignación dependiente:
   * Rol -> Desarrolladores (cargados via JSON) -> Habilidad -> Nivel
   */
  async vistaAsignarHabilidad({ inertia }: HttpContext) {
    const habilidades = await Habilidad.query().orderBy('nombre', 'asc')
    return inertia.render('admin/desarrolladores/asignar_habilidad', {
      roles: ROLES_DISPONIBLES,
      habilidades: habilidades.map((h) => ({
        id: h.id,
        nombre: h.nombre,
      })),
    })
  }

  /**
   * Procesa la asignación de habilidad a un desarrollador.
   */
  async guardarAsignarHabilidad({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(asignarHabilidadValidator)
    const desarrollador = await Desarrollador.findOrFail(payload.desarrolladorId)

    const pivoteExistente = await desarrollador
      .related('habilidades')
      .pivotQuery()
      .where('habilidad_id', payload.habilidadId)
      .first()

    if (pivoteExistente) {
      await desarrollador
        .related('habilidades')
        .pivotQuery()
        .where('habilidad_id', payload.habilidadId)
        .update({ nivel: payload.nivel })
    } else {
      await desarrollador
        .related('habilidades')
        .attach({ [payload.habilidadId]: { nivel: payload.nivel } })
    }

    session.flash('success', 'Habilidad asignada exitosamente al desarrollador.')
    return response.redirect('/admin/desarrolladores')
  }
}
