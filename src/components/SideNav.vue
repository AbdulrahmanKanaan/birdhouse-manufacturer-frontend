<script setup lang="ts">
import { AppRoutes } from '@/constants'
import { RouterLink, useRoute } from 'vue-router'
import GridIcon from './icons/GridIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
const route = useRoute()
</script>

<template>
  <nav>
    <RouterLink class="nav-item" :to="AppRoutes.home">
      <div class="icon-container">
        <HomeIcon />
      </div>
    </RouterLink>
    <RouterLink class="nav-item" :to="AppRoutes.housesList">
      <div :class="{ 'icon-container': true, active: route.fullPath === AppRoutes.housesList }">
        <GridIcon />
      </div>
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;
nav {
  height: 100vh;
  position: fixed;
  margin-top: v.$header-height;
  top: 0;

  background-color: c.$secondary;
  width: v.$sidebar-width;
  padding: 16px;
  box-sizing: border-box;

  & .nav-item {
    display: block;

    & .icon-container {
      width: 48px;
      height: 48px;
      padding: 12px;
      box-sizing: border-box;
      border-radius: v.$border-radius-sm;

      &.active {
        background-color: c.$primary;

        svg {
          stroke: c.$white;
        }
      }
    }
  }
}
</style>
