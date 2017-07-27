<template>
    <div id="index">
        <div class="r_main_content">
            <div class="r_head" id="head1">{{ $t('content.title') }}
                <a href="#head1">#</a>
            </div>
            <p>{{ $t('content.msg') }}</p>
            <p>{{ $t('content.msg2') }}</p>
            <p>{{ $t('content2.title') }}</p>
            <div class="info">
                <p>{{ $t('content2.info') }}</p>
                <p>{{ $t('content2.info2') }}</p>
                <p>{{ $t('content2.info3') }}</p>
                <p>{{ $t('content2.info4') }}</p>
                <p>{{ $t('content2.info5') }}</p>
                <p>{{ $t('content2.info6') }}</p>
                <p>{{ $t('content2.info7') }}</p>
            </div>
            <p>{{ $t('content2.msg') }}</p>
            <div class="bold_head">{{ $t('content3.title') }}</div>
            <p>{{ $t('content3.msg') }}</p>
            <div class="info">
                <p>{{ $t('content3.info') }}</p>
                <p>{{ $t('content3.info2') }}</p>
                <p>{{ $t('content3.info3') }}</p>
                <p>{{ $t('content3.info4') }}</p>
            </div>
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
                title: '开发概述',
                msg: '微信公众平台是运营者通过公众号为微信用户提供资讯和服务的平台，而公众平台开发接口则是提供服务的基础，开发者在公众平台网站中创建公众号、获取接口权限后，可以通过阅读本接口文档来帮助开发。',
                msg2: '为了识别用户，每个用户针对每个公众号会产生一个安全的OpenID，如果需要在多公众号、移动应用之间做用户共通，则需前往微信开放平台，将这些公众号和应用绑定到一个开放平台账号下，绑定后，一个用户虽然对多个公众号和应用有多个不同的OpenID，但他对所有这些同一开放平台账号下的公众号和应用，只有一个UnionID，可以在用户管理-获取用户基本信息（UnionID机制）文档了解详情。',
            },
            content2: {
                title: '请开发者注意：',
                info: '1、微信公众平台开发是指为微信公众号进行业务开发，为移动应用、PC端网站、公众号第三方平台（为各行各业公众号运营者提供服务）的开发，请前往微信开放平台接入。',
                info2: '2、在申请到认证公众号之前，你可以先通过测试号申请系统，快速申请一个接口测试号，立即开始接口测试开发。',
                info3: '3、在开发过程中，可以使用接口调试工具来在线调试某些接口。',
                info4: '4、每个接口都有每日接口调用频次限制，可以在公众平台官网-开发者中心处查看具体频次。',
                info5: '5、在开发出现问题时，可以通过接口调用的返回码，以及报警排查指引（在公众平台官网-开发者中心处可以设置接口报警），来发现和解决问题。',
                info6: '6、公众平台以access_token为接口调用凭据，来调用接口，所有接口的调用需要先获取access_token，access_token在2小时内有效，过期需要重新获取，但1天内获取次数有限，开发者需自行存储，详见获取接口调用凭据（access_token）文档。',
                info7: '7、公众平台接口调用仅支持80端口。',
                msg: '公众号主要通过公众号消息会话和公众号内网页来为用户提供服务的，下面分别介绍这两种情况：'
            },
            content3: {
                title: '1、公众号消息会话',
                msg: '公众号是以微信用户的一个联系人形式存在的，消息会话是公众号与用户交互的基础。目前公众号内主要有这样几类消息服务的类型，分别用于不同的场景。',
                info: '1）群发消息：公众号可以以一定频次（订阅号为每天1次，服务号为每月4次），向用户群发消息，包括文字消息、图文消息、图片、视频、语音等。',
                info2: '2）被动回复消息：在用户给公众号发消息后，微信服务器会将消息发到开发者预先在开发者中心设置的服务器地址（开发者需要进行消息真实性验证），公众号可以在5秒内做出回复，可以回复一个消息，也可以回复命令告诉微信服务器这条消息暂不回复。被动回复消息可以设置加密（在公众平台官网的开发者中心处设置，设置后，按照消息加解密文档来进行处理。其他3种消息的调用因为是API调用而不是对请求的返回，所以不需要加解密）。',
                info3: '3）客服消息：在用户给公众号发消息后的48小时内，公众号可以给用户发送不限数量的消息，主要用于客服场景。用户的行为会触发事件推送，某些事件推送是支持公众号据此发送客服消息的，详见微信推送消息与事件说明文档。',
                info4: '4）模板消息：在需要对用户发送服务通知（如刷卡提醒、服务预约成功通知等）时，公众号可以用特定内容模板，主动向用户发送消息。'
            }
        },
        en: {
            content: {
                title: 'Development overview',
                msg: 'The public platform is the basis for the provision of services by the public platform. The public can create the public number on the public platform website. After obtaining the interface authority, the public platform can read the interface. This interface documentation helps to develop.',
                msg2: 'In order to identify the user, each user for each public number will have a safe OpenID, if you need more public numbers, mobile applications do common between users, you need to go to the WeChat open platform, these public and application bound to An open platform account under which a user has multiple OpenIDs for multiple public numbers and applications, but he has only one UnionID for all of these same open platform accounts under the public number and application, Management - Get User Basic Information (UnionID Mechanism) documentation for more information.',
            },
            content2: {
                title: 'Developers note:',
                info: '1. WeChat public platform development refers to the WeChat public number for business development, mobile applications, PC-side sites, public third-party platform (for all sectors of the public operator to provide services) development, please go to the micro-open platform In.',
                info2: '2. before applying to the certification public number, you can first apply for the system through the test number, quickly apply for an interface test number, immediately start the interface test development.',
                info3: '3. in the development process, you can use the interface debugging tools to debug some of the interface online.',
                info4: '4. each interface has a daily interface call frequency limit, you can in the public platform official website - the developer center to view the specific frequency.',
                info5: '5. in the development of problems, you can call the return code through the interface, and the police investigation guidelines (in the public platform official website - the developer center can set the interface alarm), to find and solve the problem.',
                info6: '6. the public platform to access_token interface call credentials, to call the interface, all interface calls need to get access_token, access_token effective in 2 hours, expired need to re-obtain, but within 1 day to obtain a limited number of developers need to store their own, detailed See Obtain the interface call (access_token) document.',
                info7: '7. the public platform interface calls only support 80 port.',
                msg: 'The public number mainly serves the user through the public number message session and the public number page, and the following describes the two cases respectively:'
            },
            content3: {
                title: '1, public number message session',
                msg: 'The public number is in the form of a contact person with a WeChat user, and the message session is the basis for the interaction between the public and the user. There are several types of message services that are currently used in different numbers for different scenarios.',
                info: '1) Group message: public number can be a certain frequency (subscription number for a day, service number is 4 times a month), to the user group send messages, including text messages, graphic messages, pictures, video, voice and so on.',
                info2: "2) Passive reply message: After the user sends a message to the public number, the micro-server sends the message to the server's address (developer needs to authenticate the message) that the developer has set in the developer center in advance. The public number can be in 5 seconds Within the reply, you can reply to a message, you can also reply to the order to tell the micro-server this message temporarily reply. Passive reply messages can be set to be encrypted (set up at the developer center of the public website, and then processed in accordance with the message plus or decrypted documents.) The call to the other three messages is not required because of the API call instead of the request Encryption and decryption).",
                info3: "3) Customer service message: 48 hours after the user sends a message to the public number, the public number can send an unlimited number of messages to the user, mainly for the customer service scene. The user's behavior will trigger the event push, some events are to support the public to send the customer service message, see the WeChat push message and event description document.",
                info4: '4) Template message: When you need to send a service notification (such as credit card reminder, service reservation success notification, etc.) to the user, the public number can use the specific content template to send the message to the user.'
            }
        }
    }
});

export default {
    i18n: i18n,
    mounted: function () {
        this.$i18n.locale = localStorage.locale;
        sessionStorage.index = '11';
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
    font-size: 0.2rem;
    /* 默认字体 */
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

.r_main_content .info {
    padding: 0.2rem 0.5rem;
    background: #f5f5f5;
}

.r_main_content .bold_head {
    text-align: left;
    font-weight: 900;
    font-size: 0.22rem;
}
</style>


