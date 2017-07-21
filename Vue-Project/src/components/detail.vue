<template>
	<div class="detail">
		<detailhead></detailhead>
		<router-view></router-view>
		<button class="home "  >
		 	<span class="fa fa-home">	
		 	</span>
		</button>
		<addcart></addcart>
		
	  <transition name="el-fade-in-linear">
       	<fade v-show="showcart"></fade>
      </transition>
	</div>
</template>

<script>
	import detailhead from './detailchildren/detailhead'
	import fade from "./shoppingcart/fade"
	import addcart from './detailchildren/addcart'
	import "../../static/font/css/font-awesome.css"
	export default{
		components:{
			detailhead,
			addcart,
			fade
		},
		computed:{
			showcart(){
				return this.$store.state.showcart
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../assets/func.scss";
.detailhead{
	position: fixed;
	z-index: 2;
}
.home{
	position: fixed;
	bottom: px2em(120px);
	left: px2em(20px);
	z-index: 2;
	width: px2em(80px);
	height:px2em(80px);
	border-radius: 50%;
	background-color: rgba(0,0,0,0.7);
	
	span{
		font-size: px2em(50px);
		color: white;
	}
}
.addcart{
	position: fixed;
	bottom: 0;
	z-index: 3;
}
</style>