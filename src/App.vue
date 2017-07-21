<template>
  <div class="main_content">
    <HeaderLine index="3" :locale="locale" @on-locale-change="onLocaleChange">
    </HeaderLine>
    <div v-show="isEmputy" class="main_body">
      <div class="content">
        <div class="left_nav">
          <ul>
            <li class="level1" @click="openUl">
              <a href="#">Header1</a>
            </li>
            <ul class="level1-ul">
              <li class="level2">
                <a href="#">Content1</a>
              </li>
              <li class="level2 li_active">
                <a href="#">Content2</a>
              </li>
              <li class="level2">
                <a href="#">Content3</a>
              </li>
            </ul>
            <li class="level1">
              <a href="#">Header2</a>
            </li>
            <li class="level1">
              <a href="#">MainBody</a>
            </li>
            <li class="level1">
              <a href="#">Footer</a>
            </li>
            <li class="level1">
              <a href="#">Footer2</a>
            </li>
          </ul>
        </div>
        <div class="right_rev">
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <router-view></router-view>
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
// import firstcomponent from './components/firstcomponent.vue'
// import secondcomponent from './components/secondcomponent.vue'
import Vue from 'vue';
import HeaderLine from './components/header.vue';
import FooterLine from './components/footer.vue';
import FooterLine2 from './components/footer2.vue';
import VueI18n from 'vue-i18n';

var i18n = new VueI18n({});

export default {
  name: 'app',
  data: function () {
    return {
      url: "",
      isEmputy: false,
      locale: "ch"
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

    /* 滚动栏 */
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(t);
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
    openUl: function () {

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

.left_nav {
  width: 18%;
  margin: 0;
  background: white;
  border-top: 1px solid #c9c9c9;
  border-left: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  float: left;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.left_nav ul {
  margin: 0;
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
  display: block;
  height: 0.6rem;
  font-size: 0.21rem;
  text-align: left;
  line-height: 0.6rem;
  padding-left: 0.4rem;
  transform: translate(0, 0);
  transition: all .2s ease-in 0s;
}

.left_nav a:visited {
  color: black;
}

.left_nav a:hover {
  background: #efefef;
  animation: fade-in;
  animation-duration: .35s;
  -webkit-animation: fade-in .35s;
}

.left_nav .li_active a{
  border-right: 3px solid #5cadff;
  color: #5cadff;
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


/*--------------------*/


/* -----右侧显示栏------*/

.right_rev {
  width: 81%;
  margin: 0;
  background: white;
  border: 1px solid #c9c9c9;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 2.9rem;
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
  /* background-color: rgba(255, 255, 255, 0.9); */
  margin-top: 0.46rem;
  padding-bottom: 0.8rem;
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
