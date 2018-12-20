<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
            </div>
            <p class="icon-text">景点门票</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Icons"
    }
</script>

<!--scoped使样式只对当前组件生效-->
<style lang="stylus" scoped>
    .icons
        padding-bottom 50%
        background bisque
        .icon
            float left
            overflow hidden
            width 25%
            height 0
            padding-bottom 25%
            background darkgrey
            .icon-img-content
                width 100%

</style>