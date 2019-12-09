import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 主页
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/detaile',
    name: 'detaile',
    component: () => import('../views/Detaile.vue')
  },

  // 汽车颜色与款式
  {
    path: '/colorDesign',
    name: 'colorDesign',
    component: () => import('../views/colorDesign.vue')
  },
   // 汽车颜色页
   {
    path: '/carColor',
    name: 'carColor',
    component: () => import('../views/carColor.vue')
  },
   // 汽车款式页
   {
    path: '/carDesign',
    name: 'carDesign',
    component: () => import('../views/CarDesign.vue')
  },
  // 个人信息页
  {
    path: '/inquiry',
    name: 'inquiry',
    component: () => import('../views/Inquiry.vue')
  },
  // 地址页
  {
    path: '/address',
    name: 'address',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Address.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
