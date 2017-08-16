<template>
  <div class="main_content">
    <HeaderLine index="3" :locale="locale" @on-locale-change="onLocaleChange">
    </HeaderLine>
    <div v-show="isEmputy" class="main_body">
      <div class="content">
        <div class="left_nav">
          <ul>
            <template v-for="(value, key, index) in navInit">
              <template v-if="value.hasNext">
                <li :title="$t(`messages.${key}`)" :class="[ 'level1', {level_plus: value.hasNext} ]" @click="value.navActive=!value.navActive">
                  <div>
                    <span :class="[ value.navActive ? 'sub' : 'plus' ]">^</span>
                    <a class="nav_title">{{ $t(`messages.${key}`) }}</a>
                  </div>
                </li>
                <ul :class="[ 'level_ul', {open: value.navActive} ]">
                  <!-- 控制菜单方式由v-if更改为css样式实现动画效果 -->
                  <template v-for="(value2, key2, index2) in value.next">
                    <template v-if="value2.hasNext">
                      <li :title="$t(`messages.${key2}`)" :class="[ 'level2', {level_plus:value2.hasNext} ]" @click="value2.navActive=!value2.navActive">
                        <div>
                          <span :class="[ value2.navActive ? 'sub' : 'plus' ]">^</span>
                          <a class="nav_title">{{ $t(`messages.${key2}`) }}</a>
                        </div>
                      </li>
                      <ul :class="[ 'level_ul', {open: value2.navActive} ]">
                        <!-- 控制菜单方式由v-if更改为css样式实现动画效果 -->
                        <template v-for="(value3, key3, index3) in value2.next">
                          <template v-if="value3.hasNext">
                            <li :title="$t(`messages.${key3}`)" :class="[ 'level3', {level_plus:value3.hasNext} ]" @click="value3.navActive=!value3.navActive">
                              <div>
                                <span :class="[ value3.navActive ? 'sub' : 'plus' ]">^</span>
                                <a class="nav_title">{{ $t(`messages.${key3}`) }}</a>
                              </div>
                            </li>
                            <ul :class="[ 'level_ul', {open: value3.navActive} ]">
                              <!-- 控制菜单方式由v-if更改为css样式实现动画效果 -->
                              <template v-for="(value4, key4, index4) in value3.next">
                                <template v-if="value4.hasNext">
                                  <li :title="$t(`messages.${key4}`)" :class="[ 'level4', {level_plus:value4.hasNext} ]" @click="value4.navActive=!value4.navActive">
                                    <div>
                                      <span :class="[ value4.navActive ? 'sub' : 'plus' ]">^</span>
                                      <a class="nav_title">{{ $t(`messages.${key4}`) }}</a>
                                    </div>
                                  </li>
                                  <ul :class="[ 'level_ul', {open: value4.navActive} ]">
                                    <!-- 控制菜单方式由v-if更改为css样式实现动画效果 -->
  
                                  </ul>
                                </template>
                                <template v-else>
                                  <li :class="[ 'level4', {li_active:liIndex==value4.liActive} ]" @click="liIndex=value4.liActive">
                                    <router-link :title="$t(`messages.${key4}`)" :to="{ name: key4 }">{{ $t(`messages.${key4}`) }}</router-link>
                                  </li>
                                </template>
                              </template>
                            </ul>
                          </template>
                          <template v-else>
                            <li :class="[ 'level3', {li_active:liIndex==value3.liActive} ]" @click="liIndex=value3.liActive">
                              <router-link :title="$t(`messages.${key3}`)" :to="{ name: key3, params: {paramsActive: `${key} ${key2}`} }">{{ $t(`messages.${key3}`) }}</router-link>
                            </li>
                          </template>
                        </template>
                      </ul>
                    </template>
                    <template v-else>
                      <li :class="[ 'level2', {li_active:liIndex==value2.liActive} ]" @click="liIndex=value2.liActive">
                        <router-link :title="$t(`messages.${key2}`)" :to="{ name: key2, params: {paramsActive: `${key}`} }">{{ $t(`messages.${key2}`) }}</router-link>
                      </li>
                    </template>
                  </template>
                </ul>
              </template>
              <template v-else>
                <li :class="[ 'level1', {li_active:liIndex==value.liActive} ]" @click="liIndex=value.liActive">
                  <router-link :title="$t(`messages.${key}`)" :to="{ name: key }">{{ $t(`messages.${key}`) }}</router-link>
                </li>
              </template>
            </template>
          </ul>
        </div>
  
        <div class="right_rev">
          <div class="search">
            <input type="text" id="search_input" @keyup.enter="searchFunc()" :class="[ searchPng ? 'ser_input_active' : 'ser_input' ]" :placeholder="$t('search.msg')">
            <img id="ser" :class="[ searchPng ? 'ser_png_active' : 'ser_png' ]" @click="searchPng=!searchPng" src="./assets/search.png">
          </div>
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
</template>

<script>
import HeaderLine from '@/components/header.vue';
import FooterLine from '@/components/footer.vue';
import FooterLine2 from '@/components/footer2.vue';
import index from '@/components/index.vue'
import marked from 'marked'
import hljs from 'highlight.js'
import '@/common/css/reset.css'
import '@/common/css/animate.css'
import VueI18n from 'vue-i18n';

var i18n = new VueI18n({
  locale: 'ch',
  messages: {
    ch: {
      search: {
        msg: '搜索点什么...',
      }
    },
    en: {
      search: {
        msg: 'Search something...'
      }
    }
  }
});

export default {
  name: 'app',
  i18n: i18n,
  data: function () {
    return {
      url: "",
      isEmputy: false,
      locale: 'ch',
      searchPng: false,
      navInit: {},
      liIndex: sessionStorage.index,
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
    },
    // sessionStorage: function (val) {
    //   console.log(1);
    // }
  },

  beforeCreate() {

  },

  created() {
    // this.$data.liActive['menu1_1'] = 12;

  },

  beforeMount() {
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
      localStorage.locale = initLanguage;
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
      /*
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
      */
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    /* 滚动栏 */
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      var clientWidth = docEl.clientWidth;
      // var left_nav = document.getElementsByClassName('left_nav')[0];
      // console.log((t / clientWidth));
      if ((t / clientWidth) > 0.20876) {
        oTop.style.display = 'block';
      } else {
        oTop.style.display = 'none';
      }
    }

    this.$http.jsonp('http://localhost:8089/getnavbar')
      .then(function (req) {
        this.$data.navInit = req.data;
        this.navCreator(this.navInit);
      }).catch(function () {
        console.log('Restart to connect server...');
        this.getNavBar('http://localhost:8089/getnavbar');
      });


    // this.liIndex = sessionStorage.index; // 从路由传正确的li index 

    // console.log(this.$data.navInit);
    // setTimeout(()=>{console.log(this.$data.navInit);},1000); 
    // console.log(JSON.stringify(this.navInit));

    // this.$i18n = i18n;
  },

  beforeUpdate() {
    // 通过导入来搜索内容
    var s = index;
    var input = document.getElementById('search_input');

  },

  updated() {
    this.liIndex = sessionStorage.index;
  },

  components: {
    HeaderLine,
    FooterLine,
    FooterLine2
  },
  methods: {
    onLocaleChange: function (val) {
      this.locale = val;
    },
    /* 该功能已被@click取代
    openUl: function (val) {
      this.navActive['menu' + val] = !this.navActive['menu' + val];
      var ul = document.getElementsByClassName('level1-ul-' + val)[0];
      // console.log(this.navActive['menu' + val]);

      // 菜单显示功能已被v-if代替
      if (this.navActive['menu' + val]) {
        // ul.style.display = 'block'; 
      } else {
        ul.style.display = 'none';
      }
  
    },
    */
    // 该功能已被:class代替
    // activeIndex: function (val) {
    //   console.log(val);
    // }
    searchFunc: function () {
      this.$router.push({ path: '/content2' })
    },
    // ulClass: function (val) { // 被自定义样式取代
    //   // var o = { level_ul: true, open: val.navActive };
    //   // o[`open${val.nextLength}`] = val.navActive; //open(num)动画效果，由于DOM结构没设计好导致无法使用。
    //   // o['open'] = val.navActive;
    //   return { level_ul: true, open: val.navActive };
    // },

    navCreator: function (obj) {
      this.iterator(obj);
      this.languageCreator(obj);
    },

    iterator: function (obj) {
      for (var i in obj) {
        if (obj[i].hasOwnProperty('navActive')) {
          if (sessionStorage.navIndex.indexOf(i) > -1) {
            obj[i].navActive = true;
          }
          this.iterator(obj[i].next);
        }
      }
    },

    languageCreator: function (obj) {
      for (var i in obj) {
        if (obj[i].hasOwnProperty('text')) {
          for (var j in obj[i].text) {
            if (!this.$i18n.messages[j].hasOwnProperty('messages')) {
              this.$i18n.messages[j].messages = {};
            }
            let str = (obj[i].text[j]).toString();
            this.$i18n.messages[j].messages[i] = str;
            // console.log(str);
          }
          if (obj[i].hasOwnProperty('navActive')) {
            this.languageCreator(obj[i].next);
          }
        }
      }
    },

    getNavBar: function (url) {
      this.$http.jsonp(url).then(function (req) {
        this.$data.navInit = req.data;
        this.navCreator(this.navInit);
      }).catch(function () {
        console.log('Restart to connect server...');
        setTimeout(() => {
          this.getNavBar(url);
        }, 1000);
      });
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
  background: url(https://img.vrviu.com/images/about_bg.png) bottom no-repeat;
  background-size: 100% 12.18rem;
  margin-top: 0.5rem;
}









/* -----左侧导航栏------*/

@-moz-document url-prefix() {}

.plus {
  float: right;
  font-size: 0.2rem;
  margin-right: 0.05rem;
  transform: scale(1.35, 1) rotate(180deg);
  -ms-transform: scale(1.35, 1) rotate(180deg);
  -moz-transform: scale(1.35, 1) rotate(180deg);
  -webkit-transform: scale(1.35, 1) rotate(180deg);
  -o-transform: scale(1.35, 1) rotate(180deg);
}

.sub {
  float: right;
  font-size: 0.2rem;
  margin-top: 0.04rem;
  margin-right: 0.05rem;
  transform: scale(1.35, 1);
  -ms-transform: scale(1.35, 1);
  -webkit-transform: scale(1.35, 1);
  -o-transform: scale(1.35, 1);
  -moz-transform: scale(1.35, 1);
}

.left_nav {
  width: 17%;
}

.left_nav ul {
  margin: 0;
  width: 100%;
}

.left_nav>ul:first-of-type {
  margin-top: 0.25rem;
}

.left_nav>ul:last-of-type {
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
  padding-right: 0.2rem;
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform: translate(0, 0);
  transition: background .1s ease-in-out 0s;
}

.left_nav .level_plus {
  color: #333F5C;
  display: block;
  height: 0.6rem;
  font-size: 0.21rem;
  text-align: left;
  line-height: 0.6rem;
  /* padding-left: 0.4rem; */
  padding-right: 0.2rem;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform: translate(0, 0);
  transition: background .1s ease-in-out 0s;
}

.left_nav a:visited {
  color: #333F5C;
}

.left_nav .level_ul {
  color: #333F5C;
}

.left_nav a:hover {
  background: #efefef;
}

.left_nav .level_plus:hover {
  background: #efefef;
}

.left_nav .li_active a {
  color: #369fe8;
  border-right: .04rem solid #368fe8;
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

.left_nav .level_ul {
  height: 0;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform: translate(0, 0);
  transition: height .18s ease-in-out 0s, opacity .18s ease-in-out 0s;
}

.left_nav .open {
  opacity: 1;
  height: 100%;
  /* transform: scale(1,1); */
}









/*---------------------*/

.oTop {
  margin: 0;
  width: 0.5rem;
  height: 0.5rem;
  /* opacity: .85; */
  background: #e9e9e9;
  position: fixed;
  top: 80vh;
  left: 18rem;
  cursor: pointer;
  color: #aaa;
  border-radius: 3px;
  transition: all .1s ease-in-out;
}

.oTop:hover {
  background: #5cadff;
}

.oTop div {
  margin: .038rem auto;
  font-size: 0.5rem;
  transform: scale(1.5, 1);
  -ms-transform: scale(1.5, 1);
  -webkit-transform: scale(1.5, 1);
  -o-transform: scale(1.5, 1);
  -moz-transform: scale(1.5, 1);
}

.oTop div:hover {
  color: white;
}

/* -----右侧显示栏------*/

.right_rev {
  width: 83%;
  border-left: 0.01rem solid #e9e9e9;
}

.right_rev .search {
  width: 100%;
  height: 0.5rem;
}

.right_rev #ser {
  /* margin-bottom: 0.2rem; */
  /* margin-left: 12.8rem; */
  padding-top: .1rem;
  margin-top: .2rem;
  width: 0.4rem;
  cursor: pointer;
  transition: margin .2s ease-in-out 0s;
  -webkit-transition: margin .2s ease-in-out 0s;
  -o-transition: margin .2s ease-in-out 0s;
  -moz-transition: margin .2s ease-in-out 0s;
  display: flex;
  position: absolute;
  opacity: .5;
  z-index: 999;
}

.right_rev #ser:hover {
  opacity: 1;
}

.ser_png {
  margin-left: 12.65rem;
}

.ser_png_active {
  margin-left: 12.25rem;
}

.right_rev input {
  height: .3rem;
  width: 3rem;
  font-size: .2rem;
  padding: .1rem;
  color: #333F5C;
  border: 0.01rem solid rgba(0, 0, 0, .1);
  transition: margin .2s ease-in-out 0s, opacity .2s ease-out 0s;
  -webkit-transition: margin .2s ease-in-out 0s, opacity .2s ease-out 0s;
  -o-transition: margin .2s ease-in-out 0s, opacity .2s ease-out 0s;
  -moz-transition: margin .2s ease-in-out 0s, opacity .2s ease-out 0s;
  margin-top: .2rem;
  /* border: 0;  */
  float: right;
}

.right_rev input:hover {
  border: 0.01rem solid rgba(92, 173, 255, 1);
}

.ser_input {
  margin-right: .2rem;
  opacity: 0;
  visibility: hidden;
}

.ser_input_active {
  margin-right: .6rem;
  opacity: .8
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
</style>
