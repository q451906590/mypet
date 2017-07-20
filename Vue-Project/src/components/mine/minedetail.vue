<template>
	<div class="minedetail">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的商城订单</p >
  		</div>
  		<div class="top">
  			 <md-tabs md-fixed class="md-accent" @click.native="go">
				  <md-tab v-for="(item,index) in detailArr"  :md-label="item" >
						<router-view></router-view>					
				  </md-tab>
			</md-tabs>
  		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				detailArr:["全部","待付款","待发货","待收货","待评价"]
				
			}
		},
<<<<<<< HEAD
=======
		
>>>>>>> ruan
		methods:{
			back(){
				this.$router.push({path:"/mine"})
			},
			go(){	
				console.log(this.$el.querySelector(".md-active span").innerText)
				if(this.$el.querySelector(".md-active span").innerText=="全部"){
					this.$router.push({path:"all"})
				}else if(this.$el.querySelector(".md-active span").innerText=="待付款"){
					this.$router.push({path:"pay"})
				}else{
					this.$router.push({path:"no"})
				}
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
	.minedetail{
<<<<<<< HEAD
=======
		font-size:px2em(20px);
>>>>>>> ruan
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
		.top:after{
			content: "";
			display: block;
			clear: both;
		}
		.top{
			.md-tab-header{
				width: 20%;
			}
			.md-tab{
				margin: 0;
				padding: 0;			
			}
		}
	}
</style>