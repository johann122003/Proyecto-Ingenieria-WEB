import type { HttpContext } from '@adonisjs/core/http'
import Habilidad from '#models/habilidad'
import { createHabilidadValidator, updateHabilidadValidator } from '#validators/habilidad'

export default class HabilidadesController {
  async index({ inertia }: HttpContext) {
    const habilidades = await Habilidad.query().orderBy('id', 'asc')
    return inertia.render('admin/habilidades/index', { habilidades })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('admin/habilidades/create', {})
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createHabilidadValidator)
    await Habilidad.create(payload)
    session.flash('success', 'Habilidad creada exitosamente.')
    return response.redirect('/admin/habilidades')
  }

  async edit({ params, inertia }: HttpContext) {
    const habilidad = await Habilidad.findOrFail(params.id)
    return inertia.render('admin/habilidades/edit', { habilidad })
  }

  async update({ params, request, response, session }: HttpContext) {
    const habilidad = await Habilidad.findOrFail(params.id)
    const validator = updateHabilidadValidator(habilidad.id)
    const payload = await request.validateUsing(validator)
    habilidad.merge(payload)
    await habilidad.save()
    session.flash('success', 'Habilidad actualizada exitosamente.')
    return response.redirect('/admin/habilidades')
  }

  async destroy({ params, response, session }: HttpContext) {
    const habilidad = await Habilidad.findOrFail(params.id)
    await habilidad.delete()
    session.flash('success', 'Habilidad eliminada exitosamente.')
    return response.redirect('/admin/habilidades')
  }
}
