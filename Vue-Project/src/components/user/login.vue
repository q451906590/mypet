<template>
 <div class="login" v-loading="loading" element-loading-text="拼命加载中">
  <div class="head">
   <span class="fa fa-angle-left back" @click="backhome"></span>
   <p>绑定手机</p >
   <span class="register" @click="goto">注册</span>
  </div>
  <div class="content" >
   <div>
    <input type="text" placeholder="请输入手机" v-model="tel"   onkeyup="this.value=this.value.replace(/[^0-9]+/,'')"/>
	<button class=" btn" v-show="telbol">
		<span class="fa fa-exclamation"></span>
		 <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</button>
   </div>
   <div>
    <input type="password" placeholder="请输入密码" v-model="pwd"/>
	<button class=" btn" v-show="pwdbol">
		<span class="fa fa-exclamation"></span>
		 <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</button>
   </div>
   <div id="CodeWrap">
    <input type="text" placeholder="请输入验证码" v-model="yzm"/> 
    <div id="code"></div>
	<button class="yzm btn" v-show="!yzmbol">
		<span class="fa fa-exclamation"></span>
		 <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</button>
   </div>
  <md-button class="md-raised md-warn" id="su" @click.native="login">确认登录</md-button>
  </div>
 </div>
</template>

<script>
 import "../../../static/js/gVerify.js"
 import axios from "axios"
 export default{
  data(){
   return{
    input:"",
    yzm:"",
    tel:"",
    pwd:"",
    telbol:false,
    pwdbol:false,
    yzmbol:true,
    mes:"",
    loading:false
   }
  },
  methods:{
   goto(){
    this.$router.push({path:"register"})
   },
   backhome(){
		this.$router.push({path:"/"})
	},
   login(){
   	if(this.yzmbol!=false){
   		this.loading=true;
   		axios.get("http://3.class11.applinzi.com/user.php",{
   			params:{
    				user:this.tel,
    				pwd:this.pwd,
    				action:"login"
			}
		}).then((res)=>{	
			if(res.data=="密码正确"){
				this.$store.dispatch("changeuser",this.tel)
				this.$router.push({path:"/mine"})
				this.loading=false;
				sessionStorage.userName = this.tel;
			}else if(res.data=="密码错误"){
				this.pwdbol=true;
				this.mes=res.data;
				this.loading=false;
			}else if(res.data=="用户名错误"){
				this.telbol=true;
				this.mes=res.data;
				this.loading=false;
			}
		})
   	}	
   }
  },
  mounted:function(){
   var verifyCode = new GVerify("code");
   var inp = document.querySelector("#su");
   var $y = $("#CodeWrap input");
   $y.blur(()=>{
    var code = this.yzm;
    this.yzmbol = verifyCode.validate(code);
    if(this.yzmbol==false){
    		this.mes="验证码错误"
    }
    $y.val("");
   }) 
  }
 }
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";

.head{
 height:px2em(60px);
 overflow:hidden;
 .back{
 	color:#fc4a00;
  font-size: px2em(60px);
  margin-left:  px2em(10px);
  float:left;
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
.content{
 width:px2em(650px);
 margin: px2em(80px) auto;

 div{
  margin:px2em(40px) 0;
   position: relative;
  input{
  border: none;
  border-bottom: 1px solid darkgray;
  width:px2em(650px) ;
  padding:px2em(20px) px2em(20px);
  }
  .btn{
   	border: none;
   	 position: absolute;
  	width: px2em(50px);
 	height: px2em(50px);
 	top: px2em(15px);
 	border-radius: 50%;
 	background-color: red;
 	font-size: px2em(30px);
 	color: white;
 	right: px2em(0px);
  }
   .yzm{
  	right: px2em(220px);
  }
 }
 #CodeWrap{
  position: relative;
  div{
   position: absolute;
   right: 0;
   top: px2em(-25px);
   width: px2em(200px);
   height: px2em(50px);
  }
 }
 
 .md-button{
  margin-top: px2em(30px);
  font-size: px2em(30px);
  width: px2em(650px);
  height: px2em(70px);
 }

}
</style>