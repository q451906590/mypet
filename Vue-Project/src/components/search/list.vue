<template>
	<div class="list">
		<div class="sort" v-show="sortbol">
			<span @click="change('default')">分类</span>
			<span @click="change('buy')">销量<span class="fa fa-long-arrow-up" v-show="bol.buy"></span><span class="fa fa-long-arrow-down" v-show="!bol.buy"></span></span>
			<span @click="change('price')">价格 <span class="fa fa-long-arrow-up" v-show="bol.price"></span><span class="fa fa-long-arrow-down" v-show="!bol.price"></span></span>
			<span @click="change('comment')">评论 <span class="fa fa-long-arrow-up" v-show="bol.comment"></span><span class="fa fa-long-arrow-down" v-show="!bol.comment"></span></span>
		</div>
		<div class="content" v-for="(item,index) in listarr" @click="goto(index)">
			<div class="card">
				<div class="img">
					<img :src="item.smallimg" alt="" />
				</div>
			</div>
			<div class="text">
				<p class="title">{{item.title}}</p>
				<p class="foot"><span class="price">{{item.price}}元</span><span class="buy">已售：{{item.buy}}</span> <span class="comment">评价：{{item.comment}}</span></p>
			</div>
		</div>
		<div class="nomore" v-show="sortbol">没有更多商品了......</div>
	</div>
</template>

<script>
	import search from "../../../static/search.json"
	export default{
		data(){
			return{
				listarr:[],
				oldarr:[],
				bol:{
					buy:true,
					price:true,
					comment:true
				},
				title:"",
				value:"",
				sortbol:this.$store.state.keyword==""?false:true,
			}
		},
		computed:{
			keyword(){
				if(this.$store.state.keyword.title=="狗狗"){
					this.title="dog"
					if(this.$store.state.keyword.value=="狗粮"){
						this.value="dogfood"
						this.listarr=search.result.dog.dogfood;	
					}
					else if(this.$store.state.keyword.value=="罐头"){
						this.value="guantou"
						this.listarr=search.result.dog.guantou;	
					}else if(this.$store.state.keyword.value=="零食"){
						this.value="lingshi"
						this.listarr=search.result.dog.lingshi;	
					}else if(this.$store.state.keyword.value=="保健"){
						this.value="baojian"
						this.listarr=search.result.dog.baojian;	
					}else if(this.$store.state.keyword.value=="医疗"){
						this.value="yiliao"
						this.listarr=search.result.dog.yiliao;	
					}else if(this.$store.state.keyword.value=="香波"){
						this.value="xiangbo"
						this.listarr=search.result.dog.xiangbo;	
					}else if(this.$store.state.keyword.value=="用品"){
						this.value="yongpin"
						this.listarr=search.result.dog.yongpin;	
					}
				}else if(this.$store.state.keyword.title=="猫猫"){
				this.title="cat"
					if(this.$store.state.keyword.value=="干粮"){
						this.value="dry"
						this.listarr=search.result.cat.dry;	
					}
					else if(this.$store.state.keyword.value=="湿粮"){
						this.value="wet"
						this.listarr=search.result.cat.wet;	
					}else if(this.$store.state.keyword.value=="零食"){
						this.value="lingshi"
						this.listarr=search.result.cat.lingshi;	
					}else if(this.$store.state.keyword.value=="保健"){
						this.value="baojian"
						this.listarr=search.result.cat.baojian;	
					}else if(this.$store.state.keyword.value=="医疗"){
						this.value="yiliao"
						this.listarr=search.result.cat.yiliao;	
					}else if(this.$store.state.keyword.value=="香波"){
						this.value="xiangbo"
						this.listarr=search.result.cat.xiangbo;	
					}else if(this.$store.state.keyword.value=="用品"){
						this.value="yongpin"
						this.listarr=search.result.cat.yongpin;	
					}
				}else if(this.$store.state.keyword.title=="小宠"){
					this.title="smallpet"
					if(this.$store.state.keyword.value=="兔兔用品"){
						this.value="rabbit"
						this.listarr=search.result.smallpet.rabbit;	
					}
					else if(this.$store.state.keyword.value=="仓鼠用品"){
						this.value="hamster"
						this.listarr=search.result.smallpet.hamster;	
					}else if(this.$store.state.keyword.value=="龙猫用品"){
						this.value="totoro"
						this.listarr=search.result.smallpet.totoro;	
					}else if(this.$store.state.keyword.value=="荷兰猪用品"){
						this.value="pig"
						this.listarr=search.result.smallpet.pig;	
					}
				}else if(this.$store.state.keyword.title=="水族"){
					this.title="water"
					if(this.$store.state.keyword.value=="水族箱"){
						this.value="aquarium"
						this.listarr=search.result.water.aquarium;	
					}
					else if(this.$store.state.keyword.value=="鱼饲料"){
						this.value="fish"
						this.listarr=search.result.water.fish;	
					}else if(this.$store.state.keyword.value=="过滤器"){
						this.value="filter"
						this.listarr=search.result.water.filter;	
					}else if(this.$store.state.keyword.value=="药水"){
						this.value="potion"
						this.listarr=search.result.water.potion;	
					}else if(this.$store.state.keyword.value=="装饰"){
						this.value="decorate"
						this.listarr=search.result.water.decorate;	
					}else if(this.$store.state.keyword.value=="陆龟用品"){
						this.value="turtle"
						this.listarr=search.result.water.turtle;	
					}else if(this.$store.state.keyword.value=="蜥蜴用品"){
						this.value="lizard"
						this.listarr=search.result.water.lizard;	
					}
				}else if(this.$store.state.keyword.title=="search"){
					var arr=[];
					for(var i=0;i<this.$store.state.searchArr.length;i++){
						arr.push(this.$store.state.searchArr[i].content)
						this.oldarr.push(this.$store.state.searchArr[i].content)
					}
					this.listarr=arr;	
				}
				return this.$store.state.keyword
			}
		},
		watch:{
			keyword(){

			}
		},
		mounted:function(){
//			console.log(this.$store.state.keyword)
			for(var i =0;i<this.listarr.length;i++){
				this.oldarr.push(this.listarr[i])
			}
		},
		methods:{
			goto(index){
				if(this.$store.state.keyword.title=="search"){
					this.$router.push({path:"/detail"})
					var obj={
						pet:this.$store.state.searchArr[index].pet,
						type:this.$store.state.searchArr[index].type,
						index:this.$store.state.searchArr[index].index,
						json:"search"
					}
					console.log(obj)
					this.$store.dispatch("changedetail2",obj);
				}else{
					this.$router.push({path:"/detail"})
					var obj={
						pet:this.title,
						type:this.value,
						index:index,
						json:"search"
					}
					this.$store.dispatch("changedetail2",obj);
				}

			},
			change(id){
				if(id=="default"){
					for(var i in this.bol){
						this.bol[i]=true;
					}
					for(var i =0;i<this.listarr.length;i++){
						this.listarr.splice(i,1,this.oldarr[i])
					}
				}else{
					for(var i in this.bol){
						if(i!=id){
						 this.bol[i]=true;	
						}
					}
						this.bol[id]=!this.bol[id]
						this.listarr.sort(this.compare(id))
				}
				
			},
			compare(propertyname){
				return (obj1,obj2)=>{
					var v1=parseInt(obj1[propertyname]);
					var v2=parseInt(obj2[propertyname]);
					if(v1>v2){
						if(this.bol[propertyname]==true){
								return 1;
						}else{
							return -1;
						}
					}else if(v1<v2){
						if(this.bol[propertyname]==true){
								return -1;
						}else{
							return 1;
						}
					}else{
						return 0;
					}
				}
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.sort{
	border-bottom: 1px solid darkgray;
	height: px2em(70px);
	span{
		width:px2em(187px);
		border-left: 1px solid darkgray;
		float: left;
		text-align: center;
		height:px2em(50px) ;
		margin: px2em(10px) 0;
		font-size: px2em(28px);
		line-height: px2em(50px);
		span{
			width:px2em(30px);
			float: right;
			margin:0 px2em(20px) 0 0;
			border: none;
			color: orange;
		}
	}
	span:nth-child(1){
		border-left: none;
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
			.comment{
				font-size: px2em(20px);
				float: right;
			}
		}
	}
}
		.nomore{
			text-align: center;
			font-size: px2em(28px);
			height: px2em(50px);
			line-height: px2em(50px);
		}
</style>