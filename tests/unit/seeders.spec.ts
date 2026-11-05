import { test } from '@japa/runner'
import Habilidad from '#models/habilidad'
import Desarrollador from '#models/desarrollador'
import Proyecto from '#models/proyecto'
import { ROLES_DISPONIBLES } from '#constants/roles'

test.group('Fase 7: Verificación de Datos Sembrados (Seeders)', () => {
  test('las habilidades se crearon correctamente', async ({ assert }) => {
    const habilidades = await Habilidad.query().orderBy('nombre', 'asc')
    assert.isAtLeast(habilidades.length, 8)
    const nombres = habilidades.map((h) => h.nombre)
    assert.include(nombres, 'React')
    assert.include(nombres, 'Node.js')
    assert.include(nombres, 'PostgreSQL')
    assert.include(nombres, 'Docker')
  })

  test('los desarrolladores sembrados tienen roles válidos y costos coherentes', async ({ assert }) => {
    const nombresSeeder = [
      'Ana Gómez',
      'Mateo Fernández',
      'Carlos Rodríguez',
      'Sofía Herrera',
      'David Morales',
      'Valeria Castro',
    ]
    const desarrolladores = await Desarrollador.query()
      .whereIn('nombre', nombresSeeder)
      .preload('habilidades')
    assert.equal(desarrolladores.length, 6)

    for (const dev of desarrolladores) {
      assert.isTrue(ROLES_DISPONIBLES.includes(dev.rolPrincipal as any))
      assert.isTrue(Number(dev.costoHoraNormal) > 0)
      assert.isTrue(Number(dev.costoHoraExtra) >= Number(dev.costoHoraNormal))
      assert.isTrue(Number(dev.horasContrato) > 0)
      assert.isAtLeast(dev.habilidades.length, 1)
      for (const h of dev.habilidades) {
        assert.isDefined(h.$extras.pivot_nivel)
      }
    }
  })

  test('los proyectos y requerimientos incluyen Plataforma E-commerce', async ({ assert }) => {
    const ecommerce = await Proyecto.query()
      .where('nombre', 'Plataforma E-commerce')
      .preload('requerimientos')
      .first()

    assert.isNotNull(ecommerce)
    assert.equal(Number(ecommerce!.presupuesto), 20000)
    assert.isAtLeast(ecommerce!.requerimientos.length, 2)

    const rolesReq = ecommerce!.requerimientos.map((r) => r.rolRequerido)
    assert.include(rolesReq, 'Desarrollador React')
    assert.include(rolesReq, 'Backend Node.js')

    const reqReact = ecommerce!.requerimientos.find((r) => r.rolRequerido === 'Desarrollador React')
    assert.equal(Number(reqReact!.horasEstimadas), 40)

    const reqNode = ecommerce!.requerimientos.find((r) => r.rolRequerido === 'Backend Node.js')
    assert.equal(Number(reqNode!.horasEstimadas), 20)
  })
})
