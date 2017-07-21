0<template>
	<div class="search">
		<div class="head">
			<span class="fa fa-close" v-show="bol" @click="back('/')"></span>
			<span class="fa fa-angle-left" v-show="!bol" @click="back('/')"></span>
			<span class="fa fa-search search-icon" @click="search(ipt)"></span>
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
    <input type="text" placeholder="请输入" v-model="ipt" @keydown.13="search(ipt)"/>
			</div>
		</div>
		<div class="btn" v-show="bol">
		<md-button class="md-raised" :md-theme="'white'" v-for="item in btnarr" @click="search(item)">{{item}}</md-button>
		</div>	
		<list></list>
	</div>
</template>
<script>
	import list from "./search/list.vue"
	import search from "../../static/search.json"
	export default{
		components:{
			list
		},
		data(){
			return{
				input:"",
				select:"",
				btnarr:["怡亲","泰迪","宝路","顽皮","狗罐头","狗零食","狗粮","猫零食","狗妙鲜包","火腿肠"],
				bol:"",
				ipt:""
			}
		},
		mounted:function(){
			if(this.$store.state.keyword==""){
				this.bol=true
			}else{
				this.bol=false
			}
		},
		computed:{
			item(){
				if(this.ipt==""){
				var a=this.$route.params.detail;
				this.search(a);	
				return this.$route.params
				}
			}
		},
		watch:{
			item(){}
		},
		methods:{
			back(id){
				this.$router.push({path:id})		
			},
			search(item){
				if(item!=undefined){
				var arr=item.split("")
				var arr1=[];
				for(var i in search.result){
					for(var j in search.result[i]){
						for(var k=0;k<search.result[i][j].length;k++){
							for(var l=0;l<arr.length;l++){
								if(search.result[i][j][k].title.indexOf(arr[l])==-1){
									break
								}else if(l==arr.length-1) {
									var obj={
										pet:i,
										type:j,
										index:k,
										content:search.result[i][j][k]
									}
									arr1.push(obj)
								}
							}
						}
					}
				}
				console.log(arr1)
				this.$store.dispatch("changesearcharr",arr1)
				console.log(this.$store.state.searchArr)
				var keyword={
					title:"search"
				}
				this.$store.dispatch("changekeyword",keyword)					
				}
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