<template>
	<div class="cue">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的优惠券</p >
  		</div>
  		<ul>
  			<li class="used" @click="nouse" :class="{active:col==1?true:false}">未使用</li>
  			<li @click="used" :class="{active:col==2?true:false}">已使用</li>
  		</ul>
  		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				
			}
		},
		methods:{
			back(){
				this.$router.push({path:"/mine"});
			},
			nouse(){
				this.$router.push({path:"have"});
				this.$store.dispatch("changescolor",1);
			},
			used(){
				this.$router.push({path:"no"});
				this.$store.dispatch("changescolor",2);
			}			
		},
		computed:{
			col(){
				return this.$store.state.col
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.cue{
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
		}
		ul:after{
			content: "";
			display: block;
			clear: both;
		}
		ul{
			li{
				 background-Color:#fff;
				float: left;
				margin: 0 0 px2em(40px) 0;
				border-top: 1px dashed gray;
				width: 50%;
				text-align: center;
				height: px2em(50px);
				line-height: px2em(50px);
				font-size: px2em(30px);
			}
			.used{
				border-right: 1px solid gray;
			}
			.active{
				color: #fc4a00;
			}
		}
}
</style>