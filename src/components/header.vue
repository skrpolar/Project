<template>
    <div class="page-header">
        <div class="Header_right" style="position:absolute;right:0.5rem">
            <a href="#" @click="changeLanguage('ch')" :class="{'active':locale2=='ch'}">中文</a>
            <a href="" style="margin:0 0.1rem">/</a>
            <a href="#" @click="changeLanguage('en')" :class="{'active':locale2=='en'}">ENG</a>
        </div>
        <div class="Header">
            <a href="./index.html?animate=false" v-if="locale2=='ch'">
                <img src="https://img.vrviu.com/images/LOGO.png" alt="">
            </a>
            <a href="./index.html?animate=false" v-else>
                <img src="https://img.vrviu.com/images/LOGO2.png" alt="">
            </a>
            <ul class="Header_right">
                <li v-for="loop in loops" :class="{'active':index3==loop.index}" @click="index3=loop.index">
                    <a :href="loop.url">{{loop.title}} </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
// import '../common/css/reset.css';
// import '../common/css/animate.css';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
var i18n = new VueI18n({})
export default {
    name: 'Header',
    data() {
        return {
            loops: [
                {
                    "title": "产品服务",
                    "index": "0",
                    "url": "#" // ./index.html?animate=false
                },
                {
                    "title": "关于我们",
                    "index": "1",
                    "url": "#" // ./index.html?animate=false
                },
                {
                    "title": "加入我们",
                    "index": "2",
                    "url": "#" // ./connect.html
                },
                {
                    "title": "技术文档",
                    "index": "3",
                    "url": "#"
                }
            ],
            locale2: this.locale,
            index3: this.index
        }
    },
    i18n: i18n,
    props: ['index', "isShow", "locale"],
    mounted() {
        var language = navigator.language; //取得浏览器版本语言
        var initLanguage = "";
        if (language.indexOf('zh') > -1) initLanguage = "ch"; //中文页面
        if (language.indexOf('en') > -1) initLanguage = "en"; //英文页面
        this.$i18n.locale = localStorage.locale || initLanguage;
        this.locale2 = localStorage.locale || initLanguage;
        // this.$i18n.locale = "ch";
    },
    watch: {
        locale2: function (val) {
            this.$i18n.locale = val;
            　　　　if (val == 'en') {
                this.loops[0].title = "Features";
                this.loops[1].title = "About";
                this.loops[2].title = "Join Us";
                this.loops[3].title = "Documentation";
            } else {
                this.loops[0].title = "产品服务";
                this.loops[1].title = "关于我们";
                this.loops[2].title = "加入我们";
                this.loops[3].title = "技术文档";

            }
            this.$emit("on-locale-change", val);
        }
    },
    methods: {
        changeLanguage: function (val) {
            localStorage.locale = val;
            this.locale2 = val;
        }
    }
}
</script>
<style>
.icon_ch,
.icon_en {
    background: url(https://img.vrviu.com/images/home_nva_img_English.png) no-repeat;
    background-size: cover;
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    vertical-align: middle;
    margin-right: 0.1rem;
}

.icon_en {
    background: url(https://img.vrviu.com/images/home_nva_img_Chinese.png) no-repeat;
    background-size: cover;
}

.page-header img {
    position: absolute;
    left: 0.3rem;
    top: 0.3rem;
    width: 1.56rem;
    height: 0.34rem;
}

.page-header {
    background: #fff;
    line-height: 1;
    width: 100%;
    position: relative;
    z-index: 9;
}

.Header {
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    vertical-align: middle;
    width: 80%;
    background: #fff;
    font-size: 0.14rem;
    height: 1rem;
}

.Header_right {
    font-size: 0.14rem;
    z-index: 100;
    float: right;
    margin-top: 0.4rem
}

.Header_right a {
    color: #404040;
    font-size: 0.18rem!important;
    text-decoration-line: none
}

.Header_right a:hover {
    color: #369fe8;
}

.Header_right .active {
    color: #369fe8!important;
}

.active {
    background: url(https://img.vrviu.com/images/NVA_ICON.png) center 0.3rem no-repeat;
}

.Header_right li {
    height: 0.5rem;
    float: left;
    color: #404040;
    margin-right: 0.5rem;
}
</style>