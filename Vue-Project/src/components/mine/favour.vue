<template>
	<div class="favour">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的收藏</p >
  		</div>
  		<div class="sorry">
			<img src="../../../static/img/mine/cat.png"/>
			<p>抱歉，我们没有找到相关的数据！</p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.push({path:"/mine"})
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.favour{
	background: #efefef;
	.head{
		 height:px2em(80px);
		 overflow:hidden;
		 background-Color:#fff;
		 .back{
		  font-size: px2em(60px);
		  margin-left:  px2em(10px);
		  float:left;
		  color: #fc4a00;
		  padding-left:px2em(30px);
		  margin-top: px2em(10px);		  
		 }		 
		 p{
		  width: px2em(640px);
		  text-align: center;
		  height:px2em(60px);
		  font-size: px2em(35px);
		  line-height: px2em(80px);
		  float: left;
		 }		 
		}
		.sorry{			
			/*position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);*/
			height: px2em(600px);
			img{
			width: px2em(220px);	
			margin-left: px2em(250px);
			margin-top: px2em(120px);	
			}
			p{
				width: px2em(400px);
				text-align: center;
				height: px2em(50px);
				line-height: px2em(50px);
				margin-left: px2em(170px);
			}
		}
}
</style>