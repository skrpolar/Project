<template>
    <div id="ul_loop">
        <template v-for="(value, key, index) in nav">
            <template v-if="value.hasNext">
                <li :title="value.text[locale]" :class="[ `level${value.level}`, {level_plus:value.hasNext} ]" @click="value.navActive=!value.navActive">
                    <div>
                        <span :class="[ value.navActive ? 'sub' : 'plus' ]">^</span>
                        <a :style="{ paddingLeft: 0.35 + (value.level)*0.1 + 'rem' }" class="nav_title">{{ value.text[locale] }}</a>
                    </div>
                </li>
                <ul :class="[ 'level_ul', {open: value.navActive} ]">
                    <LeftNav :nav="value.next" :locale="locale" :liIndex="liIndex"></LeftNav>
                </ul>
            </template>
            <template v-else>
                <li :class="[ `level${value.level}`, {li_active:liIndex==value.liActive} ]">
                    <router-link :style="{ paddingLeft: 0.35 + (value.level)*0.1 + 'rem' }" :title="value.text[locale]" :to="{ name: key }">{{ value.text[locale] }}</router-link>
                </li>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    name: 'LeftNav',
    data() {
        return {}
    },
    props: ['locale', 'nav', 'liIndex', 'lev'],
    components: {},
    mounted() {
    }
}
</script>

<style>

#ul_loop {
    font-size: 0;
}

</style>


