import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'asignaciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('proyecto_id')
        .unsigned()
        .references('id')
        .inTable('proyectos')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('desarrollador_id')
        .unsigned()
        .references('id')
        .inTable('desarrolladores')
        .onDelete('CASCADE')
        .notNullable()
      table.decimal('horas_normales', 8, 2).notNullable().defaultTo(0)
      table.decimal('horas_extras', 8, 2).notNullable().defaultTo(0)
      table.decimal('costo_total', 14, 2).notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
