import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const asignarHabilidadValidator = vine.compile(
  vine.object({
    desarrolladorId: vine.number().positive().exists({ table: 'desarrolladores', column: 'id' }),
    habilidadId: vine.number().positive().exists({ table: 'habilidades', column: 'id' }),
    nivel: vine.string().trim().minLength(1).maxLength(50),
  })
)

asignarHabilidadValidator.messagesProvider = new SimpleMessagesProvider({
  'desarrolladorId.required': 'Debe seleccionar un desarrollador.',
  'desarrolladorId.exists': 'El desarrollador seleccionado no existe en el sistema.',
  'habilidadId.required': 'Debe seleccionar una habilidad.',
  'habilidadId.exists': 'La habilidad seleccionada no existe en el sistema.',
  'nivel.required': 'Debe seleccionar un nivel de dominio.',
})
