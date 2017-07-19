<template>
	<div class="mine">
		<div class="head">
		   <span class="fa fa-angle-left back"></span>
		   <p>个人主页</p >
  		</div>	
  		<div class="wrap">
  			<img src="../../static/img/mine/probg.png" alt="" />
  		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped type="text/css">
	@import "../assets/func.scss";
	.mine{
			.head{
		 height:px2em(60px);
		 overflow:hidden;
		 .back{
		  font-size: px2em(60px);
		  margin-left:  px2em(10px);
		  float:left;
		  color: #fc4a00;
		  padding-left:px2em(30px);
		 }		 
		 p{
		  width: px2em(640px);
		  text-align: center;
		  height:px2em(60px);
		  font-size: px2em(35px);
		  line-height: px2em(60px);
		  float: left;
		 }
		 .register{
		  font-size: px2em(30px);
		  margin-right:px2em(10px);
		  height:px2em(60px);
		  line-height: px2em(60px);
		  float:right;
		 }
		}
		.wrap img{
			width: 100%;
			
		}	
	}
</style>