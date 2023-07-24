<template>
  <div class="grid">
    <BirdhouseCard
      @onClick="onCardClick"
      id="1"
      title="Cool birdhouse"
      location="(7.160850, 16.072736)"
      :birds="3"
      :eggs="2"
    />
    <BirdhouseCard
      @onClick="onCardClick"
      id="2"
      title="Cool birdhouse"
      location="(7.160850, 16.072736)"
      :birds="3"
      :eggs="2"
    />
    <BirdhouseCard
      @onClick="onCardClick"
      id="3"
      title="Cool birdhouse"
      location="(7.160850, 16.072736)"
      :birds="3"
      :eggs="2"
    />
    <BirdhouseCard
      @onClick="onCardClick"
      id="4"
      title="Cool birdhouse"
      location="(7.160850, 16.072736)"
      :birds="3"
      :eggs="2"
    />
    <BirdhouseCard
      @onClick="onCardClick"
      id="5"
      title="Cool birdhouse"
      location="(7.160850, 16.072736)"
      :birds="3"
      :eggs="2"
    />
  </div>
</template>

<script setup lang="ts">
import BirdhouseCard from '@/components/BirdhouseCard.vue'
import { AppRoutes } from '@/constants'
import { useRouter } from 'vue-router'

const router = useRouter()

function onCardClick(id: string) {
  router.push(AppRoutes.houseShow.replace(':id', id))
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
}
</style>
