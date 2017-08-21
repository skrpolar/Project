<template>
    <div id="content">
    </div>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import marked from 'marked'
import hljs from 'highlight.js'
import '@/common/css/atom-one-light.css'

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
        }
    },
    beforeMount: function () {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });
    },
    mounted: function () { // mounted进行页面初始化
        this.$i18n.locale = localStorage.locale;
        var i = -1;
        var routename = '';
        do {
            i = this.$route.name.indexOf('_', i + 1);
            if (i != -1) {
                routename += ' ' + this.$route.name.substr(0, i);
            }
        } while (i != -1);
        sessionStorage.navIndex = routename;
        sessionStorage.index = this.$route.name.replace(/[^0-9]/ig, "");
        document.getElementById('content').style.opacity = 0;
        this.contentCreator();

    },
    props: ['locale'],
    i18n: i18n,
    watch: {
        locale: function (val) {
            this.$i18n.locale = val;
            document.getElementById('content').innerHTML = marked(this.$i18n.messages[val].content);
            this.contentCreator();
        },
        '$route': function (to, from) { // watch中进行页面切换后的初始化
            // console.log(to.path);
            // this.msg = to.path;
            // console.log(this.$route);
            sessionStorage.index = this.$route.name.replace(/[^0-9]/ig, "");
            this.contentCreator();
        }
    },
    updated: function () {
        // console.log(this.$store.state.localpath);
    },
    methods: {
        headerCreator: function () {
            for (var i = 1; i < 7; i++) { // Max h element num is 6
                var h = document.getElementsByTagName(`h${i}`);
                for (var j = 0; j < h.length; j++) {
                    var hyper = document.createElement('a');
                    if (this.locale !== 'en') {
                        h[j].id = h[j].innerHTML;
                        hyper.href = `#${h[j].innerHTML}`;
                    } else { hyper.href = `#${h[j].id}`; }
                    hyper.innerHTML = '#';
                    hyper.style.float = 'left';
                    hyper.style.marginLeft = '-.3rem';
                    hyper.style.textDecoration = 'none';
                    hyper.style.opacity = 0;
                    hyper.style.transition = '.2s opacity ease-in-out 0s';
                    (function (hypers) {
                        h[j].addEventListener('mouseover', function () {
                            hypers.style.opacity = 1;
                        });
                        h[j].addEventListener('mouseout', function () {
                            hypers.style.opacity = 0;
                        });
                    })(hyper);
                    h[j].insertBefore(hyper, h[j].firstChild);
                }
            }
        },
        contentCreator: function () {
            this.$http.jsonp(`http://localhost:8089/getmarkdown?name=${this.$route.name}&locale=${this.locale}`)
                .then(function (req) {
                    var otherLocale = '';
                    if (this.locale == 'en') {
                        otherLocale = 'ch';
                    } else {
                        otherLocale = 'en'
                        this.$http.jsonp(`http://localhost:8089/getmarkdown?name=${this.$route.name}&locale=${otherLocale}`)
                            .then(function (req) {
                                this.$i18n.messages[otherLocale].content = req.data.a;
                            }).catch(function (err) {
                                console.log(err);
                            });
                    }

                    this.$i18n.messages[this.locale].content = req.data.a;
                    document.getElementById('content').innerHTML = marked(this.$i18n.messages[this.locale].content);
                    this.headerCreator();
                    /*
                    var reg = /[\n]/g;
                    var arr = html.split(reg);
                    */
                    document.getElementById('content').style.opacity = 1;
                }).catch(function () {
                    console.log('error');
                })
        }
    }
}
</script>

<style>
#content code {
    /* color: #000; */
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

#content {
    margin: .5rem 1rem 0 1rem;
    font-size: 0.20rem;
    color: #333F5C;
    line-height: 0.36rem;
    text-align: left;
    /* border-top: .01rem #e9e9e9 solid;
    padding-top: .25rem; */
}

#content img {
    max-width: 100%;
}

h1,
h2 {
    padding-bottom: .25rem;
    border-bottom: .01rem #e9e9e9 solid;
}

#content ul {
    list-style-type: disc;
    margin-left: .2rem;
}

#content a:link,
#content a:visited {
    color: #369fe8;
}

#content a:hover {
    text-decoration: underline;
}

#content table {
    border-top: .01rem #e9e9e9 solid;
    border-buttom: .01rem #e9e9e9 solid;
    border-collapse: collapse;
}

#content th,
#content td {
    margin: 0;
    padding: .2rem 0 .2rem .2rem;
    border-bottom: 0.01rem solid #e9e9e9;
    width: 20%;
    text-overflow: ellipsis;
    box-sizing: border-box;
}

#content th {
    background: #f2f2f2;
}

#content tr {
    transition: .1s background ease-in-out 0s, .2s box-shadow ease-in-out 0s,
}

#content tr:hover {
    background: #f9f9f9;
    -webkit-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.39);
}

#content blockquote {
    background: #f9f9f9;
    width: 100%;
    margin: 0;
}

#content blockquote p {
    padding: .2rem .3rem;
    border-left: .05rem solid #ff5e29;
}

#content table {
    width: 100%;
}

#content pre {
    white-space: wrap;
    line-height: .3rem;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    counter-reset: linenumber;
    display: block;
    overflow-x: auto;
    padding: .2rem .3rem;
    color: #1b2127;
    background: #f5f7f8;
    text-shadow: none;
    border-left: .05rem solid #369fe8;
}
</style>


