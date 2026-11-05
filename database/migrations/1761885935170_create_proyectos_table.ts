import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'proyectos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('nombre', 255).notNullable()
      table.decimal('presupuesto', 14, 2).notNullable()
      table.date('fecha_limite').notNullable()
      table.string('estado', 50).notNullable().defaultTo('Planificación')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
