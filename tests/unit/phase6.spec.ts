import { test } from '@japa/runner'
import { asignarHabilidadValidator } from '#validators/asignar_habilidad'
import { ROLES_DISPONIBLES } from '#constants/roles'

test.group('Fase 6: Validaciones de Asignación y Dropdowns', () => {
  test('asignarHabilidadValidator rechaza si falta desarrolladorId', async ({ assert }) => {
    try {
      await asignarHabilidadValidator.validate({
        habilidadId: 1,
        nivel: 'Avanzado',
      })
      assert.fail('Debió fallar sin desarrolladorId')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'desarrolladorId')
      assert.isDefined(msg)
      assert.equal(msg.message, 'Debe seleccionar un desarrollador.')
    }
  })

  test('asignarHabilidadValidator rechaza si falta habilidadId', async ({ assert }) => {
    try {
      await asignarHabilidadValidator.validate({
        desarrolladorId: 1,
        nivel: 'Avanzado',
      })
      assert.fail('Debió fallar sin habilidadId')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'habilidadId')
      assert.isDefined(msg)
      assert.equal(msg.message, 'Debe seleccionar una habilidad.')
    }
  })

  test('ROLES_DISPONIBLES contiene los roles estándar del ERP', ({ assert }) => {
    assert.include(ROLES_DISPONIBLES, 'Desarrollador React')
    assert.include(ROLES_DISPONIBLES, 'Backend Node.js')
    assert.include(ROLES_DISPONIBLES, 'Fullstack')
  })
})
