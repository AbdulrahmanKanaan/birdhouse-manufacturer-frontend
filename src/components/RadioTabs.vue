<template>
  <div class="radio-tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ active: activeTab === tab }"
      @click="changeTab(index)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tabs: {
    type: Array<String>,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['tabChanged'])

function changeTab(index: number) {
  emit('tabChanged', props.tabs[index])
}
</script>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
.radio-tabs {
  display: flex;
  gap: 32px;
}

.radio-tabs > div {
  padding: 10px 0;
  cursor: pointer;
  color: rgba($color: c.$white, $alpha: 0.4);
}

.radio-tabs > .active {
  border-bottom: 2px solid c.$primary;
  color: c.$primary;
}
</style>
