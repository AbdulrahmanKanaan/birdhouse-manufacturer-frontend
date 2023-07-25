import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home/HomePage.vue'
import HousesListPage from '../pages/HousesList/HousesListPage.vue'
import HouseShowPage from '../pages/HouseShow/HouseShowPage.vue'
import { AppRoutes } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoutes.home,
      name: 'home',
      component: HomePage
    },
    {
      path: AppRoutes.housesList,
      name: 'houses-list',
      component: HousesListPage
    },
    {
      path: AppRoutes.houseShow,
      name: 'house-show',
      component: HouseShowPage
    },
    {
      path: '/:path*',
      redirect: '/'
    }
  ]
})

export default router
