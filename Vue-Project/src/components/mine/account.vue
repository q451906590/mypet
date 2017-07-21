<template>
	<div class="account">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>我的账户</p >
  		</div>
  		<ul class="first">
  			<li><span class="left">我的余额</span> <span class="right">0.00元</span></li>
  			<li><span class="left">我的神奇豆</span> <span class="right">10个</span></li>
  			<li><span class="left">我的神奇币</span> <span class="right">0个</span></li>
  		</ul>
  		<ul class="first">
  			<li><span class="left">手机号</span> <span class="right2">{{user}}</span></li>
  			<li><span class="left">登陆密码</span> <span class="right2" @click="dialogFormVisible = true">修改</span></li>
  			<li><span class="left">支付密码</span> <span class="right2" @click="dialogFormVisible2 = true">未设置</span></li>
  			<li><span class="left">收货地址</span> <span class="right2" @click="set">设置</span></li>
  		</ul>
  		<div class="bg">
  			<img src="../../../static/img/mine/home.png" alt="无法加载" @click="backhome"/>		
  		</div>
  		<md-button class="md-raised md-warn" @click="logout">退出当前账户</md-button>
  		 <transition name="el-zoom-in-top">
		       	 <div v-show="show2" class="transition-box">两次密码不一致</div>
		 </transition>
  		 <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="请输入密码" :label-width="formLabelWidth">
		      <el-input v-model.number="form.pwd" auto-complete="off" type="password"></el-input>		      
		    </el-form-item>
		    <el-form-item label="确认密码" :label-width="formLabelWidth">
		     <el-input v-model.number="form.repwd" auto-complete="off" type="password"></el-input>	      
		    </el-form-item>		    
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="danger" @click="change1">确 定</el-button>
		  </div>
		</el-dialog>
		<!---------------------------------------------------------------------------------------->
		<el-dialog title="请设置支付密码" :visible.sync="dialogFormVisible2">
		  <el-form :model="form2">
		    <el-form-item label="请输入密码" :label-width="formLabelWidth2">
		      <el-input v-model.number="form2.pwd" auto-complete="off" type="password"></el-input>		      
		    </el-form-item>
		    <el-form-item label="确认密码" :label-width="formLabelWidth">
		     <el-input v-model.number="form2.repwd" auto-complete="off" type="password"></el-input>	      
		    </el-form-item>		    
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="danger" @click="change2">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		data:function(){
			return{
				show2: false,
		        dialogFormVisible: false,
		        dialogFormVisible2:false,
		        form: {
		          pwd: '',
		          repwd:'',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        form2: {
		          pwd: '',
		          repwd:'',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth: '120px',
		        formLabelWidth2: '120px'
			}
		},
		computed:{
			user(){
				var a = this.$store.state.user.substring(0,3);
				var b = this.$store.state.user.substring(8,12);
				var c = a+"****"+b;
				return c;
			}
		},
		methods:{
			backhome(){
				this.$router.push({path:"/"});
			},
			back(){
				this.$router.push({path:"/mine"});
			},
			change1(){			
				if(this.form.repwd==""||this.form.pwd==""||this.form.pwd!=this.form.repwd){
					this.show2=true;
					this.form.pwd="";
					this.form.repwd="";
					setTimeout(()=>{
						this.show2=false;
					},1000)						
				}else{
					this.dialogFormVisible=false;
					//更新数据库
				}
			},
			change2(){	
				console.log(this.show2)
				if(this.form2.repwd==""||this.form2.pwd==""||this.form2.pwd!=this.form2.repwd){
					this.show2=true;
					this.form2.pwd="";
					this.form2.repwd="";
					setTimeout(()=>{
						this.show2=false;
					},1000);		
				}else{
					this.dialogFormVisible2=false;
					//更新数据库
				}
			},
			set(){
				this.$router.push({path:"/address"})
			},
			logout(){
				this.$store.dispatch("changeuser","");
				this.$store.dispatch("sendMessage","")
				Toast({
				  message: '退出成功',
				  position: 'middle',
				  duration: 600
				});
				setTimeout(()=>{
					this.$router.push({path:"/"})
				},600)
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.account{
	  position:relative;
	 background-Color:#efefef;
	 .el-form{	 	
	 	width: px2em(320px);
	 	height: px2em(100px);
	 }
	 .el-form-item{
	 	.el-input{
	 		width: px2em(200px);
	 		height: px2em(50px);
	 	}
	 }
	 .transition-box{
	 	position: absolute;
	 	left: 50%;
	 	top: 50%;
	 	transform:translate(-50%);	 	
	 	width: px2em(250px);
	 	height: px2em(100px);
	 	line-height: px2em(100px);
	 	text-align:center;
	 	border-radius:55px;
	 	font-size: px2em(28px);
	 	background:black;
	 	font-weight:bolder;
	 	color:white;
	 	margin-left:px2em(50px);
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
		}
		
		ul{
			margin-top: px2em(40px);
			background-color:#fff ;
			li:after{
			content: "";
			display: block;
			clear: both;
			}
			li{
				height: px2em(100px);
				line-height: px2em(100px);
				border-bottom: 1px solid grey;
			}
			.right{
				float: right;
				 color: #fc4a00;
				 font-size: px2em(28px);
				margin-right: px2em(50px);
				font-weight: bolder;
			}
			.right2{
				float: right;
		     	color: darkslategray;

			    /*font-size: px2em(28px);*/

			    font-size: px2em(28px);

				margin-right: px2em(50px);
			}
			.left{
				margin-left: px2em(30px);
				font-size: px2em(28px);			
			}
		}
		.bg{
			height: px2em(350px);
			position: relative;
			img{
				position: absolute;


				width: px2em(120px);

				top: 50%;
				left: px2em(30px);
				transform: translateY(-50%);
			}
		}
		.md-raised{
			width: 100%;
			height: px2em(70px);
			font-size: px2em(34px);
		}
}
</style>