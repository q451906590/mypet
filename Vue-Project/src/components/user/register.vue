<template>
 <div class="register" v-loading="loading" element-loading-text="拼命加载中">
  <div class="head">
   <span class="fa fa-angle-left back" @click="backhome"></span>
   <p>新用户注册</p >
   <span class="register" @click="goto">登录</span>
  </div>
  <div class="content">
   <div>
    <input type="text" placeholder="手机号" v-model="tel" onkeyup="this.value=this.value.replace(/[^0-9]+/,'')" @blur="blur"/>
    <md-button class="md-icon-button md-raised md-warn" v-show="telbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
	<md-button class="md-icon-button md-raised md-primary" v-show="blurbol" >
	  <md-icon><span class="fa fa-check"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
   </div>
   <div>
    <input type="password" placeholder="密码:字母开头，长度在6~18之间" v-model="pwd"/>
    <md-button class="md-icon-button md-raised md-warn" v-show="pwdbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
   </div>
   <div>
    <input type="password" placeholder="再次输入密码" v-model="againpwd"/>
     <md-button class="md-icon-button md-raised md-warn" v-show="againbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
   </div>
   <div id="CodeWrap">
    <input type="text" placeholder="请输入验证码" v-model="yzm"/>
    <div id="code"></div>
     <md-button class="md-icon-button md-raised md-warn yzm" v-show="yzmbol">
	  <md-icon><span class="fa fa-exclamation"></span></md-icon>
	  <md-tooltip md-direction="top">{{mes}}</md-tooltip>
	</md-button>
   </div>
   <div  class="checkbox">
    <md-checkbox id="my-test3" name="my-test3" v-model="checkbox" class="md-warn">我已经阅读并同意</md-checkbox>
   </div>
  <md-button class="md-raised md-warn" id="su" @click.native="register">确认注册</md-button>
   
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
    checkbox:true,
    yzm:"",
    tel:"",
    pwd:"",
    againpwd:"",
    telbol:false,
  	pwdbol:false,
    againbol:false,
    yzmbol:false,
    yzmres:"",
    mes:"",
    blurbol:"",
    loading:false
   }
  },
  methods:{
   goto(){
    this.$router.push({path:"login"})
   },
   backhome(){
   	 this.$router.push({path:"/"})
   },
   register(){
   	if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.tel))){
   		this.telbol=true;
   		this.mes="请输入正确的手机号码"
   	}else if(!(/^[a-zA-Z]\w{5,17}$/.test(this.pwd))){
   		this.pwdbol=true;
   		this.mes="请输入正确的密码"
   	}else if(this.pwd!=this.againpwd){
   		this.againbol=true;
   		this.mes="两次密码不相同"
   	}else if(this.yzmres==false){
   		this.yzmbol=true;
   		this.mes="验证码不正确"
   	}else if(this.blurbol!=true){
   		
   	}
   	else{
   		this.loading=true
   		axios.get("http://3.class11.applinzi.com/user.php",{
   			params:{
    				user:this.tel,
    				pwd:this.pwd,
    				action:"regist"
			}
		}).then((res)=>{
			if(res.data=="注册成功"){
				this.loading=false;
				this.$store.dispatch("changeuser",this.tel)
				this.$router.push({name:"mine"})
			}
		
		})
   	}
   },
   blur(){
   	if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.tel))){
   		this.telbol=true;
   		this.mes="请输入正确的手机号码"
   		setTimeout(()=>{
   			this.telbol=false;
   		},5000)
   	}else{
   		console.log(this.tel)
   		axios.get("http://3.class11.applinzi.com/user.php",{
   			params:{
    				user:this.tel,
    				action:"check"
			}
		}).then((res)=>{		
			if(res.data=="用户名已存在"){
				this.telbol=true;
				setTimeout(()=>{
		   			this.telbol=false;
		   		},5000)
				this.mes="用户名已存在";
			}else{
				this.blurbol=true;
				this.mes="可以注册"
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
    this.yzmres = verifyCode.validate(code);
    console.log(this.yzmres)
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
  width:px2em(650px);
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
 .checkbox{
  
  margin:px2em(10px) px2em(20px);
 }
 .md-button{
  margin-top: px2em(30px);
  font-size: px2em(30px);
  width: px2em(650px);
  height: px2em(70px);
 }
 #code{
  width: px2em(650px);
 }
}
</style>