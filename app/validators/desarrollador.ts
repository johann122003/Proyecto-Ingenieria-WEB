import vine from '@vinejs/vine'

export const desarrolladorValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(2).maxLength(255),
    rolPrincipal: vine.string().trim().minLength(2).maxLength(100),
    costoHoraNormal: vine.number().min(0),
    costoHoraExtra: vine.number().min(0),
    horasContrato: vine.number().withoutDecimals().min(0),
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
