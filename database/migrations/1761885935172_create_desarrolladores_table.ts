import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'desarrolladores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('nombre', 255).notNullable()
      table.string('rol_principal', 100).notNullable()
      table.decimal('costo_hora_normal', 10, 2).notNullable()
      table.decimal('costo_hora_extra', 10, 2).notNullable()
      table.integer('horas_contrato').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
