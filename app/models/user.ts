import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { column } from '@adonisjs/lucid/orm'

export default class User extends compose(UserSchema, withAuthFinder(hash)) {
  @column({ columnName: 'full_name' })
  declare fullName: string | null

  @column()
  declare rol: string

  get full_name(): string | null {
    return this.fullName
  }

  set full_name(val: string | null) {
    this.fullName = val
  }

  get initials() {
    const name = this.fullName || (this as any).full_name
    const [first, last] = name ? name.split(' ') : this.email.split('@')
    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }

    return `${first.slice(0, 2)}`.toUpperCase()
  }
}
