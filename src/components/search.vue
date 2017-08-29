<template>
    <div id="search_content">
        <div class="return" @click="backRoute()">
            <span class="arrow">^</span>
            <span class="re_content">{{msg}}</span>
        </div>
        <div v-if="search">
            <p v-if="locale=='ch'" class="search_num">共{{searchNum}}条与“{{searchResult}}”相关的结果</p>
            <p v-else class="search_num">About {{searchNum}} results found for '{{searchResult}}'</p>

            <template v-for="(value, key, index) in searchPageList">
                <template v-for="(value2, key2, index2) in value" v-if="searchListActive==key+1">
                    <div class="rev_list" :key="key2">
                        <p class="rev_head">
                            <router-link :to="{ name: value2.router }" v-html="value2.name"></router-link>
                        </p>
                        <p class="rev_content" v-html="value2.content"></p>
                        <p class="bread" :id="value2.router">
                            <span></span>
                        </p>
                    </div>
                </template>
            </template>
            <div class="page_list" v-show="searchPageNumS">
                <template v-for="(value, key, index) in searchPageList">
                    <div :class="{page: true, page_active: searchListActive==key+1}" @click="pageListClick(key)">{{key + 1}}</div>
                </template>
            </div>
            <div class="page_list_right" v-show="!searchPageNumS">
                <div v-show="searchListActive>1" class="page rotate" @click="searchListActive--">
                    <span
><</span></div>
                <div class="page_single">{{`${searchListActive} / ${searchPageList.length}`}}</div>
                <div v-show="searchListActive<searchPageList.length" class="page rotate_right" @click="searchListActive++"><span>></span></div>
                <div><input type="text" id="page_input" v-model="goNum" @keydown.enter="goPage()"></div>
                <div class="page" @click="goPage()">{{go}}</div>
            </div>
        </div>
        <div v-else>
            <p v-if="locale=='ch'" class="not_search ch">没有与“{{searchResult}}”相关的结果。</p>
            <p v-else class="not_search en">Your search - {{searchResult}} - did not match any documents.</p>
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
            go: '',
            goNum: '',
            searchList: {},
            searchNum: 0,
            searchResult: '',
            search: true,
            searchPageList: {},
            searchPageNumS: true,
            searchListActive: 1 // default index 1
        }
    },
    i18n: i18n,
    props: ['locale', 'searchContent', 'navInit'],
    mounted() { // 初始化查询
        this.$i18n.locale = this.locale;
        if (this.locale == 'en') {
            this.msg = 'back';
            this.go = 'Go';
        } else if (this.locale == 'ch') {
            this.msg = '返回';
            this.go = '前往';
        }
        this.searchCreator();
        this.searchListActive = 1;
    },
    updated() {
        this.getDot(190);
        this.getBread();
    },
    watch: {
        locale: function(val) {
            this.$i18n.locale = val;
            this.$router.push({ path: `/search?lang=${this.locale}&s=${this.searchContent}` });
            if (this.locale == 'en') {
                this.msg = 'back';
                this.go = 'Go';
            } else if (this.locale == 'ch') {
                this.msg = '返回';
                this.go = '前往';
            }
        },
        '$route': function(to, from) { // 参数切换查询
            this.searchCreator();
            this.goNum = 1;
            this.searchListActive = 1;
        }
    },
    methods: {
        goPage: function() {
            var re = /^[0-9]*[1-9][0-9]*$/;
            if (re.test(this.goNum)) {
                if (0 < this.goNum && this.goNum <= this.searchPageList.length) {
                    this.searchListActive = this.goNum;
                }
            }
        },
        pageListClick: function(key) {
            this.searchListActive = key + 1;
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        },
        backRoute: function() {
            this.$router.push({ name: `menu${sessionStorage.index}` });
        },
        dotCreator: function(str, index, obj) {
            if (str.substr(index, 1).search(/[A-Za-z]/) !== -1) {
                this.dotCreator(str, index + 1, obj);
            } else {
                obj.innerHTML = str.substr(0, index) + '...';
            }
        },
        resultDotCreator: function(str, len) {
            if (str.length > len) {
                return str.substr(0, len) + '...';
            } else return str;
        },
        getDot: function(le) {
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
        getBread: function() {
            var h = document.getElementsByClassName('bread');
            var len = h.length;
            for (var i = 0; i < len; i++) {
                this.iteratorb(this.navInit, h[i], this.locale, '');
            }
        },
        iteratorb: function(obj, n, lang, str) {
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
        notSearch: function(s, len) {
            this.search = false;
            this.searchResult = this.resultDotCreator(s, len);
            this.searchList = [];
        },
        splitListCreator: function(splitNum) {
            var splitList = [];
            for (var i = 0; i < this.searchNum;) {
                var arr = [];
                for (var j = 0; j < splitNum; j++) {
                    if (this.searchList[i + j] !== undefined) {
                        arr.push(this.searchList[i + j]);
                    }
                }
                splitList.push(arr);
                i += splitNum;
            }
            this.searchPageList = splitList;
        },
        searchCreator: function() {
            var p = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/gi;
            var s = this.$route.query.s;
            if (s !== '') {
                if ((s).search(p) == -1) {
                    this.$http.jsonp(`http://localhost:8089/search?lang=${this.locale}&s=${s}`)
                        .then(function(req) {
                            this.searchList = req.data;
                            this.searchNum = this.searchList.length;
                            this.searchResult = s;
                            var splitList = [];
                            var splitNum = 2;
                            if (this.searchNum != 0) {
                                this.search = true;
                                this.splitListCreator(splitNum);
                                if (this.searchPageList.length > 3) {
                                    this.searchPageNumS = false;
                                } else this.searchPageNumS = true;
                            } else {
                                this.notSearch(s, 80);
                            }
                        }).catch(function() {
                            console.log('error');
                        })
                } else {
                    this.notSearch(s, 80);
                }
            } else {
                this.notSearch(s, 80);
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
    height: 100%;
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

#search_content .page_list {
    display: flex;
    margin-left: .5rem;
}

#search_content .page_list_right {
    display: flex;
    justify-content: flex-end;
    /* margin-left: 5rem; */
}

#search_content .page {
    width: .5rem;
    height: .5rem;
    font-size: .18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
    color: #525252;
    cursor: pointer;
    user-select: none;
    margin-right: .18rem;
    transition: .1s background ease-in-out 0s, .1s box-shadow ease-in-out 0s, .1s color ease-in-out 0s, .1s transform ease-in-out 0s;
}

#search_content .rotate {
    margin-right: .08rem;
}

#search_content .rotate span {
    transform: scale(1.6, 2.5) translateY(-.005rem) translateX(-.01rem);
    -ms-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(-.01rem);
    -moz-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(-.01rem);
    -webkit-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(-.01rem);
    -o-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(-.01rem);
    transition: .1s scale ease-in-out 0s, .1s translateY ease-in-out 0s, .1s translateX ease-in-out 0s;
}

#search_content .rotate_right span {
    transform: scale(1.6, 2.5) translateY(-.005rem) translateX(.01rem);
    -ms-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(.01rem);
    -moz-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(.01rem);
    -webkit-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(.01rem);
    -o-transform: scale(1.6, 2.5) translateY(-.005rem) translateX(.01rem);
    transition: .1s scale ease-in-out 0s, .1s translateY ease-in-out 0s, .1s translateX ease-in-out 0s;
}

#search_content [class="page rotate"]:hover span {
    transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -ms-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -moz-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -webkit-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -o-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
}

#search_content [class="page rotate_right"]:hover span {
    transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -ms-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -moz-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
    -webkit-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(.01rem);
    -o-transform: scale(1.7, 2.6) translateY(-.006rem) translateX(-.015rem);
}

#search_content #page_input {
    color: #525252;
    width: .4rem;
    height: .48rem;
    background: #f9f9f9;
    border: .01rem #e1e1e1 solid;
    padding: 0 .1rem;
    transition: .2s border ease-in-out 0s;
    margin-right: .08rem;
}

#search_content #page_input:hover {
    border: .01rem #5cadff solid;
}

#search_content #page_input:focus {
    border: .01rem #5cadff solid;
}

#search_content .page_single {
    padding: 0 .2rem;
    height: .5rem;
    font-size: .18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
    color: #525252;
    margin-right: .08rem;
}

#search_content .page_active {
    color: white;
    background: #5cadff;
}

#search_content .page:hover {
    color: white;
    background: #5cadff;
    transform: scale(1.1, 1.1);
    -webkit-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
}

#search_content .page:active {
    background: #1b8cff;
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


