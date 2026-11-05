<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

defineProps({
  proyectos: {
    type: Array,
    default: () => [],
  },
  roles: {
    type: Array,
    default: () => [
      'Desarrollador React',
      'Backend Node.js',
      'Fullstack',
      'DevOps',
      'Arquitecto Cloud',
      'QA Tester',
      'Mobile Developer',
      'Base de Datos',
    ],
  },
})

const form = useForm({
  proyectoId: '',
  rolRequerido: '',
  horasEstimadas: '',
})

const submit = () => {
  form.post('/admin/requerimientos')
}
</script>

<template>
  <AdminLayout titulo="Requerimientos">
    <h2>Crear Nuevo Requerimiento</h2>

    <form novalidate @submit.prevent="submit">
      <!-- Select de Proyecto (sin input manual de FK) -->
      <div class="form-group">
        <label for="proyectoId" class="form-label">Proyecto:</label>
        <select id="proyectoId" v-model="form.proyectoId" class="form-select">
          <option value="" disabled>-- Seleccione un proyecto --</option>
          <option v-for="p in proyectos" :key="p.id" :value="p.id">
            {{ p.nombre }} (ID: {{ p.id }})
          </option>
        </select>
        <span v-if="form.errors.proyectoId" class="form-error">
          {{ form.errors.proyectoId }}
        </span>
      </div>

      <!-- Select de Rol Requerido -->
      <div class="form-group">
        <label for="rolRequerido" class="form-label">Rol Requerido:</label>
        <select id="rolRequerido" v-model="form.rolRequerido" class="form-select">
          <option value="" disabled>-- Seleccione el rol requerido --</option>
          <option v-for="r in roles" :key="r" :value="r">
            {{ r }}
          </option>
        </select>
        <span v-if="form.errors.rolRequerido" class="form-error">
          {{ form.errors.rolRequerido }}
        </span>
      </div>

      <div class="form-group">
        <label for="horasEstimadas" class="form-label">Horas Estimadas (entero mayor a 0):</label>
        <input
          id="horasEstimadas"
          v-model="form.horasEstimadas"
          type="number"
          placeholder="Ej: 120"
          class="form-input"
        />
        <span v-if="form.errors.horasEstimadas" class="form-error">
          {{ form.errors.horasEstimadas }}
        </span>
      </div>

      <div style="margin-top: 20px;">
        <button type="submit" class="btn-primary" :disabled="form.processing">
          Guardar Requerimiento
        </button>
        <Link href="/admin/requerimientos" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
