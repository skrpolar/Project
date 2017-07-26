<template>
  <div class="main_content">
    <HeaderLine index="3" :locale="locale" @on-locale-change="onLocaleChange">
    </HeaderLine>
    <div v-show="isEmputy" class="main_body">
      <div class="content">
        <div class="left_nav">
          <ul>
 
            <li class="level1" @click="navActive.menu1=!navActive.menu1">
              <a href="javascript:">
                {{ $t('messages.menu1') }}
                <span class="sub" v-if="this.navActive.menu1">-</span>
                <span class="plus" v-else>+</span>
              </a>
            </li>
            <ul class="level1-ul-1" v-if="this.navActive.menu1">
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu1_1']}" @click="liIndex=liActive['menu1_1']">
                <router-link :to="{ path: '/' }">{{ $t('messages.menu1_1') }}</router-link>
              </li>
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu1_2']}" @click="liIndex=liActive['menu1_2']">
                <router-link :to="{ path: '/content2' }">{{ $t('messages.menu1_2') }}</router-link>
              </li>
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu1_3']}" @click="liIndex=liActive['menu1_3']">
                <router-link :to="{ path: `/content3` }">{{ $t('messages.menu1_3') }}</router-link>
              </li>
            </ul>
            <li class="level1" @click="navActive.menu2=!navActive.menu2">
              <a href="javascript:">
                {{ $t('messages.menu2') }}
                <span class="sub" v-if="this.navActive.menu2">-</span>
                <span class="plus" v-else>+</span>
              </a>
            </li>
            <ul class="level1-ul-2" v-if="this.navActive.menu2">
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu2_1']}" @click="liIndex=liActive['menu2_1']">
                <router-link :to="{ path: `/content4` }">{{ $t('messages.menu2_1') }}</router-link>
              </li>
            </ul>
            <li class="level1" @click="navActive.menu3=!navActive.menu3">
              <a href="javascript:">
                {{ $t('messages.menu3') }}
                <span class="sub" v-if="this.navActive.menu3">-</span>
                <span class="plus" v-else>+</span>
              </a>
            </li>
            <ul class="level1-ul-3" v-if="this.navActive.menu3">
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu3_1']}" @click="liIndex=liActive['menu3_1']">
                <router-link :to="{ path: `/content5` }">{{ $t('messages.menu3_1') }}</router-link>
              </li>
            </ul>
            <li class="level1" @click="navActive.menu4=!navActive.menu4">
              <a href="javascript:">
                {{ $t('messages.menu4') }}
                <span class="sub" v-if="this.navActive.menu4">-</span>
                <span class="plus" v-else>+</span>
              </a>
            </li>
            <ul class="level1-ul-4" v-if="this.navActive.menu4">
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu4_1']}" @click="liIndex=liActive['menu4_1']">
                <router-link :to="{ path: `/content6` }">{{ $t('messages.menu4_1') }}</router-link>
              </li>
            </ul>
            <li class="level1" @click="navActive.menu5=!navActive.menu5">
              <a href="javascript:">
                {{ $t('messages.menu5') }}
                <span class="sub" v-if="this.navActive.menu5">-</span>
                <span class="plus" v-else>+</span>
              </a>
            </li>
            <ul class="level1-ul-5" v-if="this.navActive.menu5">
              <li :class="{level2:true, li_active:liIndex==this.liActive['menu5_1']}" @click="liIndex=liActive['menu5_1']">
                <router-link :to="{ path: `/content7` }">{{ $t('messages.menu5_1') }}</router-link>
              </li>
            </ul> 
          </ul>
        </div>
        <div class="right_rev">
          <router-view :locale="locale"></router-view>
        </div>
        <div class="oTop">
          <div>^</div>
        </div>
      </div>
    </div>
    <FooterLine v-if="locale=='ch'"></FooterLine>
    <FooterLine2 v-else></FooterLine2>
  </div>
  
  <!-- <div id="app">
    <p>{{ msg }}</p>
    <firstcomponent ref="p"></firstcomponent>
    <a href="/first">1.First Page </a>
    <a href="/second">2.Second Page</a>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    </div> -->
</template>

<script>
import Vue from 'vue';
import HeaderLine from './components/header.vue';
import FooterLine from './components/footer.vue';
import FooterLine2 from './components/footer2.vue';
import VueI18n from 'vue-i18n';

var i18n = new VueI18n({
  locale: 'ch',
  messages: {
    ch: {
      messages: {
        menu1: '开始前必读',
        menu1_1: '介绍',
        menu1_2: '内容二',
        menu1_3: '内容三',
        menu2: '标题二',
        menu2_1: '内容四',
        menu3: '主内容',
        menu3_1: '内容五',
        menu4: '页脚一',
        menu4_1: '内容六',
        menu5: '页脚二',
        menu5_1: '内容七'
      }
    },
    en: {
      messages: {
        menu1: 'Start',
        menu1_1: 'Introduction',
        menu1_2: 'Content2',
        menu1_3: 'Content3',
        menu2: 'Header2',
        menu2_1: 'Content4',
        menu3: 'MainBody',
        menu3_1: 'Content5',
        menu4: 'Footer',
        menu4_1: 'Content6',
        menu5: 'Footer2',
        menu5_1: 'Content7'
      }
    }
  }
});

export default {
  name: 'app',
  data: function () {
    return {
      url: "",
      isEmputy: false,
      locale: "ch",
      /* 模板结构化
      navInit: {
        menu1: {
          hasNext: true,
          navActive: true,
          next: {
            menu1_1: {
              hasNext: false,
              path: '/',
              liActive: 11
            },

            menu1_2: {
              hasNext: false,
              path: '/index',
              liActive: 12
            },

            menu1_3: {
              hasNext: false,
              path: '/content3',
              liActive: 13
            }
          }
        },

        menu2: {
          hasNext: false, // 只有hasNext为false时，有liActive属性，没有navActive属性
          liActive: 2
        },

        menu3: {
          hasNext: true,
          navActive: false,
          next: {
            menu3_1: {
              hasNext: false,
              path: '/',
              liActive: 31
            }
          }
        }
      },
      */
      liIndex: 11,
      liActive: {
        menu1_1: 11,
        menu1_2: 12,
        menu1_3: 13,
        menu2_1: 21,
        menu3_1: 31,
        menu4_1: 41,
        menu5_1: 51,
      },
      navActive: {
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false
      }
    }
  },
  watch: {
    locale: function (val) {
      this.$i18n.locale = val;
      if (val == 'en') {
        document.title = "Documentation 丨 VRVIU";
      } else {
        document.title = "技术文档丨威尔直播 VRVIU";
      }
    }
  },

  mounted() {
    var language = navigator.language; //取得浏览器版本语言
    var initLanguage = "";
    if (localStorage.locale) {
      if (localStorage.locale == "en") {
        document.title = "Documentation 丨 VRVIU";
      } else {
        document.title = "技术文档丨威尔直播 VRVIU";
      }
      this.$i18n.locale = localStorage.locale;
      this.locale = localStorage.locale
    } else {
      if (language.indexOf('zh') > -1) {
        initLanguage = "ch"; //中文页面
        document.title = "技术文档丨威尔直播 VRVIU";
      }

      if (language.indexOf('en') > -1) {
        initLanguage = "en"; //英文页面
        document.title = "Documentation 丨 VRVIU";
      }

      this.$i18n.locale = initLanguage;
      this.locale = initLanguage;
    }


    // this.locale = "ch";
    // this.$i18n.locale = "ch";
    var self = this;
    var docEl = document.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
        self.isEmputy = true;
      };

    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);


    var oTop = document.getElementsByClassName('oTop')[0];
    oTop.style.display = 'none';
    oTop.onclick = function () {
      setTimeout(moveScroll, 10);
    }

    window.moveScroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      var clientWidth = docEl.clientWidth;
      if ((t / clientWidth) > 0.05) {
        document.documentElement.scrollTop -= 30;
        document.body.scrollTop -= 30;
      } else {
        document.documentElement.scrollTop -= 5;
        document.body.scrollTop -= 5;
      }

      if ((document.documentElement.scrollTop > 0) || (document.body.scrollTop > 0)) {
        setTimeout(moveScroll, 10);
      }
    }

    /* 滚动栏 */
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      var clientWidth = docEl.clientWidth;
      // var left_nav = document.getElementsByClassName('left_nav')[0];
      if ((t / clientWidth) > 0.20876) {
        oTop.style.display = 'block';
      } else {
        oTop.style.display = 'none';
      }
    }

    this.liIndex = sessionStorage.index; // 从路由传正确的li index
    for(var i in this.navActive) {
      if( i == sessionStorage.navIndex ) {
        this.navActive[i] = true;
      }
    }
  },

  components: {
    HeaderLine,
    FooterLine,
    FooterLine2
  },
  i18n: i18n,
  methods: {
    onLocaleChange: function (val) {
      this.locale = val;
    },
    /* 该功能已被@click取代
    openUl: function (val) {
      this.navActive['menu' + val] = !this.navActive['menu' + val];
      var ul = document.getElementsByClassName('level1-ul-' + val)[0];
      // console.log(this.navActive['menu' + val]);

      // 菜单显示功能由v-if代替
      if (this.navActive['menu' + val]) {
        // ul.style.display = 'block'; 
      } else {
        ul.style.display = 'none';
      }
  
    },
    */  
    activeIndex: function (val) {
      console.log(val);
    }
  }
}








// export default {
//   name: 'app',
//   data() {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   },
//   components: {
//     firstcomponent
//   },
//   mounted() {
//     console.log(this.$refs.p.$data.msg); // 获取子组件的data值，可以用来搜索子组件的信息。
//   }
// }
</script>

<style>
.main_body {
  background: url(https://img.vrviu.com/images/about_bg.png) center bottom no-repeat;
  background-size: 100% 15.18rem;
  margin-top: 0.5rem;
}



/* -----左侧导航栏------*/

.plus {
  float: right;
  font-size: 0.3rem;
  margin-right: 0.2rem;
}

.sub {
  float: right;
  font-size: 0.3rem;
  margin-right: 0.26rem;
}

.left_nav {
  width: 17%;
  border-right: 0.01rem solid #e9e9e9;
}

.left_nav ul {
  margin: 0;
  width: 100%;
}

.left_nav ul:first-child {
  margin-top: 0.25rem;
}

.left_nav ul:last-child {
  margin-bottom: 0.25rem;
}

.left_nav li {
  margin: 0;
  height: 0.6rem;
}

.left_nav a {
  color: #333F5C;
  display: block;
  height: 0.6rem;
  font-size: 0.21rem;
  text-align: left;
  line-height: 0.6rem;
  padding-left: 0.4rem;
  transform: translate(0, 0);
  transition: background .2s ease-in 0s;
}

.left_nav a:visited {
  color: #333F5C;
}

.left_nav a:hover {
  background: #efefef;
  animation: fade-in;
  animation-duration: .35s;
  -webkit-animation: fade-in .35s;
}

.left_nav .li_active a {
  border-right: 2px solid #369fe8;
  color: #369fe8;
}

.left_nav .level2 a {
  padding-left: 0.55rem;
}

.left_nav .level3 a {
  padding-left: 0.65rem;
}

.left_nav .level4 a {
  padding-left: 0.75rem;
}

@keyframes fade-in {
  0% {
    background: #fff;
  }
  50% {
    backgroung: #f2f2f2;
  }
  100% {
    background: #efefef;
  }
}

@-webkit-keyframes fade-in {
  0% {
    background: #fff;
  }
  50% {
    backgroung: #f2f2f2;
  }
  100% {
    background: #efefef;
  }
}



/*---------------------*/

.oTop {
  margin: 0;
  width: 0.5rem;
  height: 0.5rem;
  background: #e9e9e9;
  position: fixed;
  top: 80vh;
  left: 18rem;
  cursor: pointer;
  color: #aaa;
  border-radius: 3px;
}

.oTop:hover {
  background: #5cadff;
}

.oTop div {
  margin-left: -0.012rem;
  font-size: 0.6rem;
  transform: scale(1.25, 1);
  -ms-transform: scale(1.25, 1);
  /* IE 9 */
  -webkit-transform: scale(1.25, 1);
  /* Safari 和 Chrome */
  -o-transform: scale(1.25, 1);
  /* Opera */
  -moz-transform: scale(1.25, 1);
  /* Firefox */
}

.oTop div:hover {
  color: white;
}


/* -----右侧显示栏------*/

.right_rev {
  width: 83%;
}

.right_rev .head {
  font-size: 0.4rem;
  color: #333F5C;
  margin-top: 1rem;
}

.right_rev .main_content {
  margin: 0 1rem;
  font-size: 0.20rem;
  color: #333F5C;
  line-height: 0.36rem;
  text-align: left;
}

.right_rev .search {}

.right_rev .search input {
  border: 0.01rem solid #b9b9b9;
  border-radius: 0.05rem;
  font-size: 0.2rem;
}


/*--------------------*/

.english32 {
  line-height: 2em!important;
}

.english {
  width: 70%;
  margin-left: 1.8rem;
  /*  text-align: justify!important;
  text-justify: inter-ideograph!important;*/
}

.english2 {
  margin-top: 0.3rem;
}

.english3 {}

.content {
  width: 16rem;
  margin: 0 auto;
  text-align: center;
  /* border: 0.01rem solid #f5f5f5; */
  background: rgba(255, 255, 255, 1);
  /* background: white; */
  margin-top: 0.46rem;
  padding-bottom: 0.8rem;
  display: flex;
}

.content>div {
  /* box-sizing: border-box; */
}

.title {
  color: #333F5C;
  font-size: 0.4rem;
  padding: 0.8rem 0 0.5rem 0;
}

.text1 {
  font-size: 0.20rem;
  color: #333F5C;
  line-height: 0.36rem;
  text-align: left;
}

.pic_list .title1 {
  font-size: 0.32rem;
  color: #333F5C;
}

.pic_list .title2 {
  font-size: 0.22rem;
  color: #333F5C;
}

.pic_list .title3 {
  font-size: 0.16rem;
  color: #333F5C;
  line-height: 1.6em;
  width: 90%;
  margin: 0 auto;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pic_list li {
  float: left;
  margin-right: 0.27rem;
  width: 3.83rem;
  height: 5.73rem;
  background: #fff;
  margin-bottom: 0.49rem;
}

.pic_list {
  margin-right: -0.3rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
}

.pic_list li img {
  height: 3.83rem;
  width: 3.83rem;
}

.footer {
  position: static;
}

.content_mask {
  margin: 0 2rem;
}



















/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #eee;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
