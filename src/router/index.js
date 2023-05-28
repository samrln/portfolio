import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import EngineerPortfolio from '../pages/EngineerPortfolio.vue'
import DeveloperPortfolio from '../pages/DeveloperPortfolio.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EngineerPortfolio',
    name: 'EngineerPortfolio',
    component: EngineerPortfolio,
  },
  {
    path: '/DeveloperPortfolio',
    name: 'DeveloperPortfolio',
    component: DeveloperPortfolio,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router