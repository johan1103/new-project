import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Features from '../views/Features.vue'
import temp from '../views/temp.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/shop',
    name:'shop',
    component: Shop
  },
  {
    path: '/features',
    name: 'features',
    component: Features
  },
  {
    path: '/temp',
    name: 'temp',
    component: temp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
