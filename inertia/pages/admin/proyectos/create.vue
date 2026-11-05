<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const form = useForm({
  nombre: '',
  presupuesto: '',
  fechaLimite: '',
  estado: 'Planificación',
})

const submit = () => {
  form.post('/admin/proyectos')
}
</script>

<template>
  <AdminLayout titulo="Proyectos">
    <h2>Crear Nuevo Proyecto</h2>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre del Proyecto:</label>
        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          placeholder="Ej: Migración ERP Cloud"
          class="form-input"
          required
        />
        <span v-if="form.errors.nombre" class="form-error">
          {{ form.errors.nombre }}
        </span>
      </div>

      <div class="form-group">
        <label for="presupuesto" class="form-label">Presupuesto Asignado:</label>
        <input
          id="presupuesto"
          v-model="form.presupuesto"
          type="number"
          step="0.01"
          placeholder="Ej: 50000000"
          class="form-input"
          required
        />
        <span v-if="form.errors.presupuesto" class="form-error">
          {{ form.errors.presupuesto }}
        </span>
      </div>

      <div class="form-group">
        <label for="fechaLimite" class="form-label">Fecha Límite:</label>
        <input
          id="fechaLimite"
          v-model="form.fechaLimite"
          type="date"
          class="form-input"
          required
        />
        <span v-if="form.errors.fechaLimite" class="form-error">
          {{ form.errors.fechaLimite }}
        </span>
      </div>

      <div class="form-group">
        <label for="estado" class="form-label">Estado:</label>
        <select id="estado" v-model="form.estado" class="form-select" required>
          <option value="Planificación">Planificación</option>
          <option value="En progreso">En progreso</option>
          <option value="Pausado">Pausado</option>
          <option value="Finalizado">Finalizado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
        <span v-if="form.errors.estado" class="form-error">
          {{ form.errors.estado }}
        </span>
      </div>

      <div style="margin-top: 20px;">
        <button type="submit" class="btn-primary" :disabled="form.processing">
          Guardar Proyecto
        </button>
        <Link href="/admin/proyectos" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
