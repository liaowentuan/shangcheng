import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index', // 精品
      component: () => import(/* webpackChunkName: "about" */ './views/common.vue'),
      children: [
        {
          path: '/',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'index', // 精品
          component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue')
        },
        {
          path: 'Boutique',
          name: 'Boutique', // 精品
          component: () => import(/* webpackChunkName: "about" */ './views/index/Boutique.vue')
        }
      ]
    }
  ]
})
