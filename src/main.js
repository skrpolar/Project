import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './common/css/reset.css'
import './common/css/animate.css'
// import './common/css/lyicon.css'

// components
import index from './components/index.vue'
import error404 from './components/error404.vue'
import content2 from './components/content2.vue'
import content3 from './components/content3.vue'
import content4 from './components/content4.vue'
import content5 from './components/content5.vue'
import content6 from './components/content6.vue'
import content7 from './components/content7.vue'


// Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 路由配置
const RouterConfig = {
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: index
      // redirect: '/index'
    },
    {
      path: '*',
      component: error404
    },
    {
      path: '/content2',
      component: content2
    },
    {
      path: '/content3',
      component: content3
    },
    {
      path: '/content4',
      component: content4
    },
    {
      path: '/content5',
      component: content5
    },
    {
      path: '/content6',
      component: content6
    },
    {
      path: '/content7',
      component: content7
    }
  ]
};

const router = new VueRouter(RouterConfig);

router.afterEach(route => { //全局路由钩子
  sessionStorage.index = 11; //跳转至一级菜单首栏
  sessionStorage.navIndex = 'menu1';
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router: router
})



// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from "vue-router"
// import VueResource from 'vue-resource'
// import secondcomponent from './component/secondcomponent.vue'

// //开启debug模式
// Vue.config.debug = true;

// Vue.use(VueRouter);
// Vue.use(VueResource);

// // 定义组件
// const First = {
//   template: '<div><h2>我是第 1 个子页面</h2></div>'
// }


// // 创建一个路由器实例
// // 并且配置路由规则
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [{
//       path: '/first',
//       component: First
//     },
//     {
//       path: '/second',
//       component: secondcomponent
//     }
//   ]
// })

// // 现在我们可以启动应用了！
// // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
// const app = new Vue({
//   router: router,
//   render: h => h(App)
// }).$mount('#app')