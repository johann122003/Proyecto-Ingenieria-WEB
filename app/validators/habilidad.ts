import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createHabilidadValidator = vine.compile(
  vine.object({
    nombre: vine
      .string()
      .trim()
      .minLength(2)
      .maxLength(100)
      .unique({ table: 'habilidades', column: 'nombre' }),
  })
)

createHabilidadValidator.messagesProvider = new SimpleMessagesProvider({
  'nombre.required': 'El nombre de la habilidad es obligatorio.',
  'nombre.minLength': 'El nombre de la habilidad debe tener al menos 2 caracteres.',
  'nombre.maxLength': 'El nombre de la habilidad no debe exceder los 100 caracteres.',
  'nombre.database.unique': 'Ya existe una habilidad registrada con este nombre.',
})

export const updateHabilidadValidator = (id: number) => {
  const validator = vine.compile(
    vine.object({
      nombre: vine
        .string()
        .trim()
        .minLength(2)
        .maxLength(100)
        .unique({
          table: 'habilidades',
          column: 'nombre',
          filter: (db) => {
            db.whereNot('id', id)
          },
        }),
    })
  )

  validator.messagesProvider = new SimpleMessagesProvider({
    'nombre.required': 'El nombre de la habilidad es obligatorio.',
    'nombre.minLength': 'El nombre de la habilidad debe tener al menos 2 caracteres.',
    'nombre.maxLength': 'El nombre de la habilidad no debe exceder los 100 caracteres.',
    'nombre.database.unique': 'Ya existe otra habilidad registrada con este nombre.',
  })

  return validator
}
