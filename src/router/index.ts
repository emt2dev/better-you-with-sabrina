import LandingView from '@/views/LandingView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useMainStore } from '@/stores/mainStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      component: LandingView
    }
  ],
})

export default router
