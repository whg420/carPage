import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tab from '../views/Tab.vue'
import Xq from '../views/xq.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'xq',
    component:Xq
  },
  {
    path: '/tab',
    component: () => import( '../views/Tab.vue')
  },{
    path: '/xq',
    component: () => import( '../views/xq.vue')
  },{
    path: '/car',
    component: () => import( '../views/car.vue')
  },{
    path: '/allclolor',
    component: () => import( '../views/allclolor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
