<template>
<div class="cart">
	<div class="head">
	   <span class="fa fa-angle-left back" @click="back"></span>
	   <p>购物车</p >

  </div>
  <div class="contentlist">
   <transition name="el-zoom-in-top">
  	 <div class="content" v-for ="(item,index) in prodlist" v-show="probol">
  		<div class="list">
  			<div class="img">
  				<img :src="item.smallimg"/>
  			</div>
  			<div class="text">
  				<p>{{item.name}}</p>
  			<div class="num">
  				<span class="price">{{item.price}}元 </span>
  				 <span style="float: right;">x{{item.num}}</span>
  			</div>
  			</div>
  			<div class="delete">
  				<span class="fa fa-close" @click="deletepro(index)"></span>
  			</div>
  		</div>
  	</div>
  </transition>
  </div>
  <div class="foot">
  	<div class="money" >
		<button class="btn">
			<span class="fa fa-check"></span>
		</button>
		<p>
			<span>总金额：<span class="total">{{total}}.00</span> 元</span>
			<span>已优惠：0 元</span>
		</p>
  	</div>
  	<div class="settlement" @click="pay">
  		<p>
  			结算({{num}})
  		</p>
  	</div>
  </div>
</div>
</template>

<script>
	 import axios from "axios"
	export default{
		data(){
			return{
				probol:true
			}
		},
		computed:{
			prodlist(){
				return this.$store.state.messageArr
			},
			total(){
				var total=0;
				var arr=this.$store.state.messageArr;
				for(var i=0;i<arr.length;i++){
					total+=parseInt(arr[i].price)*arr[i].num
				}
				return total
			},
			num(){
				return this.$store.state.messageArr.length
			}
		},
		methods:{
			add(){
				this.num++
			},
			reduce(){
				if(this.num>0){
					this.num--
				}
			},
			back(){
				this.$router.push({path:history.go(-1)})
			},
			pay(){
				this.$router.push({name:"total",params:{total:this.total}})
			},
			deletepro(index){
			axios.get("http://3.class11.applinzi.com/user.php",{
		         params:{
		           user:this.$store.state.user,
		           index:index,
		           action:"deleteprod"
		      }
		    }).then((res)=>{ 
		    		this.probol=false;
		    		setTimeout(()=>{
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
				messageArr.pop()
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
		     	this.$store.dispatch("sendMessage",messageArr);
		     })		
		    		},500)
			})
		}
	}
}
</script>

<style  lang="scss" scoped type="text/css">
@import "../assets/func.scss";
.head{
 height:px2em(60px);
 overflow:hidden;
 border-bottom:1px solid gray;
 .back{
  font-size: px2em(60px);
  margin-left:  px2em(10px);
  float:left;
  color:#fc4a00;
 }
 p{
  width: px2em(680px);
  text-align: center;
  height:px2em(60px);
  font-size: px2em(35px);
  line-height: px2em(60px);
  float: left;
 }
}
.contentlist{
	padding-bottom: px2em(100px);
}
.content{
	.list{
		overflow:hidden;
		padding:px2em(20px) 0;
		
		border-bottom: 1px solid gray;
		div{
			float: left;
		}
		.img{
			width: px2em(200px);
		}
		.text{
			width: px2em(400px);
			padding: px2em(20px) 0 0 px2em(20px) ;
			line-height: px2em(30px);
			height: px2em(200px);
			.num{
				width: px2em(380px);
				height: px2em(40px);
				margin-top:px2em(50px);
				.price{
					color: red;
					font-size: px2em(30px);
					margin-right: px2em(0px);
				}
			}
		}
		.delete{
			border-left: 1px solid gray;
			height: px2em(200px);
			width: px2em(100px);
			margin-left: px2em(20px);
			span{
				font-size: px2em(40px);
				color: gray;
				margin:px2em(50px) px2em(30px);
				
			}
		}

	}
}
.foot{
	width: 100%;
	height: px2em(100px);
	position: fixed;
	bottom: 0;
	.money{
		float: left;
		width: px2em(550px);
		height: px2em(100px);
		background-color: #1F2D3D;
		.btn{
			width: px2em(50px);
			height: px2em(50px);
			border-radius: 50%;
			font-size: px2em(30px);
			border: none;
			background-color:#FC4A00 ;
			margin: px2em(25px) px2em(15px);
			vertical-align: top;
			span{
				color: white;
			}
		}
		p{	
			width: px2em(260px);
			line-height: px2em(35px);
			margin-top: px2em(10px);
			display: inline-block;
			font-size: px2em(32px);
			color: gray;
			.total{
				color: white;
			}
		}
	}
	.settlement{
		float: left;
		width: px2em(200px);
		height: px2em(100px);
		background-color: #fc4a00;
		p{

			font-size: px2em(30px);
			color: white;
			width: px2em(180px);
			height: px2em(30px);
			text-align: center;
			margin: px2em(40px) px2em(10px);
		}
	}
}
</style>