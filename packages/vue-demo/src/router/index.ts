import { createRouter, createWebHistory } from 'vue-router'
import AlertList from '../views/AlertList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/alert',
      name: 'alert',
      component: AlertList
    }
  ]
})

export default router
