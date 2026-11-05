import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Requerimiento from '#models/requerimiento'
import Asignacion from '#models/asignacion'

export default class Proyecto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare presupuesto: number

  @column.date()
  declare fechaLimite: DateTime

  @column()
  declare estado: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Requerimiento)
  declare requerimientos: HasMany<typeof Requerimiento>

  @hasMany(() => Asignacion)
  declare asignaciones: HasMany<typeof Asignacion>
}
