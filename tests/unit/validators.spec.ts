import { test } from '@japa/runner'
import { desarrolladorValidator } from '#validators/desarrollador'
import { proyectoValidator } from '#validators/proyecto'
import { requerimientoValidator } from '#validators/requerimiento'

test.group('Validaciones de Fase 5', () => {
  test('desarrollador: costoHoraNormal debe ser mayor a 0', async ({ assert }) => {
    try {
      await desarrolladorValidator.validate({
        nombre: 'Carlos',
        rolPrincipal: 'Backend',
        costoHoraNormal: 0,
        costoHoraExtra: 50,
        horasContrato: 160,
      })
      assert.fail('Debió fallar con costoHoraNormal = 0')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'costoHoraNormal')
      assert.isDefined(msg)
      assert.equal(msg.message, 'El costo por hora normal debe ser mayor a 0.')
    }
  })

  test('desarrollador: costoHoraExtra debe ser mayor o igual a costoHoraNormal', async ({ assert }) => {
    try {
      await desarrolladorValidator.validate({
        nombre: 'Carlos',
        rolPrincipal: 'Backend',
        costoHoraNormal: 100,
        costoHoraExtra: 80,
        horasContrato: 160,
      })
      assert.fail('Debió fallar con costoHoraExtra < costoHoraNormal')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'costoHoraExtra')
      assert.isDefined(msg)
      assert.equal(msg.message, 'El costo por hora extra debe ser mayor o igual al costo por hora normal.')
    }
  })

  test('desarrollador: horasContrato debe ser entero mayor a 0', async ({ assert }) => {
    try {
      await desarrolladorValidator.validate({
        nombre: 'Carlos',
        rolPrincipal: 'Backend',
        costoHoraNormal: 100,
        costoHoraExtra: 120,
        horasContrato: 0,
      })
      assert.fail('Debió fallar con horasContrato = 0')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'horasContrato')
      assert.isDefined(msg)
      assert.equal(msg.message, 'Las horas de contrato deben ser un número entero mayor a 0.')
    }

    try {
      await desarrolladorValidator.validate({
        nombre: 'Carlos',
        rolPrincipal: 'Backend',
        costoHoraNormal: 100,
        costoHoraExtra: 120,
        horasContrato: 40.5,
      })
      assert.fail('Debió fallar con horasContrato decimal')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'horasContrato')
      assert.isDefined(msg)
      assert.equal(msg.message, 'Las horas de contrato deben ser un número entero sin decimales.')
    }
  })

  test('proyecto: presupuesto debe ser mayor a 0', async ({ assert }) => {
    try {
      await proyectoValidator.validate({
        nombre: 'ERP Core',
        presupuesto: 0,
        fechaLimite: '2028-01-01',
        estado: 'Planificación',
      })
      assert.fail('Debió fallar con presupuesto = 0')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'presupuesto')
      assert.isDefined(msg)
      assert.equal(msg.message, 'El presupuesto debe ser mayor a 0.')
    }
  })

  test('proyecto: fechaLimite no puede ser anterior a hoy', async ({ assert }) => {
    try {
      await proyectoValidator.validate({
        nombre: 'ERP Core',
        presupuesto: 15000,
        fechaLimite: '2020-01-01',
        estado: 'Planificación',
      })
      assert.fail('Debió fallar con fechaLimite en el pasado')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'fechaLimite')
      assert.isDefined(msg)
      assert.equal(msg.message, 'La fecha límite no puede ser anterior al día de hoy.')
    }
  })

  test('requerimiento: horasEstimadas debe ser entero mayor a 0', async ({ assert }) => {
    try {
      await requerimientoValidator.validate({
        proyectoId: 999999, // exist check
        rolRequerido: 'Arquitecto',
        horasEstimadas: 0,
      })
      assert.fail('Debió fallar con horasEstimadas = 0')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'horasEstimadas')
      assert.isDefined(msg)
      assert.equal(msg.message, 'Las horas estimadas deben ser un número entero mayor a 0.')
    }

    try {
      await requerimientoValidator.validate({
        proyectoId: 999999,
        rolRequerido: 'Arquitecto',
        horasEstimadas: 10.25,
      })
      assert.fail('Debió fallar con horasEstimadas decimal')
    } catch (error: any) {
      const msg = error.messages.find((m: any) => m.field === 'horasEstimadas')
      assert.isDefined(msg)
      assert.equal(msg.message, 'Las horas estimadas deben ser un número entero sin decimales.')
    }
  }).timeout(10000)
})
