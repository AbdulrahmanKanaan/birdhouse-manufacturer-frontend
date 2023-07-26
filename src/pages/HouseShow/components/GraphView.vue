<script setup lang="ts">
import type { Residency } from '@/types'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue'

const props = defineProps({
  history: {
    type: Array<Residency>,
    required: true,
    default: []
  }
})

const options = computed<ApexOptions>(() => ({
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: props.history.map((residency) => residency.date)
  },
  grid: {
    strokeDashArray: 1,
    borderColor: '#ffffff33',
    yaxis: { lines: { show: true } },
    xaxis: { lines: { show: true } }
  },
  stroke: {
    width: 2
  },
  markers: {
    size: 5,
    strokeWidth: 0
  }
}))

const series = computed<ApexAxisChartSeries>(() => [
  {
    name: 'birds',
    data: props.history.map((residency) => residency.birds),
    color: '#744F99'
  },
  {
    name: 'eggs',
    data: props.history.map((residency) => residency.eggs),
    color: '#0E9CFF'
  }
])
</script>

<template>
  <apexchart height="600px" type="area" :options="options" :series="series"></apexchart>
</template>
