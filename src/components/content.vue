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
        ch: {
        },
        en: {
        }
    }
});

export default {
    data() {
        return {
            msg: ''
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
        // sessionStorage.index = '41';
        // sessionStorage.navIndex = 'menu4';
        // console.log(this.$route);  
        sessionStorage.index = this.$route.name.replace(/[^0-9]/ig, "");
        if (this.$route.name.length > 5) {
            var i = -1;
            var routename = '';
            do {
                i = this.$route.name.indexOf('_', i + 1);
                if (i != -1) {
                    routename += ' ' + this.$route.name.substr(0, i);
                }
            } while (i != -1);
            sessionStorage.navIndex = routename;
        }

        this.$http.jsonp(`http://localhost:8089/getmarkdown?name=${this.$route.name}`)
            .then(function (req) {
                document.getElementById('content').innerHTML = marked(req.data.a);
            }).catch(function () {
                console.log('error');
            })


    },
    props: ['locale'],
    i18n: i18n,
    watch: {
        locale: function (val) {
            this.$i18n.locale = val;
        },
        '$route': function (to, from) { // watch中进行页面切换后的初始化
            // console.log(to.path);
            // this.msg = to.path;
            // console.log(this.$route);
            sessionStorage.index = this.$route.name.replace(/[^0-9]/ig, "");
            this.$http.jsonp(`http://localhost:8089/getmarkdown?name=${this.$route.name}`)
                .then(function (req) {
                    document.getElementById('content').innerHTML = marked(req.data.a);
                }).catch(function () {
                    console.log('error');
                })
        }
    },
    updated: function () {
        // console.log(this.$store.state.localpath);
    }
}
</script>

<style>

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

h1, h2, h3, h4, h5, h6 {
    padding-bottom: .25rem;
    border-bottom: .01rem #e9e9e9 solid;
}

h1:before, h2:before, h3:before, h4:before, h5:before, h6:before {
    content: "#";
    color: #0366d6;
    position: absolute;
    left: 4.9rem;
    opacity: 0;
    cursor: pointer;
    transition: .2s opacity ease-in-out 0s;
}

h1:hover:before, h2:hover:before, h3:hover:before, h4:hover:before, h5:hover:before, h6:hover:before {
    opacity: 1;
}

#content ul {
    list-style-type: disc;
    margin-left: .2rem;
}

#content a:link,#content a:visited {
    color: #0366d6;
}

#content a:hover {
    text-decoration: underline;
}

 pre {
    display: block;
    overflow-x: auto;
    padding: .2rem .3rem;
    /* color: #abb2bf; */
    color: #1b2127;
    /* background: #282c34; */
    background: #f5f7f8;
}

</style>


