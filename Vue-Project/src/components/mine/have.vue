<template>
	<div class="have">
		<ul>
			<li class="left">
				<h3>新手专享5元优惠券</h3>
				<p>订单满5.00元可用</p>
				<p>2017.05.22-2018.12.31</p>
				<p class="last">新用户注册送5元优惠券，宠物服务频道专用；
部分活动产品不可用，详见促销活动介绍！</p>
			</li>
			<li class="right">
				<h3>5.00元</h3>
				<p>全场通常</p>
				<div class="rightnow" @click="shop">立刻使用</div>
			</li>
		</ul>
		<ul class="sec">
			<li class="left">
				<h3>满50减5优惠券</h3>
				<p>订单满50.00元可用</p>
				<p>2017.05.22-2018.12.31</p>
				<p class="last">新用户注册送5元优惠券，宠物服务频道专用；
部分活动产品不可用，详见促销活动介绍！</p>
			</li>
			<li class="right">
				<h3>5.00元</h3>
				<p>全场通常</p>
				<div class="rightnow" @click="shop">立刻使用</div>
			</li>
		</ul>
		<ul class="sec">
			<li class="left">
				<h3>新用户全球购专享券</h3>
				<p>订单满299.00元可用</p>
				<p>2017.05.22-2018.12.31</p>
				<p class="last">新用户全球购专享券，仅限全球购使用</p>
			</li>
			<li class="right">
				<h3>20.00元</h3>
				<p>全场通常</p>
				<div class="rightnow" @click="shop">立刻使用</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			shop(){
				this.$router.push({path:"/"});
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
	.have{
		 background-Color:#efefef;		
		ul:after{
			content: "";
			display: block;
			clear: both;
		}
		ul{
			 width: 100%;
			 background-Color:#fff;	
			li{
				float:left;
				margin-top: px2em(17px);
				height: px2em(380px);
			}
			.left{			
				width: 70%;
				h3{
					font-size: px2em(40px);
					font-weight: bolder;
					margin: px2em(30px) 0 px2em(30px) px2em(30px);
				}
				p{
					width: px2em(480px);
					color: lightslategray;
					margin: px2em(30px) 0 px2em(20px) px2em(30px);
					font-size: px2em(30px);
				}
				.last{
					height: px2em(60px);
					line-height: px2em(38px);
					border-top: 1px solid lightslategray;
					font-size: px2em(27px);
					padding-top: px2em(10px);
				}
			}
			.right{
				width: 30%;
				background-color: #ff6349;
				color: #fff;
				h3{
					width: 100%;
					font-size: px2em(50px);
					font-weight: bolder;
					margin: px2em(90px) 0 px2em(30px) 0;
					text-align: center;
				}
				p{
					width: 100%;
					margin: px2em(40px) 0 px2em(30px) 0;
					font-size: px2em(35px);
					font-weight: bolder;
					text-align: center;
				}
				.rightnow{
					border: 1px solid #fff;
					text-align: center;
					width: px2em(140px);
					height: px2em(60px);
					line-height: px2em(60px);
					border-radius: 30px;
					font-size:px2em(28px);
					font-weight: bolder;
					margin: px2em(30px) 0 px2em(30px) px2em(45px);
				}
			}
		}
		.sec{
			margin-top: px2em(40px);
		}
	}
</style>