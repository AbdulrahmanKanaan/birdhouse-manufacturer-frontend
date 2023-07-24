<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button @click="$emit('onClick')">
    {{ text }}
    <div class="icon">
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;

button {
  background-color: c.$primary;
  color: c.$white;
  padding: 12px 24px;
  border-radius: v.$border-radius-sm;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: c.$primary-light;
  }
}
.icon {
  width: 24px;
  display: flex;
  align-items: center;
}
</style>
