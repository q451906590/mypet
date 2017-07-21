<template>
	<div class="no">
		<div>
			<img src="../../../static/img/mine/cat.png"/>
			<p>抱歉，我们没有找到相关的数据！</p>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				
			}
		}	
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
	.no{
		height: px2em(600px);
		background: #efefef;
		width: 100%;
		position: relative;	
		div{			
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			img{
			width: px2em(220px);	
			margin-left: px2em(70px);	
			}
			p{
				width: px2em(400px);
				text-align: center;
				height: px2em(50px);
				line-height: px2em(50px);
			}
		}
	}
</style>