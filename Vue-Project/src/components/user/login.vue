<template>
 <div class="login">
  <div class="head">
   <span class="fa fa-angle-left back" @click="backhome"></span>
   <p>绑定手机</p >
   <span class="register" @click="goto">注册</span>
  </div>
  <div class="content">
   <div>
    <input type="text" placeholder="请输入手机" v-model="tel" />
    <md-button class="md-icon-button md-raised md-warn" v-show="telbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
   </div>
   <div>
    <input type="password" placeholder="请输入密码" v-model="pwd"/>
    <md-button class="md-icon-button md-raised md-warn" v-show="pwdbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
   </div>
   <div id="CodeWrap">
    <input type="text" placeholder="请输入验证码" v-model="yzm"/> 
    <div id="code"></div>
     <md-button class="md-icon-button md-raised md-warn yzm" v-show="!yzmbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
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
    mes:""
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
  .md-button{
  	position: absolute;
  	width: px2em(50px);
 	height: px2em(50px);
 	top: px2em(-20px);
 	right: px2em(0px);
  }
   .yzm{
  	right: px2em(200px);
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