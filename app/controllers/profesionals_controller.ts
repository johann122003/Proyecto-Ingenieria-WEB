import Profesional from '#models/profesional'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfesionalsController {
  
  // solo muestra los del usuario logueado
  async index({ inertia, auth }: HttpContext) {
    const profesionales = await Profesional.query().where('userId', auth.user!.id)
    return inertia.render('Dashboard', { profesionales })
  }

  //  guarda el registro con el ID del usuario logueado
  async store({ request, response, auth }: HttpContext) {
    const data = request.only(['especialidad', 'salario'])
    await Profesional.create({ ...data, userId: auth.user!.id })
    return response.redirect('back')
  }

  // actualiz, Verifica que el registro sea de este usuario antes de editar
  async update({ params, request, response, auth }: HttpContext) {
    const profesional = await Profesional.query()
      .where('id', params.id)
      .andWhere('userId', auth.user!.id)
      .firstOrFail()
      
    const data = request.only(['especialidad', 'salario'])
    profesional.merge(data)
    await profesional.save()
    return response.redirect('back')
  }

  // elimina y Verifica que el registro sea de este usuario antes de borrar
  async destroy({ params, response, auth }: HttpContext) {
    const profesional = await Profesional.query()
      .where('id', params.id)
      .andWhere('userId', auth.user!.id)
      .firstOrFail()
      
    await profesional.delete()
    return response.redirect('back')
  }
}