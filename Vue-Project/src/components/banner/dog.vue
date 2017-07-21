<template>
<div class="dog">
<md-card :md-theme="'white'" v-for="(item,index) in banner">
  <md-card-header>{{item.header}}</md-card-header>
  <md-card-content>
  	<div class="title" @click="gotoActivity('dog',index)">
  		<img  v-lazy="item.title"/>
  	</div>
  	<div class="big">
  		<img v-lazy="item.big"/>
  	</div>
  	<div class="middle">
  		<img v-for="m in item.middle" v-lazy="m" alt="" />
  		
  	</div>
  	<div class="small">
		<img v-for="s in item.small" v-lazy="s" alt="" />  		  		  		
  	</div>
  </md-card-content>
</md-card>
<md-card :md-theme="'white'" >
	 <md-card-header>热门活动</md-card-header>
	 <md-card-content>

	 	<div class="myswiper" v-for="(item,banner) in dog">
	 		<div class="swiper-title">
	 			<img v-lazy="item.title" alt="" />
	 		</div>
	 	<swiper :options="swiperOption">
	      <swiper-slide v-for="(slide,index) in item.content" @click.native="gotodeatil(banner,index)"> 
	      	<img v-lazy="slide.img"/>
	      	<p class="text">{{slide.name}}</p>
	      	<p class="price">{{slide.price}}元</p>
	      </swiper-slide>
	  	 </swiper> 
	 	</div>

	 </md-card-content>
</md-card>
</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import prod from "../../../static/product.json"
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default{
	 components: {
        swiper,
         swiperSlide
   },
	data(){
		return{
		banner:prod.banner1,
		dog:prod.dog,
		swiperOption: {
             setWrapperSize :true,
             mousewheelControl : true,
             observeParents:true,
             slidesPerView : 4,
        }
		}
	},
	methods:{
		gotodeatil(banner,index){
			var obj={
				banner:banner,
				index:index,
				pet:"dog",
				json:"prod",
			}
			this.$store.dispatch("changedetail",obj);
			this.$router.push({path:"detail"})
		},
		gotoActivity(pet,index){
      var obj={
        index:index,
          pet:pet
        }
      this.$store.dispatch("changeactivity",obj);
        this.$router.push({path:"/activity"});
    }
	},
	mounted:function(){
		var text=this.$el.querySelectorAll(".text");
		for(var i=0;i<text.length;i++){
			text[i].innerText=text[i].innerText.substring(0,10).concat("....")
		}
	}
}
</script>

<style type="text/css" lang="scss" scoped="scoped" >
@import "../../assets/func.scss";
.md-card-header{
	font-size:px2em(30px) ;
	font-family: simhei;
	padding: 20px 10px;
}
.md-card-content{
	overflow:hidden;
	padding-left: 0;
	padding-right: 0;
	.title{
		img[lazy=loading] {
			width: 100%;
		}
	}
	.big{
		width:px2em(335px);
		float: left;
		img[lazy=loading]{
			width: 100%;
		}
	}
	.middle{
		width:px2em(335px);
		float:right;
		img[lazy=loading]{
			width: 100%;
		}
	}
	.small{
		float: left;
	}
	.small img[lazy=loading]{
		width:px2em(375px);
		float: left;
	}
	.small img{
		width:px2em(375px);
		float: left;	
	}
}
.myswiper{
	width: px2em(750px);
	img[lazy=loading]{
		width:100%
	}
	.text{
		font-size: px2em(25px);
		width:px2em(160px);
		line-height: px2em(30px);
		margin: px2em(15px) auto;
		height:px2em(55px);
		font-family: "small fonts";
		color: black;
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