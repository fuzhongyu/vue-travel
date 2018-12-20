<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui"></div>
        </div>
        <div class="header-input">
            <span class="iconfont icon-sousuo search-icon"></span>
            输入城市/景点/游玩 主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont icon-jiantouxia arrow-icon"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<!--scoped使样式只对当前组件生效-->
<style lang="stylus" scoped>
    @import '~@/assets/variable.styl'

    .header
        display  flex
        line-height .86rem
        background $themeColor
        color #ffffff
        .header-left
            width 0.9rem
            text-align center
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            background #ffffff
            color #cacaca
            border-radius .1rem
            .search-icon
                padding-left .3rem
        .header-right
            width 1.24rem
            text-align center
            .arrow-icon
                text-align center
                margin-left -.08rem


</style>