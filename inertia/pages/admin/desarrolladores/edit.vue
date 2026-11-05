<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const props = defineProps({
  desarrollador: {
    type: Object,
    required: true,
  },
  habilidades: {
    type: Array,
    default: () => [],
  },
})

// Mapear habilidades existentes con su nivel pivote
const habilidadesIniciales = (props.desarrollador.habilidades || []).map((h) => ({
  habilidadId: h.id,
  nivel: h.$extras?.pivot_nivel || h.pivot?.nivel || 'Intermedio',
}))

const form = useForm({
  nombre: props.desarrollador.nombre,
  rolPrincipal: props.desarrollador.rolPrincipal,
  costoHoraNormal: props.desarrollador.costoHoraNormal,
  costoHoraExtra: props.desarrollador.costoHoraExtra,
  horasContrato: props.desarrollador.horasContrato,
  habilidades: habilidadesIniciales,
})

const agregarHabilidad = () => {
  if (props.habilidades.length === 0) {
    alert('Primero debe crear habilidades en el sistema para poder asignarlas.')
    return
  }
  form.habilidades.push({
    habilidadId: props.habilidades[0].id,
    nivel: 'Intermedio',
  })
}

const removerHabilidad = (index) => {
  form.habilidades.splice(index, 1)
}

const submit = () => {
  form.put(`/admin/desarrolladores/${props.desarrollador.id}`)
}
</script>

<template>
  <AdminLayout titulo="Desarrolladores">
    <h2>Editar Desarrollador #{{ desarrollador.id }}</h2>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre Completo:</label>
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

      <div class="form-group">
        <label for="rolPrincipal" class="form-label">Rol Principal:</label>
        <input
          id="rolPrincipal"
          v-model="form.rolPrincipal"
          type="text"
          class="form-input"
          required
        />
        <span v-if="form.errors.rolPrincipal" class="form-error">
          {{ form.errors.rolPrincipal }}
        </span>
      </div>

      <div class="form-group">
        <label for="costoHoraNormal" class="form-label">Costo por Hora Normal:</label>
        <input
          id="costoHoraNormal"
          v-model="form.costoHoraNormal"
          type="number"
          step="0.01"
          class="form-input"
          required
        />
        <span v-if="form.errors.costoHoraNormal" class="form-error">
          {{ form.errors.costoHoraNormal }}
        </span>
      </div>

      <div class="form-group">
        <label for="costoHoraExtra" class="form-label">Costo por Hora Extra:</label>
        <input
          id="costoHoraExtra"
          v-model="form.costoHoraExtra"
          type="number"
          step="0.01"
          class="form-input"
          required
        />
        <span v-if="form.errors.costoHoraExtra" class="form-error">
          {{ form.errors.costoHoraExtra }}
        </span>
      </div>

      <div class="form-group">
        <label for="horasContrato" class="form-label">Horas de Contrato (al mes):</label>
        <input
          id="horasContrato"
          v-model="form.horasContrato"
          type="number"
          min="1"
          class="form-input"
          required
        />
        <span v-if="form.errors.horasContrato" class="form-error">
          {{ form.errors.horasContrato }}
        </span>
      </div>

      <!-- Asignación de Habilidades con Nivel -->
      <div style="margin-top: 24px; border-top: 1px solid #ccc; padding-top: 16px; max-width: 650px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h3 style="margin: 0; font-size: 16px;">Habilidades y Nivel de Dominio</h3>
          <button type="button" @click="agregarHabilidad" class="btn-action">
            + Agregar Habilidad
          </button>
        </div>

        <p v-if="habilidades.length === 0" style="color: #666; font-size: 13px;">
          No existen habilidades en el sistema. Puedes registrarlas primero en la sección de Habilidades.
        </p>

        <p v-else-if="form.habilidades.length === 0" style="color: #666; font-size: 13px;">
          No se han asignado habilidades aún. Haz clic en "+ Agregar Habilidad" para asignarle una.
        </p>

        <table v-if="form.habilidades.length > 0" class="admin-table" style="margin-top: 8px;">
          <thead>
            <tr>
              <th>Habilidad</th>
              <th>Nivel de Dominio</th>
              <th style="width: 80px;">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(h, idx) in form.habilidades" :key="idx">
              <td>
                <select v-model="h.habilidadId" class="form-select" required>
                  <option v-for="hab in habilidades" :key="hab.id" :value="hab.id">
                    {{ hab.nombre }}
                  </option>
                </select>
              </td>
              <td>
                <select v-model="h.nivel" class="form-select" required>
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                  <option value="Experto">Experto</option>
                </select>
              </td>
              <td style="text-align: center;">
                <button type="button" @click="removerHabilidad(idx)" class="btn-action">Quitar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <span v-if="form.errors.habilidades" class="form-error">
          {{ form.errors.habilidades }}
        </span>
      </div>

      <div style="margin-top: 24px;">
        <button type="submit" class="btn-primary" :disabled="form.processing">
          Actualizar Desarrollador
        </button>
        <Link href="/admin/desarrolladores" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
