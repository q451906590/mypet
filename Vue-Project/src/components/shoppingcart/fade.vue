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
			<span>数量：</span>
			<button @click="add">+</button><button @click="reduce">-</button><input type="text" class="number" v-model="num"  ref="nums" readonly="readonly"/>
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
			var obj={
					name:this.name,
					num:this.num,
					smallimg:this.img,
					price:this.price
			}
			this.$store.dispatch("changeaddprod",obj)
		},
		watch:{
			num(){
				this.change()
			}
		},
		methods:{
			add(){
					this.num++
			},
			reduce(){
				if(this.num>0){
					this.num--
				}
			},
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
			},
			name(){
				return this.$store.state.detail.json=="prod"?prod.dog[this.$store.state.detail.banner].content[this.$store.state.detail.index].name:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].title
			},
			price(){
				return this.$store.state.detail.json=="prod"?prod.dog[this.$store.state.detail.banner].content[this.$store.state.detail.index].price:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].price
			},
			img(){
				return this.$store.state.detail.json=="prod"?prod.dog[this.$store.state.detail.banner].content[this.$store.state.detail.index].img:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].smallimg
			}
		},
		data(){
			return{
				num:0
			}
		},
		
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";

	.fade{
		height:100%;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 2;
		background-color: rgba(0,0,0,0.5);
		.fadeout{
			height:px2em(800px);
		}
		.cart{
			transform: translateY(px2em(-150px));;
			height:px2em(605px);
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
	margin: px2em(30px) px2em(30px);
	width: px2em(300px);
	font-size: px2em(30px);
	float: right;
    .number{
	margin-top: px2em(-10px);
     float: right;
     border-top: 1px solid gray;
     border-bottom: 1px solid gray;
     border-left: 1px solid gray;
     width: px2em(120px);
     height: px2em(40px);
     font-size: px2em(20px);
     padding-left: px2em(10px);
    }
    button{
   margin-top: px2em(-10px);
     float: right;
     border: 1px solid gray;
     width: px2em(40px); 
     font-size: px2em(28px);
     height: px2em(40px); 
     background: white;   
    }
   
}

.move-enter-active,.move-leave-active{
		transform: translateY(px2em(-150px));
		transition: all 0.5s ease-out; 
	}
	.move-enter .move-leave-to{
		transform: translateY(px2em(600px));
	}
	.move-leave-active{
		transform: translateY(px2em(600px));
	}
</style>