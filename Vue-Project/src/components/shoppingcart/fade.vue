<template>
	<div class="fade" @touchmove.prevent>
		<div class="fadeout" @click="fadeout">
			
		</div>
		<transition name="move">
						<div class="cart" v-show="showcart">
		<div class="content" >
			<div class="card">
				<div class="img">
					<img :src="img" alt="" />
				</div>
			</div>
			<div class="text">
				<p class="title">{{name}}</p>
				<p class="foot"><span class="price">{{price}}元</span><span class="buy">库存：30000</span> </p>
			</div>
			
		</div>
		<div class="add">
			<span>数量：</span><el-input-number v-model="num" :min="1" :max="10" size="large" @change="change"></el-input-number>
		</div>
			</div>
		</transition>

	</div>
</template>

<script>
import search from "../../../static/search.json"
import prod from "../../../static/product.json"
	export default{
		mounted:function(){
			var cart=document.querySelector(".addcart");
			this.$el.style.height=window.scrollY+window.innerHeight-cart.offsetHeight+"px";
			var obj={
					name:this.name,
					num:this.num,
					smallimg:this.img,
					price:this.price
			}
			this.$store.dispatch("changeaddprod",obj)
		},

		methods:{
			fadeout(){
				this.$store.dispatch("changeshowcart",false)
			},
			change(){
				var obj={
					name:this.name,
					num:this.num,
					smallimg:this.img,
					price:this.price
				}
				this.$store.dispatch("changeaddprod",obj)
			}
		},
		computed:{
			showcart(){
				return this.$store.state.showcart
			}
		},
		data(){
			return{
				name:this.$store.state.detail.json=="prod"?prod.dog[this.$store.state.detail.banner].content[this.$store.state.detail.index].name:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].title,
				price:this.$store.state.detail.json=="prod"?prod.dog[this.$store.state.detail.banner].content[this.$store.state.detail.index].price:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].price,
				img:this.$store.state.detail.json=="prod"?prod.dog[this.$store.state.detail.banner].content[this.$store.state.detail.index].img:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].smallimg,
				num:0
			}
		}
		
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";

	.fade{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 2;
		background-color: rgba(0,0,0,0.5);
		.fadeout{
			height:px2em(800px);
		}
		.cart{
			height:px2em(455px);
			background-color: white;
		}
	}
.content{
	overflow: hidden;
	border-bottom: 1px solid gray;
	.img{
		width: px2em(250px);
		float: left;
	}
	.text{
		width: px2em(496);
		height:px2em(240px) ;
		margin:px2em(20px) 0;
		float: left;
		.title{
			font-size: px2em(28px);
			margin-top: px2em(25px);
			line-height: px2em(35px);
			margin-left: px2em(30px);
		}
		.foot{
			margin-top: px2em(90px);
			.price{
				font-size: px2em(30px);
				color: red;
				margin-left: px2em(30px);
			}
			.buy{
				font-size: px2em(20px);
				float: right;
				margin: 0 px2em(20px);
			}
		}
	}
	
}
.add{
	margin-top: px2em(30px);
	width: px2em(300px);
	font-size: px2em(30px);
	float: right;
}

.move-enter-active,.move-leave-active{
		transition: all 0.5s ease-out; 
	}
	.move-enter{
		transform: translateY(600px);
	}
	.move-leave-active{
		transform: translateY(600px);
	}
</style>