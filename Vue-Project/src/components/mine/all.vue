<template>
	<div class="all">
<<<<<<< HEAD
		<div v-for="(item,index) in arr">
			<p>待付款</p>
			<div class="detail"></div>
=======
		<div v-for="(item,index) in MessageArr">
			<p>待付款</p>
			<div class="content">
				<div class="left"><img alt="无法加载"/></div>
				<div class="right">
					
				</div>
			</div>
>>>>>>> ruan
		</div>
	</div>
</template>
		
		
<script>
<<<<<<< HEAD
	export default{
		data:function(){
			return{
				arr:[1,2,3]
			}
		}
=======
	
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
		
>>>>>>> ruan
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
<<<<<<< HEAD
=======
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
>>>>>>> ruan
</style>