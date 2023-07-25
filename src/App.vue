<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import SideNav from './components/layout/SideNav.vue'
import TitleBar from './components/layout/TitleBar.vue'
import { AppRoutes } from './constants'

const route = useRoute()
</script>

<template>
  <TitleBar />

  <SideNav v-show="route.fullPath !== AppRoutes.home" />

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use '@/styles/variables.scss' as v;

main {
  margin-top: v.$header-height;
  margin-left: v.$sidebar-width;
  min-height: calc(100vh - v.$header-height);
  padding: 16px;
  box-sizing: border-box;
}
</style>
