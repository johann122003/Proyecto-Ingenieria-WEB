import vine from '@vinejs/vine'

export const requerimientoValidator = vine.compile(
  vine.object({
    proyectoId: vine.number().positive().exists({ table: 'proyectos', column: 'id' }),
    rolRequerido: vine.string().trim().minLength(2).maxLength(100),
    horasEstimadas: vine.number().withoutDecimals().min(1),
  })
)
