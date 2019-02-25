import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home', // 精品
      component: () => import(/* webpackChunkName: "about" */ './views/common.vue'),
      children: [
        {
          path: '/',
          redirect: 'boutique'
        },
        {
          path: 'boutique',
          name: 'boutique', // 精品
          component: () => import(/* webpackChunkName: "about" */ './views/index/boutique.vue')
        },
        {
          path: 'gift',
          name: 'gift', // 礼物
          component: () => import(/* webpackChunkName: "about" */ './views/index/gift.vue')
        },
        {
          path: 'accessories',
          name: 'accessories', // 配饰
          component: () => import(/* webpackChunkName: "about" */ './views/index/accessories.vue')
        },
        {
          path: 'cosmetics',
          name: 'cosmetics', // 美妆
          component: () => import(/* webpackChunkName: "about" */ './views/index/cosmetics.vue')
        },
        {
          path: 'bag',
          name: 'bag', // 女包
          component: () => import(/* webpackChunkName: "about" */ './views/index/bag.vue')
        },
        {
          path: 'shoes',
          name: 'shoes', // 女鞋
          component: () => import(/* webpackChunkName: "about" */ './views/index/shoes.vue')
        }
      ]
    },
    {
      path: '/find',
      name: 'find', // 发现
      component: () => import(/* webpackChunkName: "about" */ './views/find/find.vue')
    },
    {
      path: '/message',
      name: 'message', // 发现
      component: () => import(/* webpackChunkName: "about" */ './views/message/message.vue')
    },
    {
      path: '/personal',
      name: 'personal', // 发现
      component: () => import(/* webpackChunkName: "about" */ './views/personal/personal.vue')
    }
  ]
})
