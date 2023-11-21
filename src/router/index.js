import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/layout/index.vue'),
      children: [{
        path: 'about1',
        name: 'about1',
        component: () => import('../views/about1.vue')
      },{
        path: 'about2',
        name: 'about2',
        component: () => import('../views/about2.vue')
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }
  ]
})

export default router
