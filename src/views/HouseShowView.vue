<script setup lang="ts">
import IconText from '@/components/IconText.vue'
import RadioTabs from '@/components/RadioTabs.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import PaginationBar from '@/components/PaginationBar.vue'
import OverviewView from '@/components/history/OverviewView.vue'
import GraphView from '@/components/history/GraphView.vue'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Residency } from '@/types'

const route = useRoute()

const { id } = route.params

const view = ref('Graph')

function handleViewChange(viewType: string) {
  view.value = viewType
}

const history = reactive({
  data: Array.from({ length: 7 }, () => ({
    id: Math.floor(Math.random() * 1000000000),
    eggs: Math.floor(Math.random() * 10),
    birds: Math.floor(Math.random() * 10),
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()
  })) as Residency[],
  loading: false,
  page: 1
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
      <RadioTabs :tabs="['Overview', 'Graph']" @tab-changed="handleViewChange" :active-tab="view" />
    </div>
    <OverviewView :history="history.data" v-show="view === 'Overview'" />
    <GraphView :history="history.data" v-show="view === 'Graph'" />
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
