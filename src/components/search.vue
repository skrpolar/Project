<template>
    <div id="search_content">
        <div class="return" @click="backRoute()">
            <span class="arrow">^</span>
            <span class="re_content">{{msg}}</span>
        </div>
        <div v-show="this.search">
            <p v-if="this.locale=='ch'" class="search_num">共{{searchNum}}条与“{{searchResult}}”相关的结果</p>
            <p v-else class="search_num">About {{searchNum}} results found for '{{searchResult}}'</p>
        </div>
        <template v-for="(value, key, index) in searchList">
            <div class="rev_list" :key="key">
                <p class="rev_head">
                    <router-link :to="{ name: value.router }" v-html="value.name"></router-link>
                </p>
                <p class="rev_content" v-html="value.content"></p>
                <p class="bread" :id="value.router">
                    <span></span>
                </p>
            </div>
        </template>
        <div v-show="!this.search">
            <p v-if="this.locale=='ch'" class="not_search ch">没有与“{{searchResult}}”相关的结果。</p>
            <p v-else class="not_search en">Your search - {{searchResult}} - did not match any documents.</p>
        </div>
        <div class="page">1</div>
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
            searchList: {},
            searchNum: 0,
            searchResult: '',
            search: true
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
        this.searchCreator();
    },
    updated() {
        this.getDot(190);
        this.getBread();
        // this.getTitle();
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
            document.getElementById('search_content').style.opacity = 0;
        },
        '$route': function (to, from) { // 参数切换查询
            this.searchCreator();
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
        },
        getTitle: function () {
            var h = document.getElementsByClassName('rev_head');
            var len = h.length;
            for (var i = 0; i < len; i++) {
                this.iterator(this.navInit, h[i], this.locale);
            }
            document.getElementById('search_content').style.opacity = 1;
        },
        iterator: function (obj, n, lang) {
            for (var i in obj) {
                if (i == n.firstChild.id) {
                    n.firstChild.innerText = obj[i].text[lang];
                } else if (obj[i].hasOwnProperty('navActive')) {
                    this.iterator(obj[i].next, n, lang);
                }
            }
        },
        getBread: function () {
            var h = document.getElementsByClassName('bread');
            var len = h.length;
            for (var i = 0; i < len; i++) {
                this.iteratorb(this.navInit, h[i], this.locale, '');
            }
        },
        iteratorb: function (obj, n, lang, str) {
            for (var i in obj) {
                if (i == n.id) {
                    if (str == '') {
                        n.firstChild.innerText = `${obj[i].text[lang]}`;
                    } else {
                        n.firstChild.innerText = `${str} > ${obj[i].text[lang]}`;
                    }
                } else if (obj[i].hasOwnProperty('navActive')) {
                    if (str == '') {
                        this.iteratorb(obj[i].next, n, lang, `${obj[i].text[lang]}`);
                    } else {
                        this.iteratorb(obj[i].next, n, lang, `${str} > ${obj[i].text[lang]}`);
                    }
                }
            }
        },
        searchCreator: function () {
            var p = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/gi;
            var s = this.$route.query.s;
            if (s !== '') {
                if ((s).search(p) == -1) {
                    this.$http.jsonp(`http://localhost:8089/search?lang=${this.locale}&s=${s}`)
                        .then(function (req) {
                            this.searchList = req.data;
                            this.searchNum = this.searchList.length;
                            this.searchResult = s;
                            if (this.searchNum != 0) {
                                this.search = true;
                            } else {
                                this.search = false;
                            }
                        }).catch(function () {
                            console.log('error');
                        })
                } else {
                    this.search = false;
                    this.searchResult = s;
                    this.searchList = [];
                }
            } else {
                this.search = false;
                this.searchResult = s;
                this.searchList = [];
            }
        }
    }
}
</script>

<style>
#search_content em {
    color: red;
    font-style: normal;
}

#search_content {
    margin: .5rem 1rem 0 1rem;
    font-size: 0.18rem;
    color: #333F5C;
    line-height: 0.36rem;
    text-align: left;
}

#search_content .return {
    position: relative;
    width: .65rem;
    top: -.58rem;
    left: -.5rem;
    height: rem;
    font-size: .18rem;
    color: #333F5C;
    cursor: pointer;
}

#search_content .rev_list {
    margin-bottom: .5rem;
    width: 91.05%;
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

#search_content .page {
    width: .35rem;
    background: #e9e9e9;
    text-align: center;
    color: #525252;
}

#search_content .search_num {
    margin: 0 0 .5rem;
}

#search_content .not_search {
    margin-top: 1.5rem;
    text-align: center;
    line-height: .8rem;
    word-wrap: break-word;
    word-break: break-all;
}

.ch {
    font-size: .5rem;
}

.en {
    font-size: .3rem;
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


