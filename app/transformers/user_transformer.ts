import type User from '#models/user'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class UserTransformer extends BaseTransformer<User> {
  toObject() {
    return {
      id: this.resource.id,
      fullName: this.resource.fullName || (this.resource as any).full_name || null,
      full_name: (this.resource as any).full_name || this.resource.fullName || null,
      email: this.resource.email,
      rol: this.resource.rol || 'user',
      createdAt: this.resource.createdAt,
      updatedAt: this.resource.updatedAt,
      initials: this.resource.initials,
    }
  }
}
