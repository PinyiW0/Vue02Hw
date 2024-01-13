import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import ProductList from '../views/ProductListView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/LoginView',
          name:'LoginView',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/ProductList',
          name: 'ProductListView',
          component: () => import('../views/ProductListView.vue')
        }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
