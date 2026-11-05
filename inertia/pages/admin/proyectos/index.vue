<script setup>
import { Link, router } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

defineProps({
  proyectos: {
    type: Array,
    default: () => [],
  },
})

const formatearMoneda = (val) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(val)
}

const formatearFecha = (fechaStr) => {
  if (!fechaStr) return ''
  return fechaStr.split('T')[0]
}

const eliminar = (id) => {
  if (confirm('¿Confirma que desea eliminar este proyecto? Todos sus requerimientos y asignaciones asociadas también serán eliminados.')) {
    router.delete(`/admin/proyectos/${id}`)
  }
}
</script>

<template>
  <AdminLayout titulo="Proyectos">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h2 style="margin: 0;">Listado de Proyectos</h2>
      <Link href="/admin/proyectos/crear" class="btn-primary">Nuevo Proyecto</Link>
    </div>

    <table class="admin-table">
      <thead>
        <tr>
          <th style="width: 60px;">ID</th>
          <th>Nombre</th>
          <th>Presupuesto</th>
          <th>Fecha Límite</th>
          <th>Estado</th>
          <th style="width: 160px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="proyectos.length === 0">
          <td colspan="6" style="text-align: center; color: #666;">
            No hay proyectos registrados.
          </td>
        </tr>
        <tr v-for="item in proyectos" :key="item.id">
          <td>{{ item.id }}</td>
          <td><strong>{{ item.nombre }}</strong></td>
          <td>{{ formatearMoneda(item.presupuesto) }}</td>
          <td>{{ formatearFecha(item.fechaLimite) }}</td>
          <td>{{ item.estado }}</td>
          <td>
            <Link :href="`/admin/proyectos/${item.id}/editar`" class="btn-action">Editar</Link>
            <button type="button" @click="eliminar(item.id)" class="btn-action">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>
