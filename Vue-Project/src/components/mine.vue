<template>
	<div class="mine">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="backhome"></span>
		   <p>个人主页</p >
  		</div>	
  		<div class="wrap">
  			<img src="../../static/img/mine/probg.png" alt="无法加载" class="peosonHeader"/>
  			<md-avatar class="md-large top">
			  	<img src="../../static/img/mine/head.gif" alt="无法加载" @click="person">
			</md-avatar>
			<p class="username">{{username}}</p>
			<div class="level">
				<img src="../../static/img/mine/level.png" alt="无法加载" /><span>1</span>
			</div>
  		</div>
  		<div class="shoppinglist">
  			<h4 class="shop">商城订单</h4>
  			<div class="list" @click="mydetail">
  				<img src="../../static/img/mine/wallet.png"/>
  				<p>待付款</p>
  			</div>
  			<div class="list" @click="mydetail">
  				<img src="../../static/img/mine/car.png"/>
  				<p>待发货</p>
  			</div>
  			<div class="list" @click="no">
  				<img src="../../static/img/mine/gift.png"/>
  				<p>待收货</p>
  			</div>
  			<div class="list" @click="no">
  				<img src="../../static/img/mine/good.png"/>
  				<p>待评价</p>
  			</div>
  		</div>
  		<div class="severlist">
  			<h4 class="shop">个人信息</h4>
  			<div class="list" @click="account">
  				<img src="../../static/img/mine/mine.png"/>
  				<p>我的账户</p>
  			</div>
  			<div class="list cue" @click="coupon">
  				<img src="../../static/img/mine/coupons.png"/>
  				<p>我的优惠券</p>
  			</div>
  			<div class="list" @click="gift">
  				<img src="../../static/img/mine/gift2.png"/>
  				<p>兑奖中心</p>
  			</div>
  			<div class="list fav" @click="favour">
  				<img src="../../static/img/mine/favourite.png"/>
  				<p>我的收藏</p>
  			</div>
  		</div>
  		<div class="bg" >
  			<img src="../../static/img/mine/home.png" alt="无法加载" @click="backhome"/>
  		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import product from "../../static/product.json"
	import search from "../../static/search.json"
	export default{
		data:function(){
			return {
				username:"mobo1357944"			
			}
		},
		methods:{
			backhome:function(){
				this.$router.push({path:"/"})
			},
			mydetail:function(){
				this.$router.push({path:"/minedetail"})
			},
			no(){
				this.$router.push({path:"/minedetail/no"})
			},
			account(){
				this.$router.push({path:"/account"})
			},
			coupon(){
				this.$router.push({path:"/cue"});				
			},
			gift(){
				this.$router.push({path:"/gift"});	
			},
			favour(){
				this.$router.push({path:"/favour"});	
			},
			person(){
				this.$router.push({path:"/account"})
			}
		},
		mounted:function(){
			axios.get("http://3.class11.applinzi.com/user.php",{
		         params:{
		           user:this.$store.state.user,
		           action:"select"
		      }
		    }).then((res)=>{ 
		     	var data = res.data.split("|");
		     	for(var i=0;i<data.length-1;i++){
		     		data[i]=JSON.parse(data[i]);
		     	}
		     	var arr = [];
				var messageArr = data;
				for(var i=0;i<messageArr.length;i++){					
					if(messageArr[i].pet=="prod"){	
						for(var l in product){
							if(l=="dog"||l=="cat"){
								for(var j = 0;j<product[l].length;j++){						
								for(var k = 0;k<product[l][j].content.length;k++){
									if(messageArr[i].name==product[l][j].content[k].name){
										var obj  =  product[l][j].content[k];
										var prod={
											smallimg:obj.img,
											num:messageArr[i].num,
											price:obj.price,
											title:obj.name,
										}
										arr.push(prod);	
									}
								}
							  }
							}							
						}						
					}else{						
						for(var k in search.result){							
							for(var j in search.result[k]){							
								for(var l in search.result[k][j]){
									if(messageArr[i].name==search.result[k][j][l].title){
									var obj  =  search.result[k][j][l];
										obj.num = messageArr[i].num;
										var prod={
											smallimg:obj.smallimg,
											num:messageArr[i].num,
											price:obj.price,
											title:obj.title,
										}
										arr.push(prod);
								 }
								}
							}
						}
					}
				}
				console.log(arr);
		     	this.$store.dispatch("sendMessage",arr);
		     	
		     })
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../assets/func.scss";
	.mine{
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
			font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
			background-Color:#fff;
			.shop{
				height: px2em(80px);
				line-height:px2em(80px);
				padding-left: px2em(30px);
				border-bottom: 1px solid darkgray;
			}
			.list{
				float: left;
				margin: px2em(20px) 0 px2em(30px) px2em(75px);	
				img{
					width: px2em(50px);
					margin: 0 0 px2em(30px) px2em(20px);
				}		
								
			}
		}
		.severlist:after{
			content: "";
			display: block;
			clear: both;
		}
		.severlist{
			 background-Color:#fff;
			 font-size: px2em(30px);
			font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
			margin-top: px2em(30px);
			.shop{
				height: px2em(80px);
				line-height:px2em(80px);
				padding-left: px2em(30px);
				border-bottom: 1px solid darkgray;
			}
			.list{
				float: left;
				margin: px2em(20px) 0 px2em(30px) px2em(50px);	
				img{
					width: px2em(50px);
					margin: px2em(10px) 0 px2em(20px) px2em(35px);
				}										
			}
			.cue{
					img{
						width: px2em(65px);
						margin: 0 0 px2em(15px) px2em(44px);
					}
			}
			.fav{
					img{
						width: px2em(65px);
						margin: 0 0 px2em(15px) px2em(30px);
					}
			}
		}	
		.bg{
			height: px2em(400px);
			position: relative;
			img{
				width: px2em(120px);
				position: absolute;
				top: 50%;
				left: px2em(30px);
				transform: translateY(-50%);
			}
		}
	}
</style>