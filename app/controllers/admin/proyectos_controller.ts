import type { HttpContext } from '@adonisjs/core/http'
import Proyecto from '#models/proyecto'
import { proyectoValidator } from '#validators/proyecto'

export default class ProyectosController {
  async index({ inertia }: HttpContext) {
    const proyectos = await Proyecto.query().orderBy('id', 'desc')
    return inertia.render('admin/proyectos/index', { proyectos })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('admin/proyectos/create', {})
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(proyectoValidator)
    await Proyecto.create(payload)
    session.flash('success', 'Proyecto creado exitosamente.')
    return response.redirect('/admin/proyectos')
  }

  async edit({ params, inertia }: HttpContext) {
    const proyecto = await Proyecto.findOrFail(params.id)
    return inertia.render('admin/proyectos/edit', {
      proyecto: {
        ...proyecto.toJSON(),
        fechaLimite: proyecto.fechaLimite ? proyecto.fechaLimite.toFormat('yyyy-MM-dd') : '',
      },
    })
  }

  async update({ params, request, response, session }: HttpContext) {
    const proyecto = await Proyecto.findOrFail(params.id)
    const payload = await request.validateUsing(proyectoValidator)
    proyecto.merge(payload)
    await proyecto.save()
    session.flash('success', 'Proyecto actualizado exitosamente.')
    return response.redirect('/admin/proyectos')
  }

  async destroy({ params, response, session }: HttpContext) {
    const proyecto = await Proyecto.findOrFail(params.id)
    await proyecto.delete()
    session.flash('success', 'Proyecto eliminado exitosamente.')
    return response.redirect('/admin/proyectos')
  }
}
