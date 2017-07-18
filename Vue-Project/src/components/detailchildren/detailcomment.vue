<template>
	<div class="detailcomment">
		<div class="title">
			<span class="all">
				全部评价(61)
			</span>
			<span class="Satisfied">
				满意度 <span>96%</span>
			</span>
		</div>
		<div class="comment">
			<div class="user">
				<p>sk***445445451 2017-06-17 11:37 <span>v2</span><el-rate v-model="value1"></el-rate></p>
			</div>
			<div class="content">
				<p>很大一只，可以用很久，不错很菜</p>
			</div>
		</div>
		<div class="show">
			<p>查看全部</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value1:5
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.detailcomment{

	background-color:rgb(227,227,227);
	.title{

		height:px2em(60px);
		line-height:px2em(60px);
		background-color:white;
		padding:0 px2em(20px) ;
		.Satisfied{
			float: right;
			span{
				color:red;
			}
		}
	}
	.comment{
		padding: px2em(20px);

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
	.show{

		background-color: white;
		text-align: center;
		padding: px2em(25px) 0;
	}
}
</style>