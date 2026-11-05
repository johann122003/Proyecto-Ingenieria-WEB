import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'
import Habilidad from '#models/habilidad'
import Desarrollador from '#models/desarrollador'
import Proyecto from '#models/proyecto'
import Requerimiento from '#models/requerimiento'
import { ROLES_DISPONIBLES } from '#constants/roles'

export default class extends BaseSeeder {
  async run() {
    // 1. 8 Habilidades técnicas
    const habilidadesNombres = [
      'React',
      'Vue.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'AWS',
      'GraphQL',
    ]

    const habilidadesMap: Record<string, Habilidad> = {}
    for (const nombre of habilidadesNombres) {
      const habilidad = await Habilidad.updateOrCreate(
        { nombre },
        { nombre }
      )
      habilidadesMap[nombre] = habilidad
    }

    // 2. 6 Desarrolladores con roles exactos de ROLES_DISPONIBLES
    // Cumplen: costoHoraNormal > 0, costoHoraExtra >= costoHoraNormal, horasContrato > 0
    const desarrolladoresData = [
      {
        nombre: 'Ana Gómez',
        rolPrincipal: ROLES_DISPONIBLES[0], // 'Desarrollador React'
        costoHoraNormal: 45,
        costoHoraExtra: 65,
        horasContrato: 160,
        habilidades: [
          { nombre: 'React', nivel: 'Experto' },
          { nombre: 'TypeScript', nivel: 'Avanzado' },
          { nombre: 'Vue.js', nivel: 'Intermedio' },
        ],
      },
      {
        nombre: 'Mateo Fernández',
        rolPrincipal: ROLES_DISPONIBLES[0], // 'Desarrollador React'
        costoHoraNormal: 40,
        costoHoraExtra: 60,
        horasContrato: 160,
        habilidades: [
          { nombre: 'React', nivel: 'Avanzado' },
          { nombre: 'TypeScript', nivel: 'Intermedio' },
          { nombre: 'Node.js', nivel: 'Básico' },
        ],
      },
      {
        nombre: 'Carlos Rodríguez',
        rolPrincipal: ROLES_DISPONIBLES[1], // 'Backend Node.js'
        costoHoraNormal: 50,
        costoHoraExtra: 75,
        horasContrato: 160,
        habilidades: [
          { nombre: 'Node.js', nivel: 'Experto' },
          { nombre: 'PostgreSQL', nivel: 'Avanzado' },
          { nombre: 'Docker', nivel: 'Intermedio' },
        ],
      },
      {
        nombre: 'Sofía Herrera',
        rolPrincipal: ROLES_DISPONIBLES[1], // 'Backend Node.js'
        costoHoraNormal: 55,
        costoHoraExtra: 80,
        horasContrato: 160,
        habilidades: [
          { nombre: 'Node.js', nivel: 'Experto' },
          { nombre: 'PostgreSQL', nivel: 'Experto' },
          { nombre: 'AWS', nivel: 'Avanzado' },
        ],
      },
      {
        nombre: 'David Morales',
        rolPrincipal: ROLES_DISPONIBLES[2], // 'Fullstack'
        costoHoraNormal: 60,
        costoHoraExtra: 90,
        horasContrato: 160,
        habilidades: [
          { nombre: 'React', nivel: 'Avanzado' },
          { nombre: 'Node.js', nivel: 'Avanzado' },
          { nombre: 'TypeScript', nivel: 'Avanzado' },
          { nombre: 'Docker', nivel: 'Intermedio' },
        ],
      },
      {
        nombre: 'Valeria Castro',
        rolPrincipal: ROLES_DISPONIBLES[2], // 'Fullstack'
        costoHoraNormal: 65,
        costoHoraExtra: 95,
        horasContrato: 160,
        habilidades: [
          { nombre: 'Node.js', nivel: 'Avanzado' },
          { nombre: 'Vue.js', nivel: 'Avanzado' },
          { nombre: 'GraphQL', nivel: 'Avanzado' },
          { nombre: 'PostgreSQL', nivel: 'Intermedio' },
        ],
      },
    ]

    for (const dev of desarrolladoresData) {
      const desarrollador = await Desarrollador.updateOrCreate(
        { nombre: dev.nombre },
        {
          nombre: dev.nombre,
          rolPrincipal: dev.rolPrincipal,
          costoHoraNormal: dev.costoHoraNormal,
          costoHoraExtra: dev.costoHoraExtra,
          horasContrato: dev.horasContrato,
        }
      )

      const syncMap: Record<number, { nivel: string }> = {}
      for (const h of dev.habilidades) {
        const habObj = habilidadesMap[h.nombre]
        if (habObj) {
          syncMap[habObj.id] = { nivel: h.nivel }
        }
      }
      await desarrollador.related('habilidades').sync(syncMap)
    }

    // 3. 3 Proyectos (incluyendo Plataforma E-commerce con 20000 USD)
    // Fechas límites futuras respetando regla de no anterior a hoy
    const proyectosData = [
      {
        nombre: 'Plataforma E-commerce',
        presupuesto: 20000,
        fechaLimite: DateTime.now().plus({ months: 6 }).startOf('day'),
        estado: 'En Progreso',
        requerimientos: [
          { rolRequerido: ROLES_DISPONIBLES[0], horasEstimadas: 40 }, // 'Desarrollador React'
          { rolRequerido: ROLES_DISPONIBLES[1], horasEstimadas: 20 }, // 'Backend Node.js'
          { rolRequerido: ROLES_DISPONIBLES[5], horasEstimadas: 15 }, // 'QA Tester'
        ],
      },
      {
        nombre: 'Sistema de Gestión Hospitalaria',
        presupuesto: 35000,
        fechaLimite: DateTime.now().plus({ months: 9 }).startOf('day'),
        estado: 'Planificación',
        requerimientos: [
          { rolRequerido: ROLES_DISPONIBLES[1], horasEstimadas: 60 }, // 'Backend Node.js'
          { rolRequerido: ROLES_DISPONIBLES[2], horasEstimadas: 45 }, // 'Fullstack'
          { rolRequerido: ROLES_DISPONIBLES[7], horasEstimadas: 30 }, // 'Base de Datos'
        ],
      },
      {
        nombre: 'Aplicación Móvil Financiera',
        presupuesto: 18000,
        fechaLimite: DateTime.now().plus({ months: 4 }).startOf('day'),
        estado: 'En Progreso',
        requerimientos: [
          { rolRequerido: ROLES_DISPONIBLES[6], horasEstimadas: 50 }, // 'Mobile Developer'
          { rolRequerido: ROLES_DISPONIBLES[1], horasEstimadas: 35 }, // 'Backend Node.js'
          { rolRequerido: ROLES_DISPONIBLES[3], horasEstimadas: 20 }, // 'DevOps'
        ],
      },
    ]

    for (const p of proyectosData) {
      const proyecto = await Proyecto.updateOrCreate(
        { nombre: p.nombre },
        {
          nombre: p.nombre,
          presupuesto: p.presupuesto,
          fechaLimite: p.fechaLimite,
          estado: p.estado,
        }
      )

      for (const req of p.requerimientos) {
        await Requerimiento.updateOrCreate(
          {
            proyectoId: proyecto.id,
            rolRequerido: req.rolRequerido,
          },
          {
            proyectoId: proyecto.id,
            rolRequerido: req.rolRequerido,
            horasEstimadas: req.horasEstimadas,
          }
        )
      }
    }
  }
}
