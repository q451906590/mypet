<template>
	<div class="detailRecommend">
		<div class="title">
			<p>店主推荐</p>
		</div>
	 	<div class="myswiper">
	 	<swiper :options="swiperOption">
	      <swiper-slide v-for="slide in swiperSlides"> 
	      	<img :src="slide.img"/>
	      	<p class="text">{{slide.name}}</p>
	      	<p class="price">{{slide.price}}元</p>
	      </swiper-slide>
	  	 </swiper> 
	 	</div>
	</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import prod from "../../../static/product.json"
	export default{
	components: {
        swiper,
         swiperSlide
   },
   data() {
        return {
 		swiperOption: {
             setWrapperSize :true,
             mousewheelControl : true,
             observeParents:true,
             slidesPerView :3,
      },
		}
	},
	computed:{
		swiperSlides(){
			var arr=[];
			for(var i=0;i<10;i++){
				var banner=Math.round(Math.random()*10+1);
				var num =Math.round(Math.random()*3+1);
				var pro=prod.dog[banner].content[num];
				arr.push(pro)
			}
			return arr
		}
	}
 }	
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.title{
	height: px2em(80px);
	border-bottom:1px solid black;
	padding:px2em(10px) 0;
	p{
		padding-left:px2em(20px) ;
		line-height:px2em(60px) ;
		font-size: px2em(28px);
		height: px2em(60px);
	}
}
.myswiper{
	width: px2em(750px);

	img{
		padding-top:  px2em(20px);
		width:100%;
		height: px2em(200px);
	}
	.text{
		font-size: px2em(25px);
		width:px2em(160px);
		line-height: px2em(30px);
		margin: px2em(15px) auto;
		height:px2em(55px);
		font-family: "small fonts";
		color: black;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.price{
		font-size: px2em(30px);
		text-align: center;
		color: red;
		width:px2em(160px);
		margin:0 auto;
		height:px2em(35px);
	}
}
</style>