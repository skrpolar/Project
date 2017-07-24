import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import index from './components/index.vue'
import content3 from './components/content3.vue'
import './common/css/reset.css'
import './common/css/animate.css'
// import './common/css/lyicon.css'

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
      // redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      name: 'index'
    },
    {
      path: '/content3',
      component: content3,
      name: 'content3'
    }
  ]
};

const router = new VueRouter(RouterConfig);

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
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