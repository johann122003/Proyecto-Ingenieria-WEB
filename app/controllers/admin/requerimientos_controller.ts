import type { HttpContext } from '@adonisjs/core/http'
import Requerimiento from '#models/requerimiento'
import Proyecto from '#models/proyecto'
import { requerimientoValidator } from '#validators/requerimiento'

export default class RequerimientosController {
  async index({ inertia }: HttpContext) {
    const requerimientos = await Requerimiento.query().preload('proyecto').orderBy('id', 'desc')
    return inertia.render('admin/requerimientos/index', { requerimientos })
  }

  async create({ inertia }: HttpContext) {
    const proyectos = await Proyecto.query().select('id', 'nombre').orderBy('nombre', 'asc')
    return inertia.render('admin/requerimientos/create', { proyectos })
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(requerimientoValidator)
    await Requerimiento.create(payload)
    session.flash('success', 'Requerimiento creado exitosamente.')
    return response.redirect('/admin/requerimientos')
  }

  async edit({ params, inertia }: HttpContext) {
    const requerimiento = await Requerimiento.findOrFail(params.id)
    const proyectos = await Proyecto.query().select('id', 'nombre').orderBy('nombre', 'asc')
    return inertia.render('admin/requerimientos/edit', { requerimiento, proyectos })
  }

  async update({ params, request, response, session }: HttpContext) {
    const requerimiento = await Requerimiento.findOrFail(params.id)
    const payload = await request.validateUsing(requerimientoValidator)
    requerimiento.merge(payload)
    await requerimiento.save()
    session.flash('success', 'Requerimiento actualizado exitosamente.')
    return response.redirect('/admin/requerimientos')
  }

  async destroy({ params, response, session }: HttpContext) {
    const requerimiento = await Requerimiento.findOrFail(params.id)
    await requerimiento.delete()
    session.flash('success', 'Requerimiento eliminado exitosamente.')
    return response.redirect('/admin/requerimientos')
  }
}
