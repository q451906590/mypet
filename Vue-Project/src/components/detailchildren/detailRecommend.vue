<template>
	<div class="detailRecommend">
		<div class="title">
			<p>店主推荐</p>
		</div>
	 	<div class="myswiper">
	 	<swiper :options="swiperOption">
	      <swiper-slide  v-for="(slide,index) in swiperSlides"  @click.native="godetail(index)">
	      	<img :src="slide.smallimg" />
	      	<p class="text">{{slide.title}}</p>
	      	<p class="price">{{slide.price}}元</p>
	      </swiper-slide>
	  	 </swiper>
	 	</div>
	</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import search from "../../../static/search.json"
Vue.use(VueAwesomeSwiper);
	export default{
	components: {
        swiper,
         swiperSlide
   },
   data() {
        return {
          type:"",
 		swiperOption: {
             setWrapperSize :true,
             mousewheelControl : true,
             observeParents:true,
             slidesPerView :3,
      },
          prodarr:[]
		}
	},
    mounted(){
    },
	computed:{
		swiperSlides(){
			var arr=[];
			var typearr=[];
			for(var i in search.result[this.$store.state.detail.pet]){
			     typearr.push(i)
      }
      for(var i in search.result[this.$store.state.detail.pet]){
              typearr=typearr.sort(function () {
                return 0.5-Math.random()
              })
              if(this.$store.state.detail.pet == "smallpet"){
                var num =Math.round(Math.random()*3+0);
              }else{
                num =Math.round(Math.random()*6+0);
              }
              this.type=typearr[num];
              var obj={
                type:typearr[num],
                pet:this.$store.state.detail.pet,
                index:num,
                json:"search"
              }
              this.prodarr.push(obj);
             arr.push(search.result[this.$store.state.detail.pet][this.type][num])
      }
			return arr
		},
    detail2(){
		  return this.$store.state.detail2
    }
	},
    watch:{
	  detail2(){
    }
    },
   methods:{
     godetail(index){
       var obj={
         pet:this.prodarr[index].pet,
         type:this.prodarr[index].type,
         index:this.prodarr[index].index,
         json:"search"
       }
       this.$store.dispatch("changedetail2",obj);
       this.$router.push({path:"/detail/buy"});
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
