<template>
	<div class="address">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的收货地址 <span class="register" @click="add">+</span></p >		   	
  		</div>
  		<div class="big">
  			<div v-for="(item,index) in addArr" class="big-s">
  				<p><span class="name">{{item.name}}</span> <span class="phone">{{item.phone}}</span></p>
  				<p class="bot"><span class="home">{{item.home}}</span> <span class="detailadd">{{item.detailadd}}</span> <span class="mail">{{item.mail}}</span></p>
  				<div class="bottom">
  					<p class="s1"></p>
  					<p class="s2"><i class="fa fa-trash-o fa-2x" @click="dialogVisible = true"></i><i class="fa fa-pencil fa-2x" aria-hidden="true" @click="updateadd(index)"></i></p> 					
  					<el-dialog title="提示" :visible.sync="dialogVisible" size="small">
					  <p>是否确定删除地址</p>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="dialogVisible = false">取 消</el-button>
					    <el-button type="danger" @click="del(index)">确 定</el-button>
					  </span>
					</el-dialog>
  				</div>
  				 </el-collapse-transition>
  			</div>
  		</div>
	</div>
</template>

<script>
import axios from 'axios'

	export default{
		data:function(){
			return{
				addArr:[],
				dialogVisible:false
			}
		},
		mounted(){
			axios.get("http://3.class11.applinzi.com/user.php",{
				params:{
		           action:"findaddress",
		           user:this.$store.state.user
				}
			}).then((res)=>{
				   console.log(res);
				   for(var i=0;i<res.data.length;i++){
				   		if(res.data.indexOf("|")){
				   			var newaddArr = res.data.split("|");
				   		}
				   }
				   console.log(newaddArr);
				   for(var i=0;i<newaddArr.length-1;i++){
				   		var last = JSON.parse(newaddArr[i]);
				   		this.addArr.push(last);
				   }   
				   console.log(this.addArr)
			})

		},
		methods:{
			back(){
				this.$router.push({path:history.go(-1)});
			},
			add(){
				this.$router.push({path:"/addaddress"});
			},
			updateadd(index){
				this.$router.push({path:"/updateadd"});
				this.$store.dispatch("changeindex",index);
			},
			del(index){
				this.dialogVisible = false;
				console.log(index)
				axios.get('http://3.class11.applinzi.com/user.php', {
				    params: {
				      index:index,
				      action:"deleteaddress",
				      user:this.$store.state.user,
				    }
				  })
				  .then(function (response) {
				    console.log(response);				    
				})
				axios.get("http://3.class11.applinzi.com/user.php",{
				params:{
		           action:"findaddress",
		           user:this.$store.state.user
				}
			}).then((res)=>{
				   console.log(res);
				   var newaddArr = res.data.split("|");
				   console.log(newaddArr);
				   var emp = [];
				   for(var i=0;i<newaddArr.length-1;i++){
				   		var last = JSON.parse(newaddArr[i]);
				   		emp.push(last);
				   }   
				   this.addArr  = emp;
				   console.log(this.addArr)
			})  
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.address{
	 .el-dialog{
	 	height: px2em(500px);
	 	p{
	 		font-size: px2em(24px);
	 		text-align: center;
	 	}
	 	.el-button{
	 		width: px2em(90px);
	 		font-size: px2em(26px);
	 	}
	 }
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
		  display: block;
		  width: px2em(60px);
		  height: px2em(40px);
		  border: 3px solid #fc4a00;
		  font-size: px2em(35px);
		  margin-right:px2em(5px);
		  margin-top: px2em(15px);
		  height:px2em(60px);
		  color: gray;
		  font-weight: bolder;
		  border-radius: 50%;
		  line-height: px2em(60px);
		  color: #fc4a00;
		  float:right;
		 }	 
		}
		.big{
			background-Color:#efefef;
			height: px2em(680px);
			.big-s{
				border: 1px dashed #fc4a00;
				height: px2em(200px);
				margin-top: px2em(30px);			
				background-Color:#fbf6f1;
				p{	
					margin-top: px2em(30px);
					span{
						font-size: px2em(28px);
						margin-left: px2em(40px);
					}
				}				
				.bot{
					border-bottom: 1px solid gray;
					height: px2em(40px);
				}
			}
			.bottom:after{
				display: block;
				content: "";
				clear: both;
			}
			.bottom{
				.s1{
					margin-top: px2em(25px);
					margin-left: px2em(40px);
					font-size: px2em(28px);
					color: gray;
					float: left;
				}
				.s2{
					float: right;
					margin-top: px2em(13px);
					color: gray;
					.fa{
						display: inline-block;
						margin-right: px2em(40px);
					}
				}
			}
		}
}



</style>