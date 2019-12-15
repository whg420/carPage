/*
 * @Author: your name
 * @Date: 2019-12-13 16:00:02
 * @LastEditTime: 2019-12-13 16:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueLazyload from "vue-lazyload"

import './reset.css'
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=984435346,506206561&fm=15&gp=0.jpg',
  loading: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=984435346,506206561&fm=15&gp=0.jpg',
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
