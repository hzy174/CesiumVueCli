// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store/store.js"
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store  // 添加上这一行的代码
})
