import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Proyecto from '#models/proyecto'

export default class Requerimiento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare proyectoId: number

  @column()
  declare rolRequerido: string

  @column()
  declare horasEstimadas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Proyecto)
  declare proyecto: BelongsTo<typeof Proyecto>
}
