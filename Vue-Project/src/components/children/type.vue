<template>
	<div class="menu">
		<md-tabs md-fixed class="md-accent" @click.native="goto">
		  <md-tab v-for="item in arr"  :md-label="item.title" >
				<div class="type" v-for="a in item.bb">
					<img :src="a.img" alt="" @click="goto('search',a.name,item.title)"/>
					<p>{{a.name}}</p>
				</div>
				<div class="more">
					<img src="../../../static/img/menu/more.png" alt="" />
					<p>更多</p>
				</div>
		  </md-tab>
		</md-tabs>
	</div>
</template>

<script>
import prod from "../../../static/product.json"
export default{
	data(){
		return{
		arr:prod.menu
		}
	},
	methods:{
		goto(id,value,title){
			if(this.$el.querySelector(".md-active span").innerText=="狗狗"){
				this.$router.push({path:"/dog"});
			}else if(this.$el.querySelector(".md-active span").innerText=="猫猫"){
				this.$router.push({path:"/cat"});
			}
			else if(this.$el.querySelector(".md-active span").innerText=="小宠"){
				this.$router.push({path:"/small"});
			}
			else if(this.$el.querySelector(".md-active span").innerText=="水族"){
				this.$router.push({path:"/water"});
			}
			if(id=="search"){
				this.$router.push({name:id,params:{bol:false}})
				var keyword={
					title:title,
					value:value,
				}
				console.log(keyword)
				this.$store.dispatch("changekeyword",keyword)
				console.log(this.$store.state.keyword)
			}
			window.event.stopPropagation()
		}
	}
}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.menu{
	height: px2em(550px);
}
.type{
	width: px2em(150px);
	height: px2em(150px);
	margin: px2em(25px) px2em(10px);
	float: left;
	img{

		width:px2em(100px) ;
		margin-left:px2em(25px) ;
	}
	p{
		text-align: center;
		font-size: px2em(20px);
	}
}
.more{
	float: left;
	width: px2em(150px);
	height: px2em(150px);
	margin: px2em(35px) px2em(10px);
	img{
		width:px2em(90px) ;
		margin-left:px2em(30px) ;
	}
	p{
		text-align: center;
		font-size: px2em(20px);
	}
}

</style>