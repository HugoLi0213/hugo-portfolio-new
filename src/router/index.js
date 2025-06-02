import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})