<script setup>
import { computed } from 'vue'
import { Link, usePage, router } from '@inertiajs/vue3'

defineProps({
  titulo: {
    type: String,
    default: 'Panel de Administración',
  },
})

const page = usePage()

const flash = computed(() => {
  return page.props.flash || page.flash || {}
})

const logout = () => {
  router.post('/logout')
}
</script>

<template>
  <div class="admin-container">
    <header class="admin-header">
      <div class="header-top">
        <h1 class="header-title">ERP - {{ titulo }}</h1>
        <button type="button" @click="logout" class="btn-logout">
          Cerrar Sesión
        </button>
      </div>

      <nav class="admin-nav">
        <Link href="/admin" class="nav-link">Inicio Admin</Link>
        <Link href="/admin/desarrolladores" class="nav-link">Desarrolladores</Link>
        <Link href="/admin/habilidades" class="nav-link">Habilidades</Link>
        <Link href="/admin/proyectos" class="nav-link">Proyectos</Link>
        <Link href="/admin/requerimientos" class="nav-link">Requerimientos</Link>
        <span class="nav-separator">|</span>
        <Link href="/dashboard" class="nav-link">Ir a Dashboard de Usuario</Link>
      </nav>
    </header>

    <!-- Mensajes de notificación globales -->
    <div v-if="flash.success" class="alert-box alert-success">
      [Éxito] {{ flash.success }}
    </div>

    <div v-if="flash.error" class="alert-box alert-error">
      [Error] {{ flash.error }}
    </div>

    <main class="admin-content">
      <slot />
    </main>
  </div>
</template>

<style>
/* Estilos en blanco y negro sin acentos de color, sin gradientes, sin sombras ni animaciones */
.admin-container {
  max-width: 1050px;
  margin: 0 auto;
  padding: 24px;
  background-color: #ffffff;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.admin-header {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 16px;
  margin-bottom: 24px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.header-title {
  margin: 0;
  font-size: 22px;
  font-weight: bold;
}

.btn-logout {
  background: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
}

.btn-logout:hover {
  background: #f0f0f0;
}

.admin-nav {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.nav-link {
  color: #000000;
  text-decoration: underline;
  font-size: 14px;
}

.nav-link:hover {
  color: #333333;
}

.nav-separator {
  color: #999999;
}

.alert-box {
  padding: 10px 14px;
  margin-bottom: 20px;
  border: 1px solid #000000;
  background: #ffffff;
  font-size: 14px;
}

.alert-success {
  border-color: #000000;
}

.alert-error {
  border-color: #000000;
  font-weight: bold;
}

/* Tablas estándar */
.admin-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #cccccc;
  margin-top: 16px;
  margin-bottom: 24px;
}

.admin-table th,
.admin-table td {
  border: 1px solid #cccccc;
  padding: 8px 10px;
  text-align: left;
  vertical-align: middle;
}

.admin-table th {
  background-color: #f7f7f7;
  font-weight: bold;
}

/* Formularios estándar */
.form-group {
  margin-bottom: 16px;
  max-width: 500px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

.form-input,
.form-select,
.form-textarea {
  display: block;
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #999999;
  background: #ffffff;
  color: #000000;
  box-sizing: border-box;
  font-size: 14px;
}

.form-error {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  font-weight: bold;
  color: #000000;
  border-left: 2px solid #000000;
  padding-left: 6px;
}

/* Botones de acción */
.btn-primary {
  background: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
}

.btn-secondary {
  background: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  margin-left: 8px;
}

.btn-action {
  background: #ffffff;
  color: #000000;
  border: 1px solid #999999;
  padding: 3px 8px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 6px;
  display: inline-block;
}

.btn-action:hover {
  background: #f0f0f0;
}
</style>
