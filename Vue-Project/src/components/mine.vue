<template>
	<div class="mine">
		<div class="head">
		   <span class="fa fa-angle-left back"></span>
		   <p>个人主页</p >
  		</div>	
  		<div class="wrap">
  			<img src="../../static/img/mine/probg.png" alt="无法加载" class="peosonHeader"/>
  			<md-avatar class="md-large top">
			  	<img src="../../static/img/mine/head.gif" alt="无法加载">
			</md-avatar>
			<p class="username">{{username}}</p>
			<div class="level">
				<img src="../../static/img/mine/level.png" alt="无法加载" /><span>1</span>
			</div>
  		</div>
  		<div class="shoppinglist">
  			<div>商城订单</div>
  			<div class="list">
  				<i class="fa fa-money fa-2x" aria-hidden="true"></i>
  				<p>待付款</p>
  			</div>
  			<div class="list">
  				<i class="fa fa-car fa-2x" aria-hidden="true"></i>
  				<p>待发货</p>
  			</div>
  			<div class="list">
  				<i class="fa fa-gift fa-2x" aria-hidden="true"></i>
  				<p>待收货</p>
  			</div>
  			<div class="list">
  				<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
  				<p>待评价</p>
  			</div>
  		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				username:"mobo1357944"			
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../assets/func.scss";
	.mine{
			.head{
		 height:px2em(80px);
		 overflow:hidden;
		 .back{
		  font-size: px2em(60px);
		  margin-left:  px2em(10px);
		  float:left;
		  color: #fc4a00;
		  padding-left:px2em(30px);
		  margin-top: px2em(10px);
		 }		 
		 p{
		  width: px2em(640px);
		  text-align: center;
		  height:px2em(60px);
		  font-size: px2em(35px);
		  line-height: px2em(80px);
		  float: left;
		 }
		 .register{
		  font-size: px2em(30px);
		  margin-right:px2em(10px);
		  height:px2em(60px);
		  line-height: px2em(60px);
		  float:right;
		 }
		}
		.wrap{
			position: relative;
			.top{
				width:px2em(120px);
				height:px2em(120px);
				position: absolute;
				left: px2em(80px);
				top: px2em(70px);
			}
			.peosonHeader{
				width: 100%;
			}
			.username{
				position: absolute;
				left: px2em(230px);
				top: px2em(120px);
				font-size: px2em(30px);
				color: #fff;
				font-family: \\5FAE\8F6F\96C5\9ED1,Tahoma,sans-serif;
			}
			.level{
				width: px2em(70px);
				height: px2em(40px);
				border: 1px solid #fff;
				border-radius: 20px;
				position: absolute;
				left: px2em(480px);
				top: px2em(110px);
				font-size: px2em(35px);
				line-height: px2em(40px);
				color: #fff;
				img{
					margin-left: px2em(17px);
					width: px2em(20px);
				}
			}
		}	
		.shoppinglist:after{
			content: "";
			display: block;
			clear: both;
		}
		.shoppinglist{
			font-size: px2em(30px);
			.list{
				float: left;
				margin: px2em(10px) 0 0 px2em(70px);
				border: 1px solid #000;
			}
		}
	}
</style>