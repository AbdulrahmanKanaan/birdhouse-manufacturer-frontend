<script setup lang="ts">
import HistoryRow from '@/components/HistoryRow.vue'
import IconText from '@/components/IconText.vue'
import RadioTabs from '@/components/RadioTabs.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import PaginationBar from '@/components/PaginationBar.vue'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { id } = route.params

const houses = reactive({
  data: Array.from({ length: 10 }, () => ({
    id: `house_${Math.random().toString()}`,
    eggs: Math.floor(Math.random() * 10),
    birds: Math.floor(Math.random() * 10),
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()
  })),
  loading: false
})
</script>

<template>
  <div class="content">
    <div class="card">
      <div class="header">
        <span class="title">Cool Birdhouse</span>
        <IconText text="(7.160850, 16.072736)">
          <LocationIcon />
        </IconText>
      </div>
      <RadioTabs :tabs="['Overview', 'Graph']" @tab-changed="console.log" />
    </div>
    <div class="history-rows">
      <HistoryRow
        v-for="house of houses.data"
        :key="house.id"
        :birds="house.birds"
        :eggs="house.eggs"
        :date="house.date"
      />
    </div>
  </div>
  <div class="pagination">
    <PaginationBar />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;
@use '@/styles/mixins.scss' as m;

$footer-height: 70px;
.content {
  margin-bottom: $footer-height;
}

.card {
  background-color: c.$secondary;
  padding: 24px;
  padding-bottom: 0;
  border-radius: v.$border-radius-md;

  .title {
    @include m.title-text;
    margin-bottom: 18px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  margin-bottom: 24px;
}

.history-rows {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
