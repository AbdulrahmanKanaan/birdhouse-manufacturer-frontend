<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  itemsCount: {
    type: Number,
    required: true,
    default: 0
  }
})

const isNoData = computed(() => props.itemsCount === 0)
</script>

<template>
  <div class="no-data" v-if="isNoData">
    <p>No items to show ...</p>
  </div>
  <slot v-else></slot>
</template>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;

$height: 50px;

.no-data {
  width: 100%;
  color: c.$white;
  text-align: center;
  background-color: c.$secondary;
  border-radius: v.$border-radius-sm;
  height: $height;
  line-height: $height;
}
</style>
