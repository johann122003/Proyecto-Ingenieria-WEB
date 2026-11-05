<script setup>
import { Link, router } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

defineProps({
  requerimientos: {
    type: Array,
    default: () => [],
  },
})

const eliminar = (id) => {
  if (confirm('¿Confirma que desea eliminar este requerimiento?')) {
    router.delete(`/admin/requerimientos/${id}`)
  }
}
</script>

<template>
  <AdminLayout titulo="Requerimientos">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h2 style="margin: 0;">Listado de Requerimientos</h2>
      <Link href="/admin/requerimientos/crear" class="btn-primary">Nuevo Requerimiento</Link>
    </div>

    <table class="admin-table">
      <thead>
        <tr>
          <th style="width: 60px;">ID</th>
          <th>Proyecto</th>
          <th>Rol Requerido</th>
          <th>Horas Estimadas</th>
          <th style="width: 160px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="requerimientos.length === 0">
          <td colspan="5" style="text-align: center; color: #666;">
            No hay requerimientos registrados.
          </td>
        </tr>
        <tr v-for="item in requerimientos" :key="item.id">
          <td>{{ item.id }}</td>
          <td><strong>{{ item.proyecto?.nombre || ('Proyecto #' + item.proyectoId) }}</strong></td>
          <td>{{ item.rolRequerido }}</td>
          <td>{{ item.horasEstimadas }} hrs</td>
          <td>
            <Link :href="`/admin/requerimientos/${item.id}/editar`" class="btn-action">Editar</Link>
            <button type="button" @click="eliminar(item.id)" class="btn-action">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>
