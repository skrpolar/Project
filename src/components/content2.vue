<template>
    <div id="content2">
        <div class="r_main_content">
            <div class="r_head" id="head1">
                {{ $t('content.title') }}
                <a href="#head1">#</a>
            </div>
            <p>{{ $t('content.msg') }}</p>
            <p>{{ $t('content.msg2') }}</p>
            <p>{{ $t('content.msg3') }}</p>
            <table class="r_table">
                <tbody>
                    <tr>
                        <th>{{ $t('content2.msg') }}</th>
                        <th>{{ $t('content2.msg2') }}</th>
                        <th>{{ $t('content2.msg3') }}</th>
                        <th>{{ $t('content2.msg4') }}</th>
                        <th>{{ $t('content2.msg5') }}</th>
                    </tr>
                    <tr>
                        <td>{{ $t('content3.msg') }}</td>
                        <td>{{ $t('content3.msg2') }}</td>
                        <td>{{ $t('content3.msg3') }}</td>
                        <td>{{ $t('content3.msg4') }}</td>
                        <td>{{ $t('content3.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content4.msg') }}</td>
                        <td>{{ $t('content4.msg2') }}</td>
                        <td>{{ $t('content4.msg3') }}</td>
                        <td>{{ $t('content4.msg4') }}</td>
                        <td>{{ $t('content4.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content5.msg') }}</td>
                        <td>{{ $t('content5.msg2') }}</td>
                        <td>{{ $t('content5.msg3') }}</td>
                        <td>{{ $t('content5.msg4') }}</td>
                        <td>{{ $t('content5.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content6.msg') }}</td>
                        <td>{{ $t('content6.msg2') }}</td>
                        <td>{{ $t('content6.msg3') }}</td>
                        <td>{{ $t('content6.msg4') }}</td>
                        <td>{{ $t('content6.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content7.msg') }}</td>
                        <td>{{ $t('content7.msg2') }}</td>
                        <td>{{ $t('content7.msg3') }}</td>
                        <td>{{ $t('content7.msg4') }}</td>
                        <td>{{ $t('content7.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content8.msg') }}</td>
                        <td>{{ $t('content8.msg2') }}</td>
                        <td>{{ $t('content8.msg3') }}</td>
                        <td>{{ $t('content8.msg4') }}</td>
                        <td>{{ $t('content8.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content9.msg') }}</td>
                        <td>{{ $t('content9.msg2') }}</td>
                        <td>{{ $t('content9.msg3') }}</td>
                        <td>{{ $t('content9.msg4') }}</td>
                        <td>{{ $t('content9.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content10.msg') }}</td>
                        <td>{{ $t('content10.msg2') }}</td>
                        <td>{{ $t('content10.msg3') }}</td>
                        <td>{{ $t('content10.msg4') }}</td>
                        <td>{{ $t('content10.msg5') }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('content11.msg') }}</td>
                        <td>{{ $t('content11.msg2') }}</td>
                        <td>{{ $t('content11.msg3') }}</td>
                        <td>{{ $t('content11.msg4') }}</td>
                        <td>{{ $t('content11.msg5') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

var i18n = new VueI18n({
    locale: 'ch',
    messages: {
        ch: {
            content: {
                title: '公众号接口权限说明',
                msg: '不同的公众号类型具备不同的接口权限，具体如下表： 请注意：',
                msg2: '1、微博认证视作未认证,因此微博认证的公众号不会拥有微信认证公众号特有的接口。',
                msg3: '2、微信认证分为资质认证和名称认证两部分，只需要资质认证通过，就可获得接口。'
            },
            content2: {
                msg: '接口名称',
                msg2: '未认证订阅号',
                msg3: '微信认证订阅号',
                msg4: '未认证服务号',
                msg5: '微信认证服务号',
            },
            content3: {
                msg: '基础支持-获取access_token',
                msg2: '有',
                msg3: '有',
                msg4: '有',
                msg5: '有',
            },
            content4: {
                msg: '基础支持-获取微信服务器IP地址',
                msg2: '有',
                msg3: '有',
                msg4: '有',
                msg5: '有',
            },
            content5: {
                msg: '接收消息-验证消息真实性',
                msg2: '有',
                msg3: '有',
                msg4: '有',
                msg5: '有',
            },
            content6: {
                msg: '发送消息-被动回复消息',
                msg2: '无',
                msg3: '有',
                msg4: '无',
                msg5: '有',
            },
            content7: {
                msg: '发送消息-客服接口',
                msg2: '无',
                msg3: '有',
                msg4: '无',
                msg5: '有',
            },
            content8: {
                msg: '发送消息-群发接口',
                msg2: '无',
                msg3: '有',
                msg4: '无',
                msg5: '有',
            },
            content9: {
                msg: '用户管理-用户分组管理',
                msg2: '无',
                msg3: '有',
                msg4: '无',
                msg5: '有',
            },
            content10: {
                msg: '用户管理-设置用户备注名',
                msg2: '无',
                msg3: '有',
                msg4: '无',
                msg5: '有',
            },
            content11: {
                msg: '用户管理-获取用户地理位置',
                msg2: '无',
                msg3: '有',
                msg4: '无',
                msg5: '有',
            }
        },
        en: {
            content: {
                title: 'Public address interface',
                msg: 'Different public ID types have different interface permissions, as follows: Please note:',
                msg2: '1, microblogging certification as unauthenticated, so microblogging certification of the public number will not have a WeChat certified public number unique interface.',
                msg3: '2, WeChat certification is divided into qualification and name certification in two parts, only need to pass the certification, you can get the interface.'
            },
            content2: {
                msg: 'Interface',
                msg2: 'Unapproved subscription',
                msg3: 'WeChat certification subscription',
                msg4: 'Unauthenticated service',
                msg5: 'WeChat certification service',
            },
            content3: {
                msg: 'Basic support - Get access_token',
                msg2: 'Yes',
                msg3: 'Yes',
                msg4: 'Yes',
                msg5: 'Yes',
            },
            content4: {
                msg: 'Basic support - Obtain the microsecond server IP address',
                msg2: 'Yes',
                msg3: 'Yes',
                msg4: 'Yes',
                msg5: 'Yes',
            },
            content5: {
                msg: 'Receive message - Verify message authenticity',
                msg2: 'Yes',
                msg3: 'Yes',
                msg4: 'Yes',
                msg5: 'Yes',
            },
            content6: {
                msg: 'Send message - Passive reply message',
                msg2: 'No',
                msg3: 'Yes',
                msg4: 'No',
                msg5: 'Yes',
            },
            content7: {
                msg: 'Send message - customer service interface',
                msg2: 'No',
                msg3: 'Yes',
                msg4: 'No',
                msg5: 'Yes',
            },
            content8: {
                msg: 'Send message - bulk interface',
                msg2: 'No',
                msg3: 'Yes',
                msg4: 'No',
                msg5: 'Yes',
            },
            content9: {
                msg: 'User Management - User Group Management',
                msg2: 'No',
                msg3: 'Yes',
                msg4: 'No',
                msg5: 'Yes',
            },
            content10: {
                msg: 'User Management - Set User Comment Name',
                msg2: 'No',
                msg3: 'Yes',
                msg4: 'No',
                msg5: 'Yes',
            },
            content11: {
                msg: 'User Management - Get User Geography',
                msg2: 'No',
                msg3: 'Yes',
                msg4: 'No',
                msg5: 'Yes',
            }
        }
    }
});

export default {
    data() {
        return {

        }
    },
    i18n: i18n,
    mounted() {
        this.$i18n.locale = localStorage.locale;
        sessionStorage.index = '12';
        sessionStorage.navIndex = 'menu1';
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

<style>
.r_main_content {
    width: 80%;
    margin: 0 auto;
    color: #333F5C;
    font-size: 0.2rem; /* 默认字体 */
}

.r_main_content a {
    opacity: 0;
    font-weight: 600;
    color: #369fe8;
    transition: opacity .2s ease-in-out;
    margin-left: 5px;
    position: relative;
    top: 2px;
}

.r_main_content div:hover a {
    opacity: 1;
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
    border-collapse: collapse;
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

.r_table tr:hover td {
    background: #f9f9f9;
}

.r_table tr:last-child td{
    border: 0rem;
}
</style>


