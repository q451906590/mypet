<template>
	<div class="addcart">
		<div class="cart">
			<span class="item" v-model="num" v-show="num">{{num}}</span>
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
import axios from "axios"
import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				num:this.$store.state.messageArr.length>0?this.$store.state.messageArr.length:false,
				
			}
		},
		methods:{
			showcart(){
				if(this.$store.state.showcart==true){
					if(this.$store.state.user==""){
						this.open("请先登录")
						this.$router.push({name:"login"})
					}else{
						axios.get("http://3.class11.applinzi.com/user.php",{
				   			params:{
				    				user:this.$store.state.user,
								prod:JSON.stringify(this.$store.state.addprod),
				    				action:"add"
							}
						}).then((res)=>{	
							this.open("加入成功")
							this.num=this.num+1;
						})
					}
				}
				this.$store.dispatch("changeshowcart",!this.$store.state.showcart)
			},
			open(mes){
				Toast({
				  message: mes,
				  position: 'middle',
				  duration: 2000
				});
			}
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
		position:relative;
		span{
			font-size: px2em(40px);
		}
		p{
			line-height:px2em(35px) ;
			font-size: px2em(30px);
		}
		.item{
			color: white;
			font-size: 20px;
			text-align: center;
			position: absolute;
			border: 1px solid red;
			top: px2em(-10px);
			right: px2em(40px);
			width: px2em(30px);
			height: px2em(30px);
			border-radius: 50%;
			background-color: red;
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