<template>
	<div class="myswiper">
   <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides"> <img :src="slide"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
   </swiper> 
</div>
</template>

<script >
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import prod from "../../../static/product.json"
import search from "../../../static/search.json"
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
         }
		}
	},
	computed:{
		swiperSlides(){
			if(this.$store.state.detail.json=="prod"){
				return prod[this.$store.state.detail.pet][this.$store.state.detail.banner].content[this.$store.state.detail.index].swiperimg
			}else if(this.$store.state.detail.json=="search"){
				return search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].bigimg
			}
		}
	}
  }
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";

.myswiper{
	padding-top: px2em(68px);
	width: px2em(750px);
	img{
		width: px2em(600px);
		margin-left:px2em(75px) ;
	}
}
</style>