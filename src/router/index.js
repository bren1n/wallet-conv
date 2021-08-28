import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/gastos',
    name: 'Gastos',
    component: () => import('../views/Gastos.vue')
  },
  {
    path: '/receitas',
    name: 'Receitas',
    component: () => import('../views/Receitas.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
