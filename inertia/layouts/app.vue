<script setup lang="ts">
import { computed } from 'vue'
import { House, LogOut, Shield } from 'lucide-vue-next'
import { Form } from '@adonisjs/inertia/vue'
import { usePage, Link } from '@inertiajs/vue3'
import Logo from '~/components/logo.vue'
import FlashToasts from '~/components/flash_toasts.vue'
import ThemeToggle from '~/components/theme_toggle.vue'
import NavLink, { type NavItem } from '~/components/nav_link.vue'

const page = usePage()
const user = computed(() => page.props.user as any)

const nav: NavItem[] = [{ label: 'Dashboard', route: 'dashboard', icon: House }]
</script>

<template>
  <header class="header header--bar">
    <div class="header__inner">
      <Logo :size="28" />
      <div class="header__right">
        <ThemeToggle />
        <Form route="session.destroy">
          <button type="submit" class="btn btn--secondary btn--sm">
            <LogOut :size="15" /> Cerrar sesión
          </button>
        </Form>
      </div>
    </div>
  </header>

  <nav class="subnav">
    <div class="subnav__inner">
      <NavLink v-for="item in nav" :key="item.label" :route="item.route" class="subnav__item">
        <component :is="item.icon" v-if="item.icon" :size="14" />
        {{ item.label }}
      </NavLink>
      <Link
        v-if="user?.rol === 'admin'"
        href="/admin"
        class="subnav__item"
        style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px;"
      >
        <Shield :size="14" />
        Panel Admin
      </Link>
    </div>
  </nav>

  <div class="app-main">
    <slot />
  </div>
  <FlashToasts />
</template>
