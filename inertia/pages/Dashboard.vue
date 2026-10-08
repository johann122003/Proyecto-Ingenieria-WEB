<script setup>
import { useForm, router } from '@inertiajs/vue3'
import { ref } from 'vue'

defineProps({ profesionales: Array })

const form = useForm({ especialidad: '', salario: '' })
const editandoId = ref(null) // Guardará el ID del registro que estamos editando

const guardar = () => {
  if (editandoId.value) {
    // Modo Edición: Usamos router.put para actualizar
    form.put(`/profesionales/${editandoId.value}`, { 
      onSuccess: () => {
        form.reset()
        editandoId.value = null // Salir del modo edición
      }
    })
  } else {
    // Modo Creación normal
    form.post('/profesionales', { onSuccess: () => form.reset() })
  }
}

const editar = (prof) => {
  // Pasamos los datos del registro a las casillas del formulario
  editandoId.value = prof.id
  form.especialidad = prof.especialidad
  form.salario = prof.salario
}

const cancelarEdicion = () => {
  editandoId.value = null
  form.reset()
}

const eliminar = (id) => router.delete(`/profesionales/${id}`)
const logout = () => router.post('/logout')
</script>

<template>
  <div style="padding: 30px; font-family: sans-serif; max-width: 800px; margin: auto;">
    <button @click="logout" style="float: right; padding: 10px; background: red; color: white; border: none; cursor:pointer;">Cerrar Sesión</button>
    <h2>Panel CRUD de Profesionales</h2>
    
    <form @submit.prevent="guardar" style="margin-bottom: 20px; display: flex; gap: 10px;">
      <input v-model="form.especialidad" placeholder="Especialidad" required style="padding: 8px; flex: 1;" />
      <input v-model="form.salario" type="number" placeholder="Salario" required style="padding: 8px; flex: 1;" />
      
      <button type="submit" style="padding: 8px 15px; color: white; border: none; cursor:pointer;" :style="{ backgroundColor: editandoId ? '#006400' : 'green' }">
        {{ editandoId ? 'Actualizar Registro' : 'Guardar Nuevo' }}
      </button>
      
      <button v-if="editandoId" type="button" @click="cancelarEdicion" style="padding: 8px 15px; background: gray; color: white; border: none; cursor:pointer;">
        Cancelar
      </button>
    </form>

    <table border="1" cellPadding="10" style="width: 100%; border-collapse: collapse; text-align: left;">
      <tr style="background-color: #f2f2f2;">
        <th>Especialidad</th>
        <th>Salario</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="prof in profesionales" :key="prof.id">
        <td>{{ prof.especialidad }}</td>
        <td>${{ prof.salario }}</td>
        <td>
          <button @click="editar(prof)" style="background: orange; color:white; border:none; padding: 5px; cursor:pointer; margin-right: 5px;">Editar</button>
          <button @click="eliminar(prof.id)" style="background: red; color:white; border:none; padding: 5px; cursor:pointer;">Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
</template>