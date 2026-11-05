import type { HttpContext } from '@adonisjs/core/http'
import Proyecto from '#models/proyecto'
import Desarrollador from '#models/desarrollador'
import Habilidad from '#models/habilidad'
import Requerimiento from '#models/requerimiento'

export default class AdminController {
  async index({ inertia }: HttpContext) {
    const proyectosCount = await Proyecto.query().count('* as total')
    const desarrolladoresCount = await Desarrollador.query().count('* as total')
    const habilidadesCount = await Habilidad.query().count('* as total')
    const requerimientosCount = await Requerimiento.query().count('* as total')

    return inertia.render('admin/index', {
      stats: {
        proyectos: Number(proyectosCount[0].$extras.total || 0),
        desarrolladores: Number(desarrolladoresCount[0].$extras.total || 0),
        habilidades: Number(habilidadesCount[0].$extras.total || 0),
        requerimientos: Number(requerimientosCount[0].$extras.total || 0),
      },
    })
  }
}
