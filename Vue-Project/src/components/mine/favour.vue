<template>
	<div class="favour">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的收藏</p >
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
}
</style>