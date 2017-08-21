<template>
    <div id="search_content">
        <div class="return" @click="backRoute()">
            <span class="arrow">^</span>
            <span class="re_content">{{msg}}</span>
        </div>
        <template v-for="(value, key, index) in searchList">
            <div class="rev_list">
                <p class="rev_head">
                    <a href="#">{{value.name}}</a>
                </p>
                <p class="rev_content" v-html="value.content"></p>
                <p class="bread"></p>
            </div>
        </template>

        <div class="rev_list">
            <p class="rev_head">
                <a href="#">Electron</a>
            </p>
            <p class="rev_content">The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on,The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on</p>
            <p class="bread">
                <span>开始 > 公众号接口权限说明 > 入门指引 > 内容</span>
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

var i18n = new VueI18n({
    locale: this.locale,
    messages: {
        ch: {},
        en: {}
    }
});

export default {
    data() {
        return {
            msg: '',
            searchList: {}
        }
    },
    i18n: i18n,
    props: ['locale', 'searchContent', 'navInit'],
    mounted() { // 初始化查询
        this.$i18n.locale = this.locale;
        if (this.locale == 'en') {
            this.msg = 'back';
        } else if (this.locale == 'ch') {
            this.msg = '返回';
        }
        this.$http.jsonp(`http://localhost:8089/search?lang=${this.locale}&s=${this.$route.query.s}`)
            .then(function (req) {
                this.searchList = req.data;
            }).catch(function () {
                console.log('error');
            })


    },
    updated() {
        this.getDot(180);
    },
    watch: {
        locale: function (val) {
            this.$i18n.locale = val;
            this.$router.push({ path: `/search?lang=${this.locale}&s=${this.searchContent}` });
            if (this.locale == 'en') {
                this.msg = 'back';
            } else if (this.locale == 'ch') {
                this.msg = '返回';
            }
        },
        '$route': function (to, from) { // 参数切换查询
            this.$http.jsonp(`http://localhost:8089/search?lang=${this.locale}&s=${this.searchContent}`)
                .then(function (req) {
                    this.searchList = req.data;
                }).catch(function () {
                    console.log('error');
                })
        }
    },
    methods: {
        backRoute: function () {
            this.$router.back();
        },
        dotCreator: function (str, index, obj) {
            if (str.substr(index, 1).search(/[A-Za-z]/) !== -1) {
                this.dotCreator(str, index + 1, obj);
            } else {
                obj.innerHTML = str.substr(0, index) + '...';
            }
        },
        getDot: function (le) {
            var h = document.getElementsByClassName('rev_content');
            var len = h.length;
            for (var i = 0; i < len; i++) {
                let r = h[i].innerHTML;
                let l = r.length;
                if (l > le) {
                    this.dotCreator(r, le, h[i]);
                }
            }
        }
    }
}
</script>

<style>
#search_content {
    margin: .5rem 1rem 0 1rem;
    font-size: 0.20rem;
    color: #333F5C;
    line-height: 0.36rem;
    text-align: left;
}

#search_content .return {
    position: relative;
    width: .65rem;
    top: -.7rem;
    left: -.5rem;
    height: rem;
    font-size: .2rem;
    color: #333F5C;
    cursor: pointer;
}

#search_content .rev_list {
    margin-bottom: .5rem;
    width: 91%;
    margin-left: -.5rem;
    padding: .2rem 1rem .2rem 1rem;
    transition: .1s background ease-in-out 0s, .1s box-shadow ease-in-out 0s;
}

#search_content .rev_list:hover {
    background: #f9f9f9;
    -webkit-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
}

#search_content .rev_head {
    font-size: .25rem;
    margin-bottom: -.15rem;
}

#search_content .rev_content {
    margin-bottom: -.15rem;
}

#search_content .rev_content:hover {
    /* text-overflow: inherit;
    overflow: visible;
    white-space: normal; */
}

#search_content a {
    color: #369fe8;
}

#search_content a:link,
#search_content a:visited {
    color: #369fe8;
}

#search_content a:hover {
    text-decoration: underline;
}

#search_content .bread span {
    color: #369fe8;
    user-select: none;
    cursor: default;
}

.return .arrow {
    position: absolute;
    transform: scale(1, 1.35) rotate(270deg);
    -ms-transform: scale(1, 1.35) rotate(270deg);
    -moz-transform: scale(1, 1.35) rotate(270deg);
    -webkit-transform: scale(1, 1.35) rotate(270deg);
    -o-transform: scale(1, 1.35) rotate(270deg);
    user-select: none;
}

.return .re_content {
    padding-left: .15rem;
}
</style>


