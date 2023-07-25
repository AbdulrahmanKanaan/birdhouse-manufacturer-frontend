<script setup lang="ts">
import IconText from '@/components/IconText.vue'
import PaginationBar from '@/components/PaginationBar.vue'
import RadioTabs from '@/components/RadioTabs.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GraphView from './components/GraphView.vue'
import OverviewView from './components/OverviewView.vue'
import useHouseStore from './store'
import { storeToRefs } from 'pinia'

const route = useRoute()

const { id } = route.params

const view = ref('Overview')

function handleViewChange(viewType: string) {
  view.value = viewType
}

const page = ref(1)

const houseStore = useHouseStore()

const { history } = storeToRefs(houseStore)

houseStore.fetchHouse(id as string)
houseStore.fetchHistory(id as string, page.value)

function handlePageChange(newPage: number) {
  page.value = newPage
  houseStore.fetchHistory(id as string, page.value)
}
</script>

<template>
  <div class="content">
    <div class="card">
      <div class="header">
        <span class="title">{{ houseStore.house?.name }}</span>
        <IconText :text="`(${houseStore.house?.longitude}, ${houseStore.house?.latitude})`">
          <LocationIcon />
        </IconText>
      </div>
      <RadioTabs :tabs="['Overview', 'Graph']" @tab-changed="handleViewChange" :active-tab="view" />
    </div>
    <OverviewView :history="history" v-show="view === 'Overview'" />
    <GraphView :history="history" v-show="view === 'Graph'" />
  </div>
  <div class="pagination">
    <PaginationBar
      @onChange="handlePageChange"
      :page="page"
      :totalItems="houseStore.total"
      :itemsPerPage="7"
    />
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
