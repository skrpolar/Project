// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

Vue.use(Resource)

Vue.config.productionTip = false

router.afterEach(route => { //全局路由钩子
  sessionStorage.index = 11; //跳转至一级菜单首栏
  sessionStorage.navIndex = 'menu1';
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
