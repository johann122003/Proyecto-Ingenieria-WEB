<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const form = useForm({
  nombre: '',
})

const submit = () => {
  form.post('/admin/habilidades')
}
</script>

<template>
  <AdminLayout titulo="Habilidades">
    <h2>Crear Nueva Habilidad</h2>

    <form novalidate @submit.prevent="submit">
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre de la Habilidad:</label>
        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          placeholder="Ej: TypeScript, Vue.js, PostgreSQL"
          class="form-input"
        />
        <span v-if="form.errors.nombre" class="form-error">
          {{ form.errors.nombre }}
        </span>
      </div>

      <div style="margin-top: 20px;">
        <button type="submit" class="btn-primary" :disabled="form.processing">
          Guardar Habilidad
        </button>
        <Link href="/admin/habilidades" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
