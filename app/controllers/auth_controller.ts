import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  // ---  LOGIN ---
  async mostrarLogin({ inertia }: HttpContext) {
    return inertia.render('Login')
  }

  async iniciarSesion({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect('/dashboard')
    } catch (error: any) {
      return "EL ERROR REAL ES: " + error.message
    }
  }

  // REGISTRO
  async mostrarRegistro({ inertia }: HttpContext) {
    return inertia.render('Registro')
  }

  async registrar({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    
    // le pasamos la contraseña normal.
    // AdonisJS la detectará y la encriptará automáticamente por su cuenta
    const user = await User.create({ email, password })
    
    await auth.use('web').login(user)
    return response.redirect('/dashboard')
  }
    

  // LOGOUT 
  async cerrarSesion({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}