import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:  () => import('../components/HelloWorld')
    },{
      path: '/cs',
      name: 'cs',
      component:  () => import('../view/main/main.vue')
    }
  ]
})
