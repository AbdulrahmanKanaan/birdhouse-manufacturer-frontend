<script setup lang="ts">
import LoadingCircle from './LoadingCircle.vue'

defineProps({
  spinning: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div :class="$style.container" v-if="spinning">
    <LoadingCircle />
  </div>
  <slot v-if="!spinning"></slot>
</template>

<style module lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
