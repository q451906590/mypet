<template>
	<div class="addaddress">
		<div class="head">
		   <span class="fa fa-angle-left back" @click="back"></span>
		   <p>新建地址 <span class="register" @click="save">保存</span></p >		   	
  		</div>
  		<div class="wrap"> 
  			<ul class="detail">
  				<li>
  					<div>
  						<label for="name">收货人:</label>
  						<input type="text" name="name" id="name" v-model="person.name"/>
  					</div>
  				</li>
  				<li>
  					<div>
  						<label for="phone">手机:</label>
  						<input type="text" name="phone" id="phone" v-model="person.phone"/>
  					</div>
  				</li>
  				<li>
  					<div>
  						<label for="home">所在地区:</label>
  						<input type="text" name="home" id="home" v-model="person.home"/>
  					</div>
  				</li>
  				<li>
  					<div>
  						<label for="detailadd">详细地址:</label>
  						<input type="text" name="detailadd" id="detailadd" v-model="person.detailadd"/>
  					</div>
  				</li>
  				<li>
  					<div>
  						<label for="mail">邮编:</label>
  						<input type="text" name="mail" id="mail" v-model="person.mail"/>
  					</div>
  				</li>
  			</ul>
  		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Toast } from 'mint-ui';
	export default{
		data:function(){
			return{
				person:{
					name:"",
					phone:"",
					home:"",
					detailadd:"",
					mail:""
				}
			}
		},
		methods:{
			save(){					
				axios.get('http://3.class11.applinzi.com/user.php', {
				    params: {
				      location:JSON.stringify(this.person),
				      action:"addaddress",
				      user:this.$store.state.user,
				    }
				  })
				  .then(function (response) {
				    console.log(response);
					Toast({
					  message: '添加成功',
					  iconClass: 'fa fa-check',
					  position:'middle',
					  className:'gg'
					});					
				})
				setTimeout(()=>{
					this.$router.push({path:history.go(-1)});
				},1000)
			},
			back(){
				this.$router.push({path:history.go(-1)})
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
	.addaddress{
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
		  display: block;
		  width: px2em(80px);
		  height: px2em(40px);
		  font-size: px2em(35px);
		  margin-right:px2em(5px);
		  margin-top: px2em(10px);
		  height:px2em(60px);
		  color: gray;
		  font-weight: bolder;
		  line-height: px2em(60px);
		  color: #fc4a00;
		  float:right;
		 }	 
		}
		.wrap{
			height: px2em(500px);
			.detail{		
				background-Color:#fff;
				margin-top:px2em(50px);		
				li{
					height: px2em(80px);
					border-bottom: 1px solid #989898;
					div{
						padding-top: px2em(20px);
						font-size: px2em(30px);
						background-Color:#fff;
						padding-left: px2em(60px);
						input{
							color: #989898;
						}
					}
				}
				
			}
		}
	}
</style>