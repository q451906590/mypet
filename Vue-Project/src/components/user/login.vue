<template>
 <div class="login">
  <div class="head">
   <span class="fa fa-angle-left back"></span>
   <p>绑定手机</p >
   <span class="register" @click="goto">注册</span>
  </div>
  <div class="content">
   <div>
    <input type="text" placeholder="请输入手机"/>
   </div>
   <div>
    <input type="password" placeholder="请输入密码"/>
   </div>
   <div id="CodeWrap">
    <input type="text" placeholder="请输入验证码" v-model="yzm"/> 
    <div id="code"></div>
   </div>
  <md-button class="md-raised md-warn" id="su">确认登录</md-button>
  </div>
 </div>
</template>

<script>
 import "../../../static/js/gVerify.js"
 export default{
  data(){
   return{
    input:"",
    yzm:""
   }
  },
  methods:{
   goto(){
    this.$router.push({path:"register"})
   }
  },
  mounted:function(){
   var verifyCode = new GVerify("code");
   var inp = document.querySelector("#su");
   var $y = $("#CodeWrap input");
   $y.blur(()=>{
    var code = this.yzm;
    var res = verifyCode.validate(code);
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
  input{
  border: none;
  border-bottom: 1px solid darkgray;
  width:px2em(650px) ;
  padding:px2em(20px) px2em(20px);
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