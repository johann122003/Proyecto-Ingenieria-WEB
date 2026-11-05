<script setup>
import { Link, router } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

defineProps({
  habilidades: {
    type: Array,
    default: () => [],
  },
})

const eliminar = (id) => {
  if (confirm('¿Confirma que desea eliminar esta habilidad?')) {
    router.delete(`/admin/habilidades/${id}`)
  }
}
</script>

<template>
  <AdminLayout titulo="Habilidades">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h2 style="margin: 0;">Listado de Habilidades</h2>
      <Link href="/admin/habilidades/crear" class="btn-primary">Nueva Habilidad</Link>
    </div>

    <table class="admin-table">
      <thead>
        <tr>
          <th style="width: 80px;">ID</th>
          <th>Nombre</th>
          <th style="width: 160px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="habilidades.length === 0">
          <td colspan="3" style="text-align: center; color: #666;">
            No hay habilidades registradas.
          </td>
        </tr>
        <tr v-for="item in habilidades" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>
            <Link :href="`/admin/habilidades/${item.id}/editar`" class="btn-action">Editar</Link>
            <button type="button" @click="eliminar(item.id)" class="btn-action">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>
