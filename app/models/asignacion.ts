import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Proyecto from '#models/proyecto'
import Desarrollador from '#models/desarrollador'

export default class Asignacion extends BaseModel {
  public static table = 'asignaciones'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare proyectoId: number

  @column()
  declare desarrolladorId: number

  @column()
  declare horasNormales: number

  @column()
  declare horasExtras: number

  @column()
  declare costoTotal: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Proyecto)
  declare proyecto: BelongsTo<typeof Proyecto>

  @belongsTo(() => Desarrollador)
  declare desarrollador: BelongsTo<typeof Desarrollador>
}
