import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import env from '#start/env'

export default class extends BaseSeeder {
  async run() {
    const email = env.get('ADMIN_EMAIL')
    const password = env.get('ADMIN_PASSWORD')

    if (!email || !password) {
      throw new Error(
        'Error en AdminSeeder: Las variables de entorno ADMIN_EMAIL y ADMIN_PASSWORD son obligatorias y no están definidas.'
      )
    }

    const user = await User.findBy('email', email)
    if (user) {
      user.fullName = 'Administrador'
      user.rol = 'admin'
      await user.save()
    } else {
      await User.create({
        email,
        password,
        fullName: 'Administrador',
        rol: 'admin',
      })
    }
  }
}
