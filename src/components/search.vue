<template>
    <div id="search_content">
        <div class="return" @click="backRoute()">
            <span class="arrow">^</span>
            <span class="re_content">{{$t('backC')}}</span>
        </div>
        {{ msg }}
    </div>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

var i18n = new VueI18n({
    locale: this.locale,
    messages: {
        ch: {
            backC: '返回'
        },
        en: {
            backC: 'back'
        }
    }
});

export default {
    data() {
        return {
            msg: ''
        }
    },
    props: ['locale', 'searchContent'],
    i18n: i18n,
    mounted() { // 初始化查询
        this.$i18n.locale = localStorage.locale;
        this.msg = this.$route.query.s;
    },
    watch: {
        locale: function (val) {
            this.$i18n.locale = val;
            this.$router.push({ path: `/search?lang=${this.locale}&s=${this.searchContent}` });
        },
        '$route': function (to, from) { // 参数切换查询
            this.msg = this.$route.query.s;
        }
    },
    methods: {
        backRoute: function() {
            this.$router.back();
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


