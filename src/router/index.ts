import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HousesListView from '../views/HousesListView.vue'
import HouseShowView from '../views/HouseShowView.vue'
import { AppRoutes } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoutes.home,
      name: 'home',
      component: HomeView
    },
    {
      path: AppRoutes.housesList,
      name: 'houses-list',
      component: HousesListView
    },
    {
      path: AppRoutes.houseShow,
      name: 'house-show',
      component: HouseShowView
    },
    {
      path: '/:path*',
      redirect: '/'
    }
  ]
})

export default router
