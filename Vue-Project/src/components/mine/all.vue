<template>
	<div class="all">
<<<<<<< HEAD
<<<<<<< HEAD
		<div v-for="(item,index) in arr">
			<p>待付款</p>
			<div class="detail"></div>
=======
		<div v-for="(item,index) in MessageArr">
			<p>待付款</p>
			<div class="content">
				<div class="left"><img alt="无法加载"/></div>
				<div class="right">
					
				</div>
			</div>
>>>>>>> ruan
		</div>
=======
		<div v-for="(item,index) in MessageArr" class="wra">
			<p class="wrait">待付款</p>
			<div class="content">
				<div class="left"><img alt="无法加载" :src="item.smallimg"/></div>
				<div class="right">
					<h4>{{item.name}}</h4>
					<p>规格:XL超大型</p>
					<p><span class="left-span">{{item.price}}元</span> <span class="right-span">X{{item.num}}</span></p>
				</div>
			</div>	
			<div>
				<div class="bottom">
					<span>共计{{item.num}}件商品，合计：{{item.num*item.price}}</span>
					<div class="canle">取消订单</div>
				</div>
			</div>
		</div>	
>>>>>>> neng
	</div>
</template>
		
		
<script>
<<<<<<< HEAD
<<<<<<< HEAD
=======
	
>>>>>>> neng
	export default{
		data:function(){
			return{

			}
		},
		computed:{
			MessageArr(){		
				return this.$store.state.messageArr;
			}			
		},
		watch:{
			MessageArr(){}
		}
<<<<<<< HEAD
=======
	
	export default{
		data:function(){
			return{

			}
		},
		computed:{
			MessageArr(){		
				return this.$store.state.messageArr;
			}
		},
		watch:{
			MessageArr(){}
		}
		
>>>>>>> ruan
=======
		
>>>>>>> neng
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
<<<<<<< HEAD
<<<<<<< HEAD
=======
	.all{
		p{
			text-align:right;
=======
	.all{
		margin-top: px2em(30px);
		background-Color:#efefef;
		.wra{	
			margin-top: px2em(30px);
			 background-Color:#fff;
		
		.wrait{
			height: px2em(50px);
			line-height: px2em(50px);
			text-align:right;
			 color: #fc4a00;
			 font-size: px2em(28px);
			 margin-right: px2em(30px);
>>>>>>> neng
		}
		.content:after{
			content: "";
			display: block;
			clear: both;
		}
		.content{
<<<<<<< HEAD
			.left{
				float: left;
			}
			.right{
				float: right;
			}
		}
	}
>>>>>>> ruan
=======
			 background-Color:#efefef;
			 height: px2em(200px);
			.left{
				float: left;
				width: 30%;	
				img{
					height: px2em(150px);
					margin-left: 20%;
					margin-top: px2em(20px);
				}
			}
			.right{
				height: 100%;
				float: right;
				width: 65%;		
				h4{
					margin-top: px2em(10px);
					font-size: px2em(26px);
					line-height: px2em(33px);
				}	
				p:after{
					content: "";
					display: block;
					clear: both;
				}
				p{
					text-align: left;
					margin-top: px2em(30px);
					font-size: px2em(25px);
				}
				.left-span{
					float: left;
					 color: #fc4a00;
				}	
				.right-span{
					float: right;
					margin-right: px2em(30px);
				}
			}
		}
		.bottom:after{
			display: block;
			content: "";
			clear: both;
		}
		.bottom{
			height: px2em(80px);
			span{
				font-size: px2em(28px);
				font-weight: bolder;
				display:block;
				float: left;
				margin-left: px2em(20px);
				margin-top: px2em(25px);
			}
			.canle{
				width: px2em(150px);
				height: px2em(50px);
				text-align: center;
				line-height: px2em(50px);
				float: right;
				border-radius: 25px;
				font-size: px2em(25px);
				margin-top: px2em(15px);
				border: 2px solid #000;
				 margin-right: px2em(20px);
			}
			
		}
	  }
	}
>>>>>>> neng
</style>