import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import content from '@/components/content.vue'

Vue.use(Router)

console.log('asdasd');

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'menu1_1',
      component: content
      // redirect: '/index'
    },
    {
      path: '/content2',
      name: 'menu1_2',
      component: content
    },
    {
      path: '/content3',
      name: 'menu1_3_1',
      component: content
    },
    {
      path: '/content4',
      name: 'menu2_1',
      component: content
    },
    {
      path: '/content5',
      name: 'menu3_1',
      component: content
    },
    {
      path: '/content6',
      name: 'menu4_1',
      component: content
    },
    {
      path: '/content7',
      name: 'menu5_1',
      component: content
    },
    {
      path: '/menu6',
      name: 'menu6',
      component: content
    }
  ]
})
