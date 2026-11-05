import vine from '@vinejs/vine'

export const proyectoValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(2).maxLength(255),
    presupuesto: vine.number().min(0),
    fechaLimite: vine.date({ formats: ['YYYY-MM-DD', 'YYYY/MM/DD', 'x'] }),
    estado: vine.string().trim().minLength(2).maxLength(50),
  })
)
