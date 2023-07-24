<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import { AppRoutes } from '@/constants'
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToBirdHouses() {
  router.push(AppRoutes.housesList)
}
</script>

<template>
  <div class="container">
    <h1>Home Page</h1>
    <AppButton text="To BirdHouses Overview" @onClick="navigateToBirdHouses()">
      <template v-slot:icon>
        <ArrowIcon />
      </template>
    </AppButton>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as v;
@use '@/styles/mixins.scss' as m;

h1 {
  @include m.title-text;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
</style>
