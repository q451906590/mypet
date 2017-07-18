<template>
	<div class="addcart">
		<div class="cart">
			<p><span class="fa fa-shopping-cart"></span></p>
			<p>购物车</p>
		</div>
		<div class="add" @click="showcart">
			<p>加入购物车</p>
		</div>
		<div class="buy" >
			<p>立即购买</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			showcart(){
				this.$store.dispatch("changeshowcart",!this.$store.state.showcart)
				console.log(this.$store.state.showcart)
			},
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.addcart{
	width: px2em(750px);

	height:px2em(80px) ;
	background-color:white;
	.cart{
		text-align:center;
		float:left;

		width:px2em(150px);
			height:px2em(80px) ;
		span{
			font-size: px2em(40px);
		}
		p{
			line-height:px2em(35px) ;
			font-size: px2em(30px);
		}
	}
	.add{
		float:left;
	
		width:px2em(300px);
		height:px2em(80px) ;
		background-color: orange;
		p{
			text-align: center;
			line-height:px2em(80px) ;
			font-size:px2em(30px)  ;
			color: white;
		}
	}
	.buy{
		float:left;
	
		width:px2em(300px);
		height:px2em(80px) ;
		background-color:red;
		p{
			text-align: center;
			line-height:px2em(80px) ;
			font-size:px2em(30px)  ;
			color: white;
		}
	}
}

</style>