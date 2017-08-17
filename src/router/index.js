import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content.vue'

Vue.use(Router)

const routerConfig = {
  mode: 'history',
  base: __dirname,
  routes: []
};

export default new Router(routerConfig)

