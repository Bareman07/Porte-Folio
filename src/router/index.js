import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // pour la page accueil
      name: 'home',
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*", // pour toutes les autres pages non definies
      name: "NotFound",
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
