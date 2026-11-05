import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'requerimientos'

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
      table.string('rol_requerido', 100).notNullable()
      table.integer('horas_estimadas').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
