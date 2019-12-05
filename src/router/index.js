import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 主页
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 详情页
  {
    path: '/detaile',
    name: 'detaile',
    component: () => import('../views/Detaile.vue')
  },
 
  // 汽车颜色与款式
  {
    path: '/designColor',
    name: 'designColor',
    component: () => import('../views/DesignColor.vue')
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
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/Address.vue')
  },
=======
    component: () => import(/* webpackChunkName: "about" */ '../views/Detaile.vue')
  }, {
    path: '/tab',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab.vue')
  },{
    path: '/allclolor',
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/allclolor.vue')
  },{
    path: '/car',
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/car.vue')
  },{
    path: '/plant',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/plant.vue')
  }
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
