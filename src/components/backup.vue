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
            <template v-for="(value2, key2, index2) in value.next">
                <template v-if="value2.hasNext">
                    <li :title="$t(`messages.${key2}`)" :class="[ 'level2', {level_plus:value2.hasNext} ]" @click="value2.navActive=!value2.navActive">
                        <div>
                            <span :class="[ value2.navActive ? 'sub' : 'plus' ]">^</span>
                            <a class="nav_title">{{ $t(`messages.${key2}`) }}</a>
                        </div>
                    </li>
                    <ul :class="[ 'level_ul', {open: value2.navActive} ]">
                        <!-- 控制菜单方式由v-if更改为css样式实现动画效果 -->
                        <template v-for="(value3, key3, index3) in value2.next">
                            <template v-if="value3.hasNext">
                                <li :title="$t(`messages.${key3}`)" :class="[ 'level3', {level_plus:value3.hasNext} ]" @click="value3.navActive=!value3.navActive">
                                    <div>
                                        <span :class="[ value3.navActive ? 'sub' : 'plus' ]">^</span>
                                        <a class="nav_title">{{ $t(`messages.${key3}`) }}</a>
                                    </div>
                                </li>
                                <ul :class="[ 'level_ul', {open: value3.navActive} ]">
                                    <!-- 控制菜单方式由v-if更改为css样式实现动画效果 -->
    
                                </ul>
                            </template>
                            <template v-else>
                                <li :class="[ 'level3', {li_active:liIndex==value3.liActive} ]" @click="liIndex=value3.liActive">
                                    <router-link :title="$t(`messages.${key3}`)" :to="{ path: value3.path }">{{ $t(`messages.${key3}`) }}</router-link>
                                </li>
                            </template>
                        </template>
                    </ul>
                </template>
                <template v-else>
                    <li :class="[ 'level2', {li_active:liIndex==value2.liActive} ]" @click="liIndex=value2.liActive">
                        <router-link :title="$t(`messages.${key2}`)" :to="{ path: value2.path }">{{ $t(`messages.${key2}`) }}</router-link>
                    </li>
                </template>
            </template>
        </ul>
    </template>
    <template v-else>
        <li :class="[ 'level1', {li_active:liIndex==value.liActive} ]" @click="liIndex=value.liActive">
            <router-link :title="$t(`messages.${key}`)" :to="{ path: value.path }">{{ $t(`messages.${key}`) }}</router-link>
        </li>
    </template>
</template>