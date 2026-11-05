import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Habilidad from '#models/habilidad'
import Asignacion from '#models/asignacion'

export default class Desarrollador extends BaseModel {
  public static table = 'desarrolladores'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare rolPrincipal: string

  @column()
  declare costoHoraNormal: number

  @column()
  declare costoHoraExtra: number

  @column()
  declare horasContrato: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @manyToMany(() => Habilidad, {
    pivotTable: 'desarrollador_habilidad',
    pivotForeignKey: 'desarrollador_id',
    pivotRelatedForeignKey: 'habilidad_id',
    pivotColumns: ['nivel'],
    pivotTimestamps: true,
  })
  declare habilidades: ManyToMany<typeof Habilidad>

  @hasMany(() => Asignacion)
  declare asignaciones: HasMany<typeof Asignacion>
}
