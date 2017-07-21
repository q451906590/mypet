<template>
	<div class="addcart">
		<div class="cart" @click="goto">
			<span class="item" v-model="num" v-show="num">{{num}}</span>
			<p><span class="fa fa-shopping-cart"></span></p>
			<p>购物车</p>
		</div>
		<div class="add" @click="showcart">
			<p>加入购物车</p>
		</div>
		<div class="buy" >
			<p>立即购买</p>
		</div>
	</div>
</template>

<script>
import axios from "axios"
import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			num(){
				if(this.$store.state.messageArr.length>0){
					return this.$store.state.messageArr.length
				}else{
					return false;
				}
			}
		},
		methods:{
			goto(){
				this.$router.push({name:"cart"})
			},
			showcart(){
				if(this.$store.state.showcart==true){
					if(this.$store.state.user==""){
						this.open("请先登录")
						this.$router.push({path:"/user/login"})
					}else if(this.$store.state.addprod.num==0){
						this.open("数量不能为空")
					}else{
						axios.get("http://3.class11.applinzi.com/user.php",{
				   			params:{
				    				user:this.$store.state.user,
								prod:JSON.stringify(this.$store.state.addprod),
				    				action:"add"
							}
						}).then((res)=>{	
							this.open("加入成功")
							axios.get("http://3.class11.applinzi.com/user.php",{
						         params:{
						           user:this.$store.state.user,
						           action:"select"
						      }
						    }).then((res)=>{ 
						     	var data = res.data.split("|");
						     	for(var i=0;i<data.length-1;i++){
						     		data[i]=JSON.parse(data[i]);
						     	}
								var messageArr = data;
								messageArr.pop();
								for(var i=0;i<messageArr.length;i++){
								var obj=messageArr[i];
								for(var j=i+1;j<messageArr.length;){
								if(obj.name==messageArr[j].name){
									messageArr[i].num+=messageArr[j].num;
									messageArr.splice(j,1);
										}else{
											j++;
										}
									}
								}
								console.log(messageArr);
						     	this.$store.dispatch("sendMessage",messageArr);
						     })
						})
					}
				}
				this.$store.dispatch("changeshowcart",!this.$store.state.showcart)
			},
			open(mes){
				Toast({
				  message: mes,
				  position: 'middle',
				  duration: 2000
				});
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.addcart{
	width: px2em(750px);
	
	height:px2em(80px) ;
	background-color:white;
	.cart{
		text-align:center;
		float:left;
		width:px2em(150px);
		height:px2em(80px) ;
		position:relative;
		span{
			font-size: px2em(40px);
		}
		p{
			line-height:px2em(35px) ;
			font-size: px2em(30px);
		}
		.item{
			color: white;
			font-size: 20px;
			text-align: center;
			position: absolute;
			border: 1px solid red;
			top: px2em(-10px);
			right: px2em(40px);
			width: px2em(30px);
			height: px2em(30px);
			border-radius: 50%;
			background-color: red;
		}
	}
	.add{
		float:left;
	
		width:px2em(300px);
		height:px2em(80px) ;
		background-color: orange;
		p{
			text-align: center;
			line-height:px2em(80px) ;
			font-size:px2em(30px)  ;
			color: white;
		}
	}
	.buy{
		float:left;
	
		width:px2em(300px);
		height:px2em(80px) ;
		background-color:red;
		p{
			text-align: center;
			line-height:px2em(80px) ;
			font-size:px2em(30px)  ;
			color: white;
		}
	}
}

</style>