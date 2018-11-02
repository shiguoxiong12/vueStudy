<template>
    <div class="banners">
        <div class="scroll">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->

            <swiper-slide v-for='(item,index) in currentBanner' :key=index>
              <img :src="item.ad_pic_url" width="100%" height="100%"/>
            </swiper-slide>
           
          </swiper> 
  </div>
    </div>
</template>

<script>
   import { swiper, swiperSlide } from 'vue-awesome-swiper'  
export default {
  name: 'HelloWorld',
  components: {  
      swiper,  
      swiperSlide  
  },  
  props:['banner'],
  data () {
    return {
       swiperOption: {  
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          //自动播放
          autoplay:true,
          // autoplay: {
          //     delay: 3000,
          //     stopOnLastSlide: false,
          //     disableOnInteraction: true,
          // },
          // 设置轮播
         // effect : 'flip',
          //滑动速度
          speed:100,
          //滑动方向
         direction : 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          on: {
              slideChangeTransitionEnd: function(){
                // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
              },
          },
          //左右点击
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          //分页器设置         
          // pagination: {
          //     el: '.swiper-pagination',
          //     clickable :true
          // }
        },
        //swiperSlides: [1, 2, 3, 4]
    }
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    },
    currentBanner(){
      return this.banner.filter(item=>{
          return item.ad_pic_url!=""
      })
    }  
  }, 
  mounted () {  
   
  }   
}
</script>

<style lang="stylus" scoped>
.banners
  overflow hidden
  .scroll
    height:1.3rem;
    .swiper-slide
      width:100%
    

</style>