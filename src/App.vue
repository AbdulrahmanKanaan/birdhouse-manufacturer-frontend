<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TitleBar from './components/TitleBar.vue'
</script>

<template>
  <header>
    <TitleBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
