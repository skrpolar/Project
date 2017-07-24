<template>
    <div id="content3">
        <div class="content3_head">Content3</div>
        <div class="content3_content">{{ thisLocale }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Content3',
            thisLocale: this.$route.params.locale,
        }
    },
    mounted: function() {
        
    }
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


