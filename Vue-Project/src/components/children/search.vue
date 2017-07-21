<template>
	<div class="search">
		<div class="logo">
			<img src="../../../static/img/logo/logo.png"/>
		</div>
		<div class="ipt">
			<span class="fa fa-search search-logo" @click="goto('keyword')"></span>
			<input type="text"  @keydown.13="goto('keyword')" v-model="ipt" />
		</div>
		<div class="smallicon">
			<img src="../../../static/img/logo/fire.png" alt=""  @click="goto('search')"/>
			<span class="fa fa-user-o" @click="goto('user')"></span>
		</div>
	</div>
</template>

<script>
import "../../../static/font/css/font-awesome.css"
export default{
	data(){
		return{
			ipt:""
		}
	},
	methods:{
		goto(id){
			if(id=="user"){
				if(this.$store.state.user==""){
					this.$router.push({path:"/"+id})
				}else{
					this.$router.push({path:"/mine"})
				}
			}else if(id=="search"){
				this.$store.dispatch("changekeyword","")
				this.$router.push({path:"/"+id})	
			}else if(id=="keyword"){
				this.$router.push({name:"search",params:{detail:this.ipt}})					
			}
		}
	}
}
</script>
<style type="text/css" lang="scss" scoped="scoped">
@import "../../assets/func.scss";
.search{
	width: px2em(750px);
	height: px2em(75px);
	background-color: rgb(255,72,0);
	overflow:hidden;
	.logo{
		width:px2em(100px);
		height: px2em(75px);
		margin-left:px2em(20px);
		float:left;
		img{
			width: 100%;
			position: relative;
			top: 50%;
			transform: translate(0,-50%);
		}
	}
	.ipt{
		position: relative;
		width:px2em(450px);	
		height: px2em(60px);
		margin: px2em(7.5px) px2em(20px);
		float: left;
		input{
			width: 100%;
			height: 100%;
			border-radius: 30px;
			border: none;
			text-indent: px2em(70px);
		}
		.search-logo{
			position: absolute;
			font-size: px2em(40px);
			top: px2em(10px);
			left: px2em(20px);
			color: #B7B7B7;
		}
	}
	.smallicon{
		float: left;
		width: px2em(140px);
		height: px2em(75px);
		line-height:  px2em(75px);
		font-size: px2em(40px);
		color: white;
		span{
			margin-left:  px2em(15px);
		}
		img{
			width: px2em(45px)
		}
	}
}
</style>