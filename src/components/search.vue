<template>
    <div id="search_content">
        {{ msg }}
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    data () {
        return {
            msg: 'qwes'
        }
    },
    mounted () {
        this.msg = this.$route.query.wd;
    },
    watch: {
        '$route': function (to, from) { 
            this.msg = this.$route.query.wd;
        }
    },
}
</script>

<style>

</style>


