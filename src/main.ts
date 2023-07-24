import './styles/fonts.scss'
import './styles/global.scss'
import 'vue-awesome-paginate/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueAwesomePaginate from 'vue-awesome-paginate'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAwesomePaginate)
app.use(VueApexCharts)

app.mount('#app')
