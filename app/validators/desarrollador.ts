import vine, { SimpleMessagesProvider } from '@vinejs/vine'

/**
 * Regla personalizada: Valida que un campo numérico sea mayor o igual al valor de otro campo.
 */
const gteOther = vine.createRule((value, otherField: string, field) => {
  if (typeof value !== 'number') return
  const otherValue = field.data[otherField]
  if (typeof otherValue === 'number' && value < otherValue) {
    field.report(
      'El costo por hora extra debe ser mayor o igual al costo por hora normal.',
      'costoHoraExtra.gte',
      field
    )
  }
})

export const desarrolladorValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(2).maxLength(255),
    rolPrincipal: vine.string().trim().minLength(2).maxLength(100),
    costoHoraNormal: vine.number().positive(),
    costoHoraExtra: vine.number().positive().use(gteOther('costoHoraNormal')),
    horasContrato: vine.number().withoutDecimals().positive(),
    habilidades: vine
      .array(
        vine.object({
          habilidadId: vine.number().positive().exists({ table: 'habilidades', column: 'id' }),
          nivel: vine.string().trim().minLength(1).maxLength(50),
        })
      )
      .optional(),
  })
)

desarrolladorValidator.messagesProvider = new SimpleMessagesProvider({
  'nombre.required': 'El nombre del desarrollador es obligatorio.',
  'rolPrincipal.required': 'El rol principal es obligatorio.',
  'costoHoraNormal.required': 'El costo por hora normal es obligatorio.',
  'costoHoraNormal.positive': 'El costo por hora normal debe ser mayor a 0.',
  'costoHoraExtra.required': 'El costo por hora extra es obligatorio.',
  'costoHoraExtra.positive': 'El costo por hora extra debe ser mayor a 0.',
  'costoHoraExtra.gte': 'El costo por hora extra debe ser mayor o igual al costo por hora normal.',
  'horasContrato.required': 'Las horas de contrato son obligatorias.',
  'horasContrato.positive': 'Las horas de contrato deben ser un número entero mayor a 0.',
  'horasContrato.withoutDecimals': 'Las horas de contrato deben ser un número entero sin decimales.',
})
