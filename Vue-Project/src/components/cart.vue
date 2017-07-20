<template>
<div class="cart">
	<div class="head">
	   <span class="fa fa-angle-left back"></span>
	   <p>购物车</p >

  </div>
  <div class="content">
  		<div class="list">
  			<div class="img">
  				<img src="../../static/img/pic/guantou/p1/c.jpg"/>
  			</div>
  			<div class="text">
  				<p>宝路成犬精选鲜肝宝路成犬精选鲜肝宝路成犬精选鲜肝</p>
  			<div class="num">
  				<span class="price">3.90元 </span>
  				<button @click="add">+</button><button @click="reduce">-</button><input type="text" class="number" v-model="num" />
  			</div>
  			</div>
  			<div class="delete">
  				<span class="fa fa-close"></span>
  			</div>
  		</div>
  </div>
  <div class="foot">
  	<div class="money" >
  		<md-avatar class="md-avatar-icon md-warn" >
		  <md-icon><span class="fa fa-check"></span></md-icon>
		</md-avatar>
		<p>
			<span>总金额：<span class="total">14.30</span> 元</span>
			<span>已优惠：0.00 元</span>
		</p>
  	</div>
  	<div class="settlement">
  		<p>
  			结算(1)
  		</p>
  	</div>
  </div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0
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
				.number{
					float: right;
					border-top: 1px solid gray;
					border-bottom: 1px solid gray;
					border-left: 1px solid gray;
					width: px2em(120px);
					height: px2em(40px);
					font-size: px2em(20px);
					padding-left: px2em(10px);
				}
				button{
					float: right;
					border: 1px solid gray;
					width: px2em(40px);	
					font-size: px2em(28px);
					height: px2em(40px);	
					background: white;			
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
	position: absolute;
	bottom: 0;
	.money{
		float: left;
		width: px2em(550px);
		height: px2em(100px);
		background-color: #1F2D3D;
		.md-avatar{
			width: px2em(50px);
			height: px2em(50px);
			border-radius: 50%;
			margin: px2em(25px) px2em(15px);
			vertical-align: top;
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