<script setup lang="ts">
import IconText from '@/components/IconText.vue'
import EggIcon from '@/components/icons/EggIcon.vue'
import PetIcon from '@/components/icons/PetIcon.vue'

defineProps({
  date: {
    type: String,
    required: true
  },
  birds: {
    type: Number,
    required: true
  },
  eggs: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div :class="$style.card">
    <span :class="$style.date">{{ date }}</span>
    <IconText style="margin-right: 10px" :text="birds.toString()">
      <PetIcon />
    </IconText>
    <IconText :text="eggs.toString()">
      <EggIcon />
    </IconText>
  </div>
</template>

<style lang="scss" module>
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;

.card {
  background-color: c.$secondary;
  border-radius: v.$border-radius-md;
  display: flex;
  align-items: center;
  padding: 24px;
}

.date {
  margin-right: 36px;
}
</style>
