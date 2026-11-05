import vine from '@vinejs/vine'

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

export const updateHabilidadValidator = (id: number) =>
  vine.compile(
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
