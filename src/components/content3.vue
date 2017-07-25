<template>
    <div id="content3">
        <div class="content3_head">Content3</div>
        <!-- <div class="content3_content" v-if="locale=='ch'">chinese</div>
                <div class="content3_content" v-else>english</div> -->
        <div class="content3_content">{{ $t('messages.msg') }}</div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

var i18n = new VueI18n({
    locale: 'ch',
    messages: {
        ch: {
            messages: {
                msg: '内容三',
            }
        },
        en: {
            messages: {
                msg: 'content3',
            }
        }
    }
});

export default {
    data() {
        return {
            msg: 'Content3'
        }
    },
    mounted: function () {

    },
    props: ['locale'],
    i18n: i18n,
    watch: {
        locale: function (val) {
            this.$i18n.locale = val;
        }
    },
}
</script>

<style scoped>
.content3_head {
    font-size: 0.4rem;
    color: #333F5C;
    margin-top: 1rem;
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


