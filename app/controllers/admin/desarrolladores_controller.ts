import type { HttpContext } from '@adonisjs/core/http'
import Desarrollador from '#models/desarrollador'
import Habilidad from '#models/habilidad'
import { desarrolladorValidator } from '#validators/desarrollador'

export default class DesarrolladoresController {
  async index({ inertia }: HttpContext) {
    const desarrolladores = await Desarrollador.query().preload('habilidades').orderBy('id', 'desc')
    return inertia.render('admin/desarrolladores/index', { desarrolladores })
  }

  async create({ inertia }: HttpContext) {
    const habilidades = await Habilidad.query().orderBy('nombre', 'asc')
    return inertia.render('admin/desarrolladores/create', { habilidades })
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
      desarrollador,
      habilidades,
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
}
