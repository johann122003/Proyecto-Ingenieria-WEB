import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { DateTime } from 'luxon'

/**
 * Regla personalizada: Valida que la fecha no sea anterior al día de hoy.
 */
const notPastDate = vine.createRule((value, _options, field) => {
  if (!value) return
  let dt: DateTime | null = null
  if (value instanceof Date) {
    dt = DateTime.fromJSDate(value).startOf('day')
  } else if (typeof value === 'string') {
    dt = DateTime.fromISO(value).startOf('day')
  } else if ((value as any).startOf) {
    dt = (value as DateTime).startOf('day')
  }
  const today = DateTime.now().startOf('day')
  if (dt && dt < today) {
    field.report(
      'La fecha límite no puede ser anterior al día de hoy.',
      'fechaLimite.notPast',
      field
    )
  }
})

export const proyectoValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(2).maxLength(255),
    presupuesto: vine.number().positive(),
    fechaLimite: vine.date({ formats: ['YYYY-MM-DD', 'YYYY/MM/DD', 'x'] }).use(notPastDate()),
    estado: vine.string().trim().minLength(2).maxLength(50),
  })
)

proyectoValidator.messagesProvider = new SimpleMessagesProvider({
  'nombre.required': 'El nombre del proyecto es obligatorio.',
  'presupuesto.required': 'El presupuesto es obligatorio.',
  'presupuesto.positive': 'El presupuesto debe ser mayor a 0.',
  'fechaLimite.required': 'La fecha límite es obligatoria.',
  'fechaLimite.date': 'La fecha límite debe ser una fecha válida.',
  'fechaLimite.notPast': 'La fecha límite no puede ser anterior al día de hoy.',
  'estado.required': 'El estado del proyecto es obligatorio.',
})
