import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Desarrollador from '#models/desarrollador'

export default class Habilidad extends BaseModel {
  public static table = 'habilidades'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @manyToMany(() => Desarrollador, {
    pivotTable: 'desarrollador_habilidad',
    pivotForeignKey: 'habilidad_id',
    pivotRelatedForeignKey: 'desarrollador_id',
    pivotColumns: ['nivel'],
    pivotTimestamps: true,
  })
  declare desarrolladores: ManyToMany<typeof Desarrollador>
}
