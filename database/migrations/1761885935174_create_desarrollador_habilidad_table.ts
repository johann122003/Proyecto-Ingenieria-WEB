import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'desarrollador_habilidad'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('desarrollador_id')
        .unsigned()
        .references('id')
        .inTable('desarrolladores')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('habilidad_id')
        .unsigned()
        .references('id')
        .inTable('habilidades')
        .onDelete('CASCADE')
        .notNullable()
      table.string('nivel', 50).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.primary(['desarrollador_id', 'habilidad_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
