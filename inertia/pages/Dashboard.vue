<script setup>
import { computed } from 'vue'
import { router, Link, usePage } from '@inertiajs/vue3'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
})

const page = usePage()

// Compatibilidad: buscar usuario en props directas de la página o en props compartidas de Inertia
const usuario = computed(() => {
  if (props.user && Object.keys(props.user).length > 0) {
    return props.user
  }
  return page.props.user || {}
})

// Saludo: usa nombre (fullName o full_name) y si está vacío, usa el email
const nombreMostrar = computed(() => {
  return usuario.value.fullName || usuario.value.full_name || usuario.value.email || 'Usuario'
})

// Enlace al panel de administración visible cuando el rol sea admin
const esAdmin = computed(() => {
  return usuario.value.rol === 'admin'
})

const logout = () => router.post('/logout')
</script>

<template>
  <div style="max-width: 800px; margin: 40px auto; padding: 20px; font-family: sans-serif; color: #000; background: #fff;">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ccc; padding-bottom: 15px; margin-bottom: 25px;">
      <h1 style="margin: 0; font-size: 24px;">Panel de Usuario</h1>
      <button
        type="button"
        @click="logout"
        style="padding: 6px 14px; background: #fff; color: #000; border: 1px solid #000; cursor: pointer;"
      >
        Cerrar Sesión
      </button>
    </div>

    <p>Bienvenido al sistema ERP, <strong>{{ nombreMostrar }}</strong>.</p>

    <div v-if="esAdmin" style="margin-top: 25px; padding: 15px; border: 1px solid #999;">
      <p style="margin-top: 0;">Tienes permisos de administrador.</p>
      <Link
        href="/admin"
        style="display: inline-block; padding: 8px 16px; background: #000; color: #fff; text-decoration: none; border: 1px solid #000;"
      >
        Ir al Panel de Administración
      </Link>
    </div>
  </div>
</template>
