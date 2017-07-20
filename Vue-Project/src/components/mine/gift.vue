<template>
	<div class="gift">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>兑奖中心 <span class="register">兑奖记录</span></p >		  
  		</div>
  		<div class="middle">
  			<el-input v-model="input" placeholder="请输入内容"></el-input>
  			<el-button type="primary" @click="getMoney">兑奖</el-button>
  		</div>
  		<div class="gray">
  			<p>----------------选择已有的优惠券---------------</p>
  			 <transition name="el-zoom-in-center">
	       		 <div v-show="show2" class="transition-box empty">请输入正确的兑奖码</div>
	     	 </transition>
  		</div> 		
	</div>
</template>

<script>

	export default{
		data(){
		    return {
		      input:'',
		       show2: false
		    }
		},
		methods:{
			back(){
				this.$router.push({path:"/mine"})
			},
			getMoney(){
					this.show2=!this.show2;	
					setTimeout(()=>{
						this.show2=!this.show2;	
					},1000)
			}
	  }	
		
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
	.gift{
		overflow:hidden;
		background-Color:#efefef;	
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
		 .register{
		  font-size: px2em(25px);
		  margin-right:px2em(10px);
		  margin-top: px2em(10px);
		  height:px2em(60px);
		  color: gray;
		  line-height: px2em(60px);
		  float:right;
		 }	 
		}
		.middle{
			 background-Color:#fff;
			border-top: 1px solid gray;
			height: px2em(200px);
			.el-input{
			width: px2em(400px);
			margin:px2em(70px) px2em(30px) 0 px2em(90px);
		}
			.el-button{
				width: px2em(120px);
				height: px2em(60px);
				background-color: #fc4a00;
				border-color:#fc4a00;
				font-size: px2em(30px);
				font-weight: bolder;
			}
			.el-input{
				display: inline-block;
				width: px2em(300px);
				font-size: px2em(30px);
			}
		}
		.gray {
			position: relative;
			height: px2em(1070px);
			background-Color:#efefef;
			p{
			width: 100%;
			padding-top: px2em(50px);
			font-size: px2em(30px);
			text-align: center;
		 }
		 .empty{
		 	width: 50%;
		 	height: px2em(100px);
		 	line-height: px2em(100px);
		 	text-align: center;
		 	border-radius: 20px;
		 	position: absolute;
		 	left: 25%;
		 	top: 25%;
		 	border: 1px solid #000;
		 	color: white;
		 	font-weight: bolder;
		 	font-size: px2em(35px);
		 	background-color: black;
		 }
		}
		
	}
</style>