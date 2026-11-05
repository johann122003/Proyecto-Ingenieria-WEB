import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const requerimientoValidator = vine.compile(
  vine.object({
    proyectoId: vine.number().positive().exists({ table: 'proyectos', column: 'id' }),
    rolRequerido: vine.string().trim().minLength(2).maxLength(100),
    horasEstimadas: vine.number().withoutDecimals().positive(),
  })
)

requerimientoValidator.messagesProvider = new SimpleMessagesProvider({
  'proyectoId.required': 'Debe seleccionar un proyecto.',
  'proyectoId.exists': 'El proyecto seleccionado no existe en el sistema.',
  'rolRequerido.required': 'El rol requerido es obligatorio.',
  'horasEstimadas.required': 'Las horas estimadas son obligatorias.',
  'horasEstimadas.positive': 'Las horas estimadas deben ser un número entero mayor a 0.',
  'horasEstimadas.withoutDecimals': 'Las horas estimadas deben ser un número entero sin decimales.',
})
