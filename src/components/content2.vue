<template>
    <div id="content2">
        <div class="r_main_content">
            <div class="r_head">公众号接口权限说明</div>
            <p>不同的公众号类型具备不同的接口权限，具体如下表： 请注意：</p>
            <p>1、微博认证视作未认证,因此微博认证的公众号不会拥有微信认证公众号特有的接口。</p>
            <p>2、微信认证分为资质认证和名称认证两部分，只需要资质认证通过，就可获得接口。</p>
            <table class="r_table">
                <tbody>
                    <tr>
                        <th>接口名称</th>
                        <th>未认证订阅号</th>
                        <th>微信认证订阅号</th>
                        <th>未认证服务号</th>
                        <th>微信认证服务号</th>
                    </tr>
                    <tr>
                        <td>基础支持-获取access_token</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>基础支持-获取微信服务器IP地址	</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>接收消息-验证消息真实性</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>发送消息-被动回复消息</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>发送消息-客服接口</td>
                        <td>无</td>
                        <td>有</td>
                        <td>无</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>发送消息-群发接口</td>
                        <td>无</td>
                        <td>有</td>
                        <td>无</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>用户管理-用户分组管理</td>
                        <td>无</td>
                        <td>有</td>
                        <td>无</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>用户管理-设置用户备注名</td>
                        <td>无</td>
                        <td>有</td>
                        <td>无</td>
                        <td>有</td>
                    </tr>
                    <tr>
                        <td>用户管理-获取用户地理位置</td>
                        <td>无</td>
                        <td>有</td>
                        <td>无</td>
                        <td>有</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        sessionStorage.index = '12';
        sessionStorage.navIndex = 'menu1';
    }
}
</script>

<style>
.r_main_content {
    width: 80%;
    margin: 0 auto;
    color: #333F5C;
    font-size: 0.2rem; /* 默认字体 */
}

.r_head {
    font-size: 0.3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 0.01rem solid #e9e9e9;
    padding-bottom: 0.4rem; 
    text-align: left; 
}

.r_main_content p {
    font-size: 0.2rem;
    text-align: left;
    line-height: 0.35rem;
}

.info {
    padding: 0.2rem 0.5rem; 
    background: #f5f5f5;
}

.bold_head {
    text-align: left;
    font-weight: 900;
    font-size: 0.22rem;
}

.r_table {
    border: 0.01rem solid #e9e9e9;
}

.r_table th, .r_table td{
    margin: 0;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 0.01rem solid #e9e9e9;
    width: 20%;
    text-overflow: ellipsis;
    box-sizing: border-box;
}

.r_table th {
    background: #f2f2f2;
}

.r_table tr:last-child td{
    border: 0rem;
}
</style>


