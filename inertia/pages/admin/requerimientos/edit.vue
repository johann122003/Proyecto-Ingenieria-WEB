<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const props = defineProps({
  requerimiento: {
    type: Object,
    required: true,
  },
  proyectos: {
    type: Array,
    default: () => [],
  },
})

const form = useForm({
  proyectoId: props.requerimiento.proyectoId,
  rolRequerido: props.requerimiento.rolRequerido,
  horasEstimadas: props.requerimiento.horasEstimadas,
})

const submit = () => {
  form.put(`/admin/requerimientos/${props.requerimiento.id}`)
}
</script>

<template>
  <AdminLayout titulo="Requerimientos">
    <h2>Editar Requerimiento #{{ requerimiento.id }}</h2>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="proyectoId" class="form-label">Proyecto:</label>
        <select id="proyectoId" v-model="form.proyectoId" class="form-select" required>
          <option value="" disabled>-- Seleccione un proyecto --</option>
          <option v-for="p in proyectos" :key="p.id" :value="p.id">
            {{ p.nombre }}
          </option>
        </select>
        <span v-if="form.errors.proyectoId" class="form-error">
          {{ form.errors.proyectoId }}
        </span>
      </div>

      <div class="form-group">
        <label for="rolRequerido" class="form-label">Rol Requerido:</label>
        <input
          id="rolRequerido"
          v-model="form.rolRequerido"
          type="text"
          class="form-input"
          required
        />
        <span v-if="form.errors.rolRequerido" class="form-error">
          {{ form.errors.rolRequerido }}
        </span>
      </div>

      <div class="form-group">
        <label for="horasEstimadas" class="form-label">Horas Estimadas:</label>
        <input
          id="horasEstimadas"
          v-model="form.horasEstimadas"
          type="number"
          min="1"
          class="form-input"
          required
        />
        <span v-if="form.errors.horasEstimadas" class="form-error">
          {{ form.errors.horasEstimadas }}
        </span>
      </div>

      <div style="margin-top: 20px;">
        <button type="submit" class="btn-primary" :disabled="form.processing">
          Actualizar Requerimiento
        </button>
        <Link href="/admin/requerimientos" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
