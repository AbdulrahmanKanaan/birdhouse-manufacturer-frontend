<script setup lang="ts">
import BirdhouseCard from './components/BirdhouseCard.vue'
import { AppRoutes } from '@/constants'
import { useRouter } from 'vue-router'
import useHousesStore from './store'
import PaginationBar from '@/components/PaginationBar.vue'
import { ref } from 'vue'

const router = useRouter()

function onCardClick(id: string) {
  router.push(AppRoutes.houseShow.replace(':id', id))
}

const page = ref(1)

const housesStore = useHousesStore()
housesStore.fetchHouses(page.value)

function handlePageChange(newPage: number) {
  page.value = newPage
  housesStore.fetchHouses(page.value)
}
</script>

<template>
  <div class="grid">
    <BirdhouseCard
      v-for="house of housesStore.houses"
      @onClick="onCardClick"
      :key="house.id"
      :id="house.id"
      :title="house.name"
      :location="`(${house.longitude}, ${house.latitude})`"
      :birds="house.birds"
      :eggs="house.eggs"
    />
  </div>
  <div class="pagination">
    <PaginationBar
      @onChange="handlePageChange"
      :page="page"
      :totalItems="housesStore.total"
      :itemsPerPage="2"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/colors.scss' as c;
$footer-height: 70px;

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-bottom: $footer-height;
}
.pagination {
  position: fixed;
  bottom: 0;
  left: 0;
  height: $footer-height;
  width: 100%;
  background-color: c.$secondary;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
