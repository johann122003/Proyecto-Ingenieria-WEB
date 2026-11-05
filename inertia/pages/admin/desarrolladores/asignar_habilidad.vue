<script setup>
import { ref, watch } from 'vue'
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

const props = defineProps({
  roles: {
    type: Array,
    default: () => [],
  },
  habilidades: {
    type: Array,
    default: () => [],
  },
})

const rolSeleccionado = ref('')
const desarrolladores = ref([])
const cargando = ref(false)

const form = useForm({
  desarrolladorId: '',
  habilidadId: '',
  nivel: 'Intermedio',
})

// Watch en Vue: al elegir un rol principal, se carga el select de desarrolladores mediante un endpoint JSON
watch(rolSeleccionado, async (nuevoRol) => {
  form.desarrolladorId = ''
  desarrolladores.value = []

  if (!nuevoRol) return

  cargando.value = true
  try {
    const res = await fetch(`/admin/api/desarrolladores-por-rol?rol=${encodeURIComponent(nuevoRol)}`)
    if (res.ok) {
      desarrolladores.value = await res.json()
    }
  } catch (error) {
    console.error('Error al cargar desarrolladores por rol:', error)
  } finally {
    cargando.value = false
  }
})

const submit = () => {
  form.post('/admin/desarrolladores/asignar-habilidad')
}
</script>

<template>
  <AdminLayout titulo="Asignar Habilidad">
    <h2>Asignar Habilidad a Desarrollador</h2>
    <p style="color: #444; margin-bottom: 20px;">
      Selecciona el rol principal para filtrar los desarrolladores disponibles, luego elige la habilidad y su nivel de dominio.
    </p>

    <form novalidate @submit.prevent="submit" style="max-width: 500px;">
      <!-- 1. Dropdown de Rol Principal -->
      <div class="form-group">
        <label for="rol" class="form-label">1. Rol Principal:</label>
        <select id="rol" v-model="rolSeleccionado" class="form-select">
          <option value="" disabled>-- Selecciona un rol principal --</option>
          <option v-for="r in roles" :key="r" :value="r">
            {{ r }}
          </option>
        </select>
      </div>

      <!-- 2. Dropdown dependiente de Desarrolladores (cargado via JSON + watch) -->
      <div class="form-group">
        <label for="desarrolladorId" class="form-label">
          2. Desarrollador:
          <span v-if="cargando" style="font-weight: normal; font-size: 12px;">(Cargando...)</span>
        </label>
        <select
          id="desarrolladorId"
          v-model="form.desarrolladorId"
          class="form-select"
          :disabled="!rolSeleccionado || cargando"
        >
          <option value="" disabled>
            {{ !rolSeleccionado ? '-- Primero elige un rol principal --' : (desarrolladores.length === 0 ? '-- No hay desarrolladores con este rol --' : '-- Selecciona un desarrollador --') }}
          </option>
          <option v-for="d in desarrolladores" :key="d.id" :value="d.id">
            {{ d.nombre }} (ID: {{ d.id }})
          </option>
        </select>
        <span v-if="form.errors.desarrolladorId" class="form-error">
          {{ form.errors.desarrolladorId }}
        </span>
      </div>

      <!-- 3. Dropdown de Habilidad -->
      <div class="form-group">
        <label for="habilidadId" class="form-label">3. Habilidad a Asignar:</label>
        <select id="habilidadId" v-model="form.habilidadId" class="form-select">
          <option value="" disabled>-- Selecciona una habilidad --</option>
          <option v-for="h in habilidades" :key="h.id" :value="h.id">
            {{ h.nombre }}
          </option>
        </select>
        <span v-if="form.errors.habilidadId" class="form-error">
          {{ form.errors.habilidadId }}
        </span>
      </div>

      <!-- 4. Dropdown de Nivel -->
      <div class="form-group">
        <label for="nivel" class="form-label">4. Nivel de Dominio:</label>
        <select id="nivel" v-model="form.nivel" class="form-select">
          <option value="Básico">Básico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
          <option value="Experto">Experto</option>
        </select>
        <span v-if="form.errors.nivel" class="form-error">
          {{ form.errors.nivel }}
        </span>
      </div>

      <div style="margin-top: 24px;">
        <button
          type="submit"
          class="btn-primary"
          :disabled="form.processing || !form.desarrolladorId || !form.habilidadId"
        >
          Guardar Asignación
        </button>
        <Link href="/admin/desarrolladores" class="btn-secondary">Cancelar</Link>
      </div>
    </form>
  </AdminLayout>
</template>
