<template>
	<div class="detailbuy">
		<detailswiper></detailswiper>
		<div class="content">
			<div class="head">
				<p class="name">{{name}}</p>
				<p class="price">￥{{price}} <span>￥{{oldprice}}</span></p>
				<p class="buy">已售{{buy}} 
					<span>授权文件</span>
					<img src="../../../static/img/prod/power.png" alt="" />
				</p>
			</div>
		</div>
		<detailcomment></detailcomment>
		<detailRecommend></detailRecommend>
		<div class="drag"     v-loading="loading" element-loading-text="拼命加载中">
			<p @click="goto('picture')"><span class="fa fa-angle-double-up"></span> 点击查看图文详情 <span class="fa fa-angle-double-up"></span></p>
		</div>
	</div>
</template>

<script>
import prod from "../../../static/product.json"
import detailcomment from"./detailcomment"
import detailswiper from './detailswiper'
import detailRecommend from"./detailRecommend"
import search from "../../../static/search.json"
	export default{
		components:{
			detailcomment,
			detailRecommend,
			detailswiper
		},
		data(){
			return{
				loading:false
			}
		},
		computed:{
			name(){
				return this.$store.state.detail.json=="prod"?prod[this.$store.state.detail.pet][this.$store.state.detail.banner].content[this.$store.state.detail.index].name:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].title
			},
			price(){
				return this.$store.state.detail.json=="prod"?prod[this.$store.state.detail.pet][this.$store.state.detail.banner].content[this.$store.state.detail.index].price:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].price
			},
			oldprice(){
				return this.$store.state.detail.json=="prod"?Math.round((prod[this.$store.state.detail.pet][this.$store.state.detail.banner].content[this.$store.state.detail.index].price*1.1)*100)/100:Math.round((search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].price*1.1)*100)/100
			},
			buy(){
				return this.$store.state.detail.json=="prod"?prod[this.$store.state.detail.pet][this.$store.state.detail.banner].content[this.$store.state.detail.index].buy:search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].buy
			}
		},
		mounted:function(){
			console.log(this.$store.state.detail.pet)
		},
		watch:{
			name(){
			}
		},
		
		methods:{
			goto(id){
				this.loading=true
				setTimeout(()=>{
					this.loading=false
						this.$router.push({path:id})
						this.$store.dispatch("changearr",[false,true,false])
				},2000)
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.detailbuy{
	padding-bottom: px2em(80px);
}
.head{
	padding: px2em(10px);
	padding-top: 0;
	.name{
		padding: px2em(10px);
		border-top:2px solid gray;
		font-size: px2em(28px);
		line-height: px2em(35px);
	}
	.price{
		padding: px2em(10px);
		color: red;
		font-size: px2em(35px);
		span{
			font-size: px2em(28px);
			color: gray;
			text-decoration: line-through;
		}
	}
	.buy{
		padding: px2em(10px);
		color: gray;
		font-size: px2em(28px);
		span{
			float: right;
			padding-left: px2em(10px);
			vertical-align: middle;
		}
		img{
			float: right;
			border-left: 1px solid gray;
			padding-left: px2em(10px);
		}
	}
	
}
.drag{
	height: px2em(100px);
	padding: px2em(25px) 0;
	background-color: rgb(227,227,227);
	p{
		height: px2em(50px);
		line-height: px2em(50px);
		text-align: center;
		font-size: px2em(30px);
	}
}
</style>