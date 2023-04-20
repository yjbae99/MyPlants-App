import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/plant/:plantid',
      name: 'plant',
      component: () => import('../views/PlantView.vue')
    },
    {
      path: '/myplants',
      name: 'myplants',
      component: () => import('../views/MyPlantView.vue')
    },
    {
      path: '/myplants/:type/:plantid',
      name: 'myplantprofile',
      component: () => import('../views/MyPlantProfile.vue')
    },
    {
      path: '/myplants/addplant',
      name: 'myplantadd',
      component: () => import('../views/MyPlantAdd.vue')
    },
    {
      path: '/myplants/editplant',
      name: 'myplantedit',
      component: () => import('../views/MyPlantEdit.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/Review.vue')
    },
    {
      path: '/reviews/addreview',
      name: 'addreview',
      component: () => import('../views/ReviewAdd.vue')
    }
  ]
})

export default router
