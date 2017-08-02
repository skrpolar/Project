<template>
    <div>
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
                     <Iterator :locale="locale" :navInit="value.next"c:liActive="liActive"></Iterator> 
                </ul>
            </template>
            <template v-else>
                <li :class="[ 'level1', {li_active:liIndex==value.liActive} ]" @click="liIndex=value.liActive">
                    <router-link :title="$t(`messages.${key}`)" :to="{ path: value.path }">{{ $t(`messages.${key}`) }}</router-link>
                </li>
            </template>
        </template>
    </div>
</template>

<script>
import Vue from 'vue';
import Iterator from './iterator.vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

var i18n = new VueI18n({
    locale: 'ch',
    messages: {
        ch: {
            messages: {
                menu1: '开始前必读',
                menu1_1: '介绍',
                menu1_2: '公众号接口权限说明',
                menu1_3: '入门指引',
                menu2: '开始开发',
                menu2_1: '接入指南',
                menu3: '自定义菜单',
                menu3_1: '内容五',
                menu4: '素材管理',
                menu4_1: '内容六',
                menu5: '用户管理',
                menu5_1: '内容七'
            },
            search: {
                msg: '搜索点什么...',
            }
        },
        en: {
            messages: {
                menu1: 'Starrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt',
                menu1_1: 'Introduction',
                menu1_2: 'Public address interface',
                menu1_3: 'Getting Started Guideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                menu2: 'Header2',
                menu2_1: 'Content4',
                menu3: 'MainBody',
                menu3_1: 'Content5',
                menu4: 'Footer',
                menu4_1: 'Content6',
                menu5: 'Footer2',
                menu5_1: 'Content7'
            },
            search: {
                msg: 'Search something...'
            }
        }
    }
});

export default {
    props: ['locale', 'navInit','liActive'],
    data: function () {
        return {

        }
    },
    i18n: i18n,
    mounted: function () {
        this.$i18n.locale = localStorage.locale;
        this.$data.navInit = this.navInit;
        this.$data.liActive = this.liActive;
    },
    i18n: i18n,
    watch: {
        locale: function (val) {
            this.$i18n.locale = val;
        }
    },
    components: {
        Iterator
    }
}
</script>

<style>

</style>
