import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
<<<<<<< HEAD
import VueLazyload from "vue-lazyload"

import './reset.css'
=======
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
Vue.use(ViewUI);

Vue.config.productionTip = false
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
