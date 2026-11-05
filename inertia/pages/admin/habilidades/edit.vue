<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const props = defineProps({
  habilidad: {
    type: Object,
    required: true,
  },
})

const form = useForm({
  nombre: props.habilidad.nombre,
})

const submit = () => {
  form.put(`/admin/habilidades/${props.habilidad.id}`)
}
</script>

<template>
  <AdminLayout titulo="Habilidades">
    <h2>Editar Habilidad #{{ habilidad.id }}</h2>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre de la Habilidad:</label>
        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          class="form-input"
          required
        />
        <span v-if="form.errors.nombre" class="form-error">
          {{ form.errors.nombre }}
        </span>
      </div>

      <div style="margin-top: 20px;">
        <button type="submit" class="btn-primary" :disabled="form.processing">
          Actualizar Habilidad
        </button>
        <Link href="/admin/habilidades" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
