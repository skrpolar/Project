<template>
    <div class="footer">
        <div class="footer_container">
            <div class="fl">
                <p>
                    合作电话：0755-86960615
                    <span style="margin:0 0.2rem">|</span>合作邮箱：business@vrviu.com
                </p>
                <p>
                    公司地址：深圳市南山区科技园琼宇路特发信息科技大厦1-2楼
                </p>
                <p class="copyright">
                    © 2016-2017 vrviu.com 版权所有 粤ICP备17011655号
                </p>
            </div>
            <div class="fr">
                <div class="weixin" v-show="showWeiXin">
                    <img src="https://img.vrviu.com/images/weixin.png" alt="" style="width:1.59rem;1.86rem;">
                    <p class="weixin-title">关注微信公众号</p>
                </div>
                <div style="margin-top:-0.22rem">
                    <span class="weixin_nohover" @mouseover="showWeiXin=true" @mouseleave="showWeiXin=false"></span>
                    <a href="http://weibo.com/p/1006066122607798/home" target="_blank">
                        <span class="weibo_nohover"></span>
                    </a>
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showWeiXin: false
        }
    }
}
</script>
<style scoped>
.weixin {
    position: absolute;
    top: -1.2rem;
    right: 0.34rem;
}

.weixin-title {
    position: absolute;
    bottom: 0.3rem;
    text-align: center;
    font-size: 0.14rem;
    width: 100%;
}

.weixin_nohover,
.weibo_nohover {
    background: url(https://img.vrviu.com/images/weixin-nohover.png);
    width: 0.51rem;
    height: 0.51rem;
    background-size: cover;
    display: inline-block;
    cursor: pointer;
}

.weibo_nohover {
    background: url(https://img.vrviu.com/images/weibo-nohover.png);
    width: 0.51rem;
    height: 0.51rem;
    background-size: cover;
    display: inline-block;
    cursor: pointer;
}

.weibo_nohover:hover {
    background: url(https://img.vrviu.com/images/weibo-hover.png);
    width: 0.51rem;
    height: 0.51rem;
    background-size: cover;
    display: inline-block;
    cursor: pointer;
}

.weixin_nohover:hover {
    background: url(https://img.vrviu.com/images/weixin-hover.png);
    width: 0.51rem;
    height: 0.51rem;
    background-size: cover;
    display: inline-block;
    cursor: pointer;
}



.fl {
    float: left;
}

.fl p {
    text-align: left;
}

.fr {
    float: right;
}

.footer {
    background: #fff;
    text-align: center;
    /* position: absolute; */
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2rem;
}

.footer p {
    font-size: 0.16rem;
    color: #717171;
    margin: 0;
    line-height: 0.32rem;
}

.footer_container {
    width: 12rem;
    margin: 0 auto;
    padding-top: 0.55rem;
    position: relative;
}

.footer p.copyright {
    font-size: 0.12rem;
    color: #AFAFAF;
}
</style>