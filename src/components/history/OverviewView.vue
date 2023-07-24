<script setup lang="ts">
import HistoryRow from '@/components/HistoryRow.vue'
import type { Residency } from '../../types'

defineProps({
  history: {
    type: Array<Residency>,
    required: true,
    default: []
  }
})
</script>

<template>
  <div :class="$style['history-rows']">
    <HistoryRow
      v-for="residency of history"
      :key="residency.id"
      :birds="residency.birds"
      :eggs="residency.eggs"
      :date="residency.date"
    />
  </div>
</template>

<style module lang="scss">
.history-rows {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
