<template>
	<div class="comment">
		<div class="person">
			<div class="user">
				<p>sk***445445451 2017-06-17 11:37 <span>v2</span><el-rate v-model="value1"></el-rate></p>
			</div>
			<div class="content">
				<p>很大一只，可以用很久，不错很菜</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value1:5
			}
		},
		mounted:function(){
			window.scroll(0,0)
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.comment{
	padding: px2em(68px) 0 px2em(80px) 0;
	.person{
		padding: px2em(20px);
	background-color:rgb(227,227,227);
	border-bottom:1px solid black;
		.content{
			padding-top:px2em(20px); ;
		}
		span{
			color: red;
		}
		.el-rate{
			float: right;
		}
	}
}
</style>