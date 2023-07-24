<template>
  <span class="container">
    <span class="icon">
      <slot></slot>
    </span>
    <span class="text">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps({
  text: String
})
</script>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;

.container {
  font-size: 16px;
  color: c.$white;
  font-weight: 500;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 8px;
    line-height: 0;
  }
}
</style>
