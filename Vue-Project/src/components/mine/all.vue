<template>
	<div class="all">
		<div v-for="(item,index) in MessageArr">
			<p>待付款</p>
			<div class="content">
				<div class="left"><img alt="无法加载"/></div>
				<div class="right">
					
				</div>
			</div>
		</div>
	</div>
</template>
		
		
<script>
	
	export default{
		data:function(){
			return{

			}
		},
		computed:{
			MessageArr(){		
				return this.$store.state.messageArr;
			}
		},
		watch:{
			MessageArr(){}
		}
		
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
	.all{
		p{
			text-align:right;
		}
		.content:after{
			content: "";
			display: block;
			clear: both;
		}
		.content{
			.left{
				float: left;
			}
			.right{
				float: right;
			}
		}
	}
</style>