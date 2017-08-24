// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import search from '@/components/search.vue'
import Resource from 'vue-resource'
import content from '@/components/content.vue'
import '@/common/css/reset.css'

Vue.use(Resource)

Vue.config.productionTip = false

var routers = [{
  path: '/search',
  name: search,
  component: search
}];

var g = document.createElement('script');
g.src = 'http://localhost:8089/getnavbar?type=router';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(g, s);

window.change = function (d) {
  for (var i in d) {
    if (d[i].hasOwnProperty('next')) {
      window.change(d[i].next);
    } else {
      routers.push({
        path: d[i].path,
        name: i,
        component: content
      });
      router.addRoutes(routers);
      routers = [];
    }
  }
}

// router.afterEach(route => { //全局路由钩子
//   sessionStorage.index = 11; //跳转至一级菜单首栏
//   sessionStorage.navIndex = 'menu1';
// })

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
