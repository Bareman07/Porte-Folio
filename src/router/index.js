import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import pageContact from '@/views/contactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // pour la page accueil
      name: 'Accueil',
      component: HomeView,
      meta: {
        title: 'Accueil',
        description: 'page daccueil du porte folio'
      }
    },
    {
      path: "/contact", // pour la page de contact
      name: 'pageContact',
      component: pageContact,
      meta: {
        title: 'Contact',
        description: 'page de contact'
      }
    },
    {
      path: "/:pathMatch(.*)*", // pour toutes les autres pages non definies
      name: 'NotFound',
      component: () => import('../views/404.vue'),
      meta: {
        title: '404',
        description: 'page non existante'
      }
    }
  ]
})

export default router
