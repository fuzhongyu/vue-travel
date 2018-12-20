<template>
    <div class="wapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of imgList" :key="item.id">
                <img class="swip-img" :src="item.img"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "swip",
        data () {
            return{
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoplay : 3000,
                    speed:1000,
                    effect : 'coverflow',
                    centeredSlides: true
                },
                imgList:[
                    {
                        id: 1,
                        img:'http://img1.qunarzz.com/piao/fusion/1609/4d/3dc09bcc290f0c02.jpg_750x200_09c97d67.jpg'
                    },{
                        id: 2,
                        img:'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg'
                    },{
                        id: 3,
                        img:'http://img1.qunarzz.com/piao/fusion/1711/61/0af7f65988570e02.jpg_750x200_905350d6.jpg'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    //三个箭头代表样式穿透，使wapper下的所有名为swiper-pagination-bullet-active的背景都用该样式(scoped定义了只能对该组件起作用，
    // 而这个样式在swiper定义，所以要这么做）,!important代表优先使用这个样式
    .wapper >>> .swiper-pagination-bullet-active{
        background #ffffff !important
    }

    .wapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 27%
        background #cacaca
        .swip-img
            width 100%


</style>