<script setup lang="ts">
import LocationIcon from '@/components/icons/LocationIcon.vue'
import PetIcon from '@/components/icons/PetIcon.vue'
import EggIcon from '@/components/icons/EggIcon.vue'
import IconText from '@/components/IconText.vue'

defineProps({
  id: { type: String, required: true },
  title: String,
  location: String,
  birds: Number,
  eggs: Number
})
</script>

<template>
  <div class="card" @click="$emit('onClick', id)">
    <p class="title">{{ title }}</p>
    <p class="location">
      <IconText :text="location">
        <LocationIcon />
      </IconText>
    </p>
    <p class="residency">
      <IconText :text="birds?.toString()">
        <PetIcon />
      </IconText>
      <IconText :text="eggs?.toString()">
        <EggIcon />
      </IconText>
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;
@use '@/styles/mixins.scss' as m;

.card {
  background-color: c.$secondary;
  padding: 24px;
  border-radius: v.$border-radius-md;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px c.$primary;
  }
}

p.title {
  @include m.title-text;
  margin-bottom: 18px;
  hyphens: auto;
}

.location {
  margin-bottom: 10px;
}

.residency {
  display: flex;
  gap: 10px;
}
</style>
