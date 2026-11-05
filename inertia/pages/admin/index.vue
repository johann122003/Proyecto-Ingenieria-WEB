<script setup>
import { Link } from '@inertiajs/vue3'
import AdminLayout from '~/layouts/AdminLayout.vue'

defineProps({
  stats: {
    type: Object,
    default: () => ({
      proyectos: 0,
      desarrolladores: 0,
      habilidades: 0,
      requerimientos: 0,
    }),
  },
})
</script>

<template>
  <AdminLayout titulo="Panel de Control">
    <h2>Resumen General del Sistema</h2>
    <p>
      Bienvenido al módulo de administración del Analizador de Asignación para Arquitectura de Software.
      Desde esta sección se gestionan los datos que alimentan el algoritmo del core.
    </p>

    <table class="admin-table" style="max-width: 600px;">
      <thead>
        <tr>
          <th>Módulo</th>
          <th>Total de Registros</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Desarrolladores</strong></td>
          <td>{{ stats.desarrolladores }}</td>
          <td>
            <Link href="/admin/desarrolladores" class="btn-action">Gestionar</Link>
          </td>
        </tr>
        <tr>
          <td><strong>Habilidades</strong></td>
          <td>{{ stats.habilidades }}</td>
          <td>
            <Link href="/admin/habilidades" class="btn-action">Gestionar</Link>
          </td>
        </tr>
        <tr>
          <td><strong>Proyectos</strong></td>
          <td>{{ stats.proyectos }}</td>
          <td>
            <Link href="/admin/proyectos" class="btn-action">Gestionar</Link>
          </td>
        </tr>
        <tr>
          <td><strong>Requerimientos</strong></td>
          <td>{{ stats.requerimientos }}</td>
          <td>
            <Link href="/admin/requerimientos" class="btn-action">Gestionar</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>
