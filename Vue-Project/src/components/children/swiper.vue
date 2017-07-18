<template>
<div class="myswiper">
   <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides"> <img :src="slide"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
   </swiper> 
</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
 components: {
        swiper,
         swiperSlide
   },
   data() {
         return {
           swiperOption: {
             autoplay: 1500,
             setWrapperSize :true,
             pagination : '.swiper-pagination',
             paginationClickable :true,
             mousewheelControl : true,
             observeParents:true,
             loop : true,
         },
        swiperSlides: [
        		require("../../../static/img/swiper/1.jpg"),
        		require("../../../static/img/swiper/2.jpg"),
        		require("../../../static/img/swiper/3.jpg"),
        		require("../../../static/img/swiper/4.jpg"),
        		require("../../../static/img/swiper/5.jpg"),
        		require("../../../static/img/swiper/6.jpg")
        ]
		}
	}
}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";

.myswiper{
	width: px2em(750px);
	img{
		width:100%
	}
}
</style>