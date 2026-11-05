<script setup>
import { useForm, Link, usePage } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const props = defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})

const page = usePage()
const proyId = props.proyecto?.id || props.proyecto?.$attributes?.id || page.props.proyecto?.id

const form = useForm({
  id: proyId,
  nombre: props.proyecto?.nombre || '',
  presupuesto: props.proyecto?.presupuesto || '',
  fechaLimite: props.proyecto?.fechaLimite || '',
  estado: props.proyecto?.estado || 'Planificación',
})

const submit = () => {
  const id = form.id || props.proyecto?.id || proyId
  form.put(`/admin/proyectos/${id}`)
}
</script>

<template>
  <AdminLayout titulo="Proyectos">
    <h2>Editar Proyecto #{{ form.id || proyecto?.id }}</h2>

    <form novalidate @submit.prevent="submit">
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre del Proyecto:</label>
        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          class="form-input"
        />
        <span v-if="form.errors.nombre" class="form-error">
          {{ form.errors.nombre }}
        </span>
      </div>

      <div class="form-group">
        <label for="presupuesto" class="form-label">Presupuesto Asignado (mayor a 0):</label>
        <input
          id="presupuesto"
          v-model="form.presupuesto"
          type="number"
          step="0.01"
          class="form-input"
        />
        <span v-if="form.errors.presupuesto" class="form-error">
          {{ form.errors.presupuesto }}
        </span>
      </div>

      <div class="form-group">
        <label for="fechaLimite" class="form-label">Fecha Límite (no anterior a hoy):</label>
        <input
          id="fechaLimite"
          v-model="form.fechaLimite"
          type="date"
          class="form-input"
        />
        <span v-if="form.errors.fechaLimite" class="form-error">
          {{ form.errors.fechaLimite }}
        </span>
      </div>

      <div class="form-group">
        <label for="estado" class="form-label">Estado:</label>
        <select id="estado" v-model="form.estado" class="form-select">
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
          Actualizar Proyecto
        </button>
        <Link href="/admin/proyectos" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
