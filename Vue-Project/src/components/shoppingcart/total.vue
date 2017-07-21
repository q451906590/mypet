<template>
	<div class="total">
	<div class="head">
	   <span class="fa fa-angle-left back" @click="goto"></span>
	   <p>结算订单</p >
  	</div>
  	<div class="user">
  		<p><span class="fa fa-user-o"></span><span> 阮志成：15555555555555</span><span class="fa fa-angle-right" style="float: right;"></span></p>
  		<p><span class="fa fa-map-o"></span><span> 广东 广州 元岗</span></p>
  	</div>
  	<div class="payment">
  		<div class="title">
  			<span>支付方式</span>
  		</div>
  		<div class="content">
  			<p>
  				<md-radio v-model="radio"   md-value="1" class="md-warn">在线支付</md-radio>
  				<span>
  					提交订单以后可选择适合您的支付渠道，比如余额支付，支付宝支付等
  				</span>
  			</p>
  			<p>
  				<md-radio v-model="radio"   md-value="2" class="md-warn">货到付款</md-radio>
  			</p>
  		</div>
  	</div>
  	  	<div class="distribution">
  		<div class="title">
  			<span>配送方式</span>
  		</div>
  		<div class="content">
  			<p>
  				<md-radio v-model="radio1"   md-value="3" class="md-warn">合作快递</md-radio>
  				<span>
  					费用：5.00 元（由指定合作快递商配送发货）
  				</span>
  			</p>
  			<p>
  				<input type="text" placeholder="订单留言，字数限制在150字以内"/>
  			</p>
  		</div>
  	</div>
  	<div class="coupon">
  		 <div class="title">
  			<span>优惠</span>
  		</div>
  		<div class="content">
  			<p>
  				<span @click="value=!value">
  					使用优惠券
  				</span>
  			<mt-switch v-model="value"></mt-switch>
  			  	<span @click="value1=!value1">
  					使用神奇豆
  				</span>
  			<mt-switch v-model="value1" ></mt-switch>
  			</p>
  			 <p>
  				<input type="text" placeholder="输入优惠券"/>
  			</p>
  		</div>
  	</div>
  	<div class="money">
  		 <div class="title">
  			<span>总价</span>
  		</div>
  		<div class="content">
  			<p>
  				<span >
  					Total
  				</span>
  				<span>
  					{{total}}.00元
  				</span>
  			</p>
  			 <p>
  				<md-button class="md-raised md-warn">结算</md-button>
  			</p>
  		</div>
  	</div>
	</div>
</template>

<script>
import { Switch } from 'mint-ui';
	export default{
		data(){
			return{
				radio:"",
				radio1:"",
				value:false,
				value1:false,
				total:this.$route.params.total
			}
		},
		mounted:function(){
		},
		methods:{
			goto(){
				this.$router.push({path:history.go(-1)})
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.head{
 height:px2em(60px);
 overflow:hidden;
 border-bottom:1px solid gray;
 .back{
  font-size: px2em(60px);
  margin-left:  px2em(10px);
  float:left;
  color:#fc4a00;
 }
 p{
  width: px2em(680px);
  text-align: center;
  height:px2em(60px);
  font-size: px2em(35px);
  line-height: px2em(60px);
  float: left;
 }
}
.user{
	height: px2em(200px);
	padding:px2em(50px) px2em(30px);
	background-color: rgb(251,246,241);
	p{
		font-size: px2em(30px);
		padding: px2em(10px);
		span{
			margin-right: px2em(20px);
		}
	}	
}
.payment,.distribution,.coupon,.money{
	height: px2em(300px);
	padding: px2em(30px) px2em(20px);

	.title{
		border-top: 1px solid black;
		height: px2em(50px);	
		position:relative;
		span{
			color: #fc4a00;
			font-size: px2em(30px);
			position: absolute;
			top: px2em(-25px);
			left:px2em(-5px) ;
			width: px2em(150px);
			padding: px2em(10px);
			background-color: white;
		}
	}
	.content{
		p:nth-child(1){
			height: px2em(100px);
			border-bottom:1px dashed gray;
			span{
				width: px2em(450px);
				margin-left: px2em(20px);
				line-height: px2em(30px);
				display: inline-block;
				vertical-align: top;
			}
		}
		p:nth-child(2){
			margin-top: px2em(20px);
			input{
				border: none;
				height: px2em(60px);
				width: px2em(700px);
				background-color: #D3DCE6;
				font-size: px2em(30px);
				padding-left: px2em(20px);
				border-radius: px2em(10px);
			}
		}
	}
}
.coupon{
	.content{
		p:nth-child(1){
			span{
				width: px2em(200px);
				font-size: px2em(30px);
				float: left;
			}
			.mint-switch {
				float: left;
			}
		}
	}
}
.money{
	.content{
		p:nth-child(1){
			span{
				width: px2em(200px);
				font-size: px2em(30px);
				float: left;
			}
			span:nth-child(2){
				width: px2em(400px);
				font-size: px2em(40px);
				text-align: right;
				color: #fc4a00;
				float: left;
			}
		}
		.md-button{
			width: px2em(500px);
			height: px2em(60px);
			margin-left: px2em(100px);
			font-size: px2em(30px);
		}
	}
}
</style>