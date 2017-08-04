<template>
    <div id="content">
        <h3>Something...</h3>
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);



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
    mounted: function () { // mounted进行页面初始化
        this.$i18n.locale = localStorage.locale;
        // sessionStorage.index = '41';
        // sessionStorage.navIndex = 'menu4';
        console.log(this.$route);  
        sessionStorage.index = this.$route.name.replace(/[^0-9]/ig,"");
        if(this.$route.name.length > 5){
            sessionStorage.navIndex = this.$route.name.substr(0,5);
        }
        this.$http.get('http://localhost:90/getmarkdown').then(function (req) {
            document.getElementById('content').innerHTML = req.data;
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
            this.msg = to.path;
            console.log(this.$route);
        }
    },
    updated: function () {
        // console.log(this.$store.state.localpath);
    },
    computed: {
        localpath: {
            get: function () {
                // console.log(this.$store.state.localpath);
                return this.$store.state.localpath;
            }
        }
    }
}
</script>

<style scoped>
.content3_head {
    font-size: 0.4rem;
    color: #333F5C;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.content3_content {
    margin: 0 1rem;
    font-size: 0.20rem;
    color: #333F5C;
    line-height: 0.36rem;
    text-align: left;
}
</style>


