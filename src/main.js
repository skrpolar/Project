import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// components
import index from './components/index.vue'
import error404 from './components/error404.vue'
import content from './components/content.vue'
import content2 from './components/content2.vue'
import content3 from './components/content3.vue'


// Vue.config.debug = true;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

// 初始化仓库
const store = new Vuex.Store({
  state: {
    localpath: localStorage.path
  },
  mutations: {
    change (state) {
      // console.log(state.localpath);
      state = localStorage.path;
    }
  }
})

// 路由配置
const RouterConfig = {
  mode: 'history',
  base: __dirname,
  routes: 
  [
    {
      path: '/',
      name: 'menu1_1',
      component: index
      // redirect: '/index'
    },
    // {
    //   path: '*',
    //   component: error404
    // },
    {
      path: '/content2',
      name: 'menu1_2',
      component: content2
    },
    {
      path: '/content3',
      name: 'menu1_3_1',
      component: content3
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
    }
  ]
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  localStorage.path = to.path;
  store.commit('change');
  next();
});

router.afterEach(route => { //全局路由钩子
  sessionStorage.index = 11; //跳转至一级菜单首栏
  sessionStorage.navIndex = 'menu1';
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store,
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