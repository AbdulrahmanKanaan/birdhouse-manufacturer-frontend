<script setup lang="ts">
import { ref } from 'vue'
const onClickHandler = (page: number) => {
  console.log(page)
}

const currentPage = ref(1)
</script>

<template>
  <vue-awesome-paginate
    :total-items="60"
    :items-per-page="5"
    :max-pages-shown="3"
    v-model="currentPage"
    :on-click="onClickHandler"
    :paginate-buttons-class="$style.btn"
    :active-page-class="$style.active"
    :back-button-class="$style.back"
    :next-button-class="$style.next"
    :pagination-container-class="$style.container"
  />
</template>

<style lang="scss" module>
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;

.container {
  display: flex;
}

.btn {
  height: 40px;
  width: 40px;
  cursor: pointer;
  background-color: transparent;
  color: rgba(c.$white, 0.4);
  border: none;
  border-radius: v.$border-radius-sm;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(c.$primary, 0.3);
  }
}

.active {
  background-color: c.$primary;
  color: c.$white;

  &:hover {
    background-color: c.$primary;
  }
}

.next,
.back {
  color: c.$primary;
}
</style>
