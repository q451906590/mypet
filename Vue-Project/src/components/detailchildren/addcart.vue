<template>
	<div class="addcart">
		<div class="cart">
			<span class="item" v-model="num" v-show="bol">{{num}}</span>
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
	export default{
		data(){
			return{
				num:0,
				bol:false
			}
		},
		methods:{
			showcart(){
				if(this.$store.state.showcart==true){
					console.log(this.$store.state.user)
		   			axios.get("http://3.class11.applinzi.com/user.php",{
			   			params:{
			    				user:this.$store.state.user,
							prod:JSON.stringify(this.$store.state.addprod),
			    				action:"add"
						}
					}).then((res)=>{	
						this.bol=true;
						this.num=this.num+1;
					})
				}
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