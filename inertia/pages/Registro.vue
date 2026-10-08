<script setup>
import { useForm, Link } from '@inertiajs/vue3'

const form = useForm({ email: '', password: '' })
const submit = () => form.post('/registro')
</script>

<template>
  <div style="max-width: 300px; margin: 100px auto; font-family: sans-serif;">
    <h2>Crear Cuenta Nueva</h2>
    <form @submit.prevent="submit">
      <input v-model="form.email" type="email" placeholder="Correo" required style="width: 100%; margin-bottom: 10px; padding: 8px;" />
      <input v-model="form.password" type="password" placeholder="Contraseña" required style="width: 100%; margin-bottom: 10px; padding: 8px;" />
      <button type="submit" style="width: 100%; padding: 10px; background: green; color: white; border: none; cursor:pointer;">Registrarse</button>
    </form>
    <p style="text-align: center; margin-top: 15px;">
      ¿Ya tienes cuenta? <Link href="/login">Inicia Sesión</Link>
    </p>
  </div>
</template>