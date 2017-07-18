<template>
	<div class="search">
		<div class="head">
			<span class="fa fa-close" v-show="bol" @click="back('/')"></span>
			<span class="fa fa-angle-left" v-show="!bol" @click="back('/')"></span>
			<span class="fa fa-search search-icon"></span>
	<div class="ipt">
	<el-dropdown trigger="click">
      <span class="el-dropdown-link">
        全部<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>狗狗</el-dropdown-item>
        <el-dropdown-item>猫猫</el-dropdown-item>
        <el-dropdown-item>小宠</el-dropdown-item>
        <el-dropdown-item>水族</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <input type="text" placeholder="请输入"/>
			</div>
		</div>
		<div class="btn" v-show="bol">
		<md-button class="md-raised" :md-theme="'white'" v-for="item in btnarr">{{item}}</md-button>
		</div>	
		<list></list>
	</div>
</template>

<script>
	import list from "./search/list.vue"
	export default{
		components:{
			list
		},
		data(){
			return{
				input:"",
				select:"",
				btnarr:["狗衣服","保健品","医疗","狗玩具","狗罐头","狗零食","狗粮食","猫零食","狗妙鲜包","狗沐浴露"],
				bol:this.$route.params.bol==undefined?true:this.$route.params.bol
			}
		},
		mounted:function(){
		
		},
		methods:{
			back(id){
				this.$router.push({path:id})		
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../assets/func.scss";
.search{
	height: px2em(70px);
	.head{
		border-bottom:1px solid gray;
		box-shadow:5px 5px 5px gray;
		overflow:hidden;
	span{
		font-size:px2em(40px);
		line-height:px2em(70px);
		padding: 0 px2em(20px);
		float: left;
	}
	.search-icon{
		position: absolute;
		right: px2em(20px);
		top:px2em(10px);
		color:gray;
	}
	.ipt{
		width: px2em(658px);
		float: left;
		background-color: rgb(222,222,222);
		margin: px2em(10px) 0;
		input{
			border: none;
			padding-left: px2em(20px);
			border-left: 1px solid black;
			margin-top: px2em(16px);
			height: px2em(40px);
			width: px2em(552px);
			font-size: px2em(30px);
			float: left;
			color: black;
			background-color: rgb(222,222,222);
		}
		.el-dropdown{
			float: left;
			width: px2em(100px);
			border:none;
			.el-dropdown-link{
				font-size:px2em(20px) ;
				width: px2em(120px);
			}
			
		}
	}
	}
	.btn{
		margin-top:px2em(30px) ;
		.md-button{
			width: px2em(100px);
			height: px2em(60px);
			font-size: px2em(20px);
			margin: px2em(10px) px2em(12px);
		}
	}

}
</style>