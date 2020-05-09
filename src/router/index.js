import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/FInicioP',
    name: 'FInicioP',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FInicioP.vue')
  },
  {
    path: '/FFinalP',
    name: 'FFinalP',
    component: () => import(/* webpackChunkName: "about" */ '../views/FFinalP.vue')
  },
  {
    path: '/FEjecucionP',
    name: 'FEjecucionP',
    component: () => import(/* webpackChunkName: "about" */ '../views/FEjecucionP.vue')
  },
  {
    path: '/Formulario1',
    name: 'Formulario1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario1.vue')
  },{
    path: '/Formulario2',
    name: 'Formulario2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario2.vue')
  },
  {
    path: '/Formulario3',
    name: 'Formulario3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario3.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
