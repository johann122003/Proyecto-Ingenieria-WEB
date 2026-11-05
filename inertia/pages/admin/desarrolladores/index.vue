<script setup>
import { Link, router } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

defineProps({
  desarrolladores: {
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

const eliminar = (id) => {
  if (confirm('¿Confirma que desea eliminar este desarrollador?')) {
    router.delete(`/admin/desarrolladores/${id}`)
  }
}
</script>

<template>
  <AdminLayout titulo="Desarrolladores">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
      <h2 style="margin: 0;">Listado de Desarrolladores</h2>
      <div>
        <Link href="/admin/desarrolladores/asignar-habilidad" class="btn-secondary" style="margin-right: 8px;">
          Asignar Habilidad (Dropdown Dependiente)
        </Link>
        <Link href="/admin/desarrolladores/crear" class="btn-primary">
          Nuevo Desarrollador
        </Link>
      </div>
    </div>

    <table class="admin-table">
      <thead>
        <tr>
          <th style="width: 50px;">ID</th>
          <th>Nombre</th>
          <th>Rol Principal</th>
          <th>Costo Hora Normal</th>
          <th>Costo Hora Extra</th>
          <th>Horas Contrato</th>
          <th>Habilidades y Nivel</th>
          <th style="width: 150px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="desarrolladores.length === 0">
          <td colspan="8" style="text-align: center; color: #666;">
            No hay desarrolladores registrados.
          </td>
        </tr>
        <tr v-for="dev in desarrolladores" :key="dev.id">
          <td>{{ dev.id }}</td>
          <td><strong>{{ dev.nombre }}</strong></td>
          <td>{{ dev.rolPrincipal }}</td>
          <td>{{ formatearMoneda(dev.costoHoraNormal) }}</td>
          <td>{{ formatearMoneda(dev.costoHoraExtra) }}</td>
          <td>{{ dev.horasContrato }} hrs</td>
          <td>
            <div v-if="dev.habilidades && dev.habilidades.length > 0">
              <span
                v-for="(h, idx) in dev.habilidades"
                :key="h.id"
                style="display: inline-block; border: 1px solid #ccc; padding: 2px 6px; margin: 2px; font-size: 12px;"
              >
                {{ h.nombre }}: <strong>{{ h.$extras?.pivot_nivel || h.pivot?.nivel || 'N/A' }}</strong>
              </span>
            </div>
            <span v-else style="color: #888;">Sin habilidades</span>
          </td>
          <td>
            <Link :href="`/admin/desarrolladores/${dev.id}/editar`" class="btn-action">Editar</Link>
            <button type="button" @click="eliminar(dev.id)" class="btn-action">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>
