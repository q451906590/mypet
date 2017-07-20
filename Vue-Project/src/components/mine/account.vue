<template>
	<div class="account">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的账户</p >
  		</div>
  		<ul class="first">
  			<li><span class="left">我的余额</span> <span class="right">0.00元</span></li>
  			<li><span class="left">我的神奇豆</span> <span class="right">10个</span></li>
  			<li><span class="left">我的神奇币</span> <span class="right">0个</span></li>
  		</ul>
  		<ul class="first">
  			<li><span class="left">手机号</span> <span class="right2">{{person.phone}}</span></li>
  			<li><span class="left">登陆密码</span> <span class="right2">修改</span></li>
  			<li><span class="left">支付密码</span> <span class="right2">未设置</span></li>
  			<li><span class="left">收货地址</span> <span class="right2">设置</span></li>
  		</ul>
  		<div class="bg">
  			<img src="../../../static/img/mine/home.png" alt="无法加载" @click="backhome"/>
  			
  		</div>
  		<md-button class="md-raised md-warn" @click="logout">退出当前账户</md-button>
  		 
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data:function(){
			return{
				person:{
					phone:"137*****521"
				},
				show2: true
			}
		},
		methods:{
			backhome(){
				this.$router.push({path:"/"});
			},
			back(){
				this.$router.push({path:"/mine"});
			},
			logout(){
				this.$store.dispatch("changeuser","");
				this.$store.dispatch("sendMessage","")
				Toast({
				  message: '退出成功',
				  position: 'middle',
				  duration: 600
				});
				setTimeout(()=>{
					this.$router.push({path:"/"})
				},600)
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.account{
	  position:relative;
	 background-Color:#efefef;
	 
	.head{
		 height:px2em(80px);
		 overflow:hidden;
		 background-Color:#fff;
		 
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
		}
		
		ul{
			margin-top: px2em(40px);
			background-color:#fff ;
			li:after{
			content: "";
			display: block;
			clear: both;
			}
			li{
				height: px2em(100px);
				line-height: px2em(100px);
				border-bottom: 1px solid grey;
			}
			.right{
				float: right;
				 color: #fc4a00;
				 font-size: px2em(28px);
				margin-right: px2em(50px);
				font-weight: bolder;
			}
			.right2{
				float: right;
		     	color: darkslategray;

			    /*font-size: px2em(28px);*/

			    font-size: px2em(28px);

				margin-right: px2em(50px);
			}
			.left{
				margin-left: px2em(30px);
				font-size: px2em(28px);			
			}
		}
		.bg{
			height: px2em(350px);
			position: relative;
			img{
				position: absolute;


				width: px2em(120px);

				top: 50%;
				left: px2em(30px);
				transform: translateY(-50%);
			}
		}
		.md-raised{
			width: 100%;
			height: px2em(70px);
			font-size: px2em(34px);
		}
}
</style>