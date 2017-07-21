<template>
	<div class="detailhead">
		<span class="fa fa-chevron-left left" @click="goto"></span>
		<p class="content">
			<span :class="{red:arr[0]}" @click="show(0)">商品</span>
			<span :class="{red:arr[1]}" @click="show(1)">详情</span>
			<span :class="{red:arr[2]}" @click="show(2)">评价</span>
		</p>
		<span class="fa fa-star-o right"></span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			arr(){
				return this.$store.state.detailhead
			}
		},
		methods:{
			show(index){
				for(var i = 0;i<this.arr.length;i++){
					if(i==index){
						this.arr.splice(i,1,true)
						if(i==0){
							this.$router.push({path:"buy"})
						}else if(i==1){
							this.$router.push({path:"picture"})
						}else if(i==2){
							this.$router.push({path:"comment"})
						}
					}else{
						this.arr[i]=false
					}
				}
			},
			goto(id){
				this.$router.push({path:history.go(-1)})
				this.$store.dispatch("changearr",[true,false,false])
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.detailhead{
	height: px2em(65px);
	overflow:hidden;
	border-bottom:1px solid gray;
	background:white;
	.left{
		font-size:px2em(45px);
		line-height:px2em(65px);
		color:orange;
		margin-left:px2em(15px);
		float:left;
	}
	.right{
		font-size:px2em(45px);
		line-height:px2em(65px);
		color:orange;
		margin-right:px2em(10px);
		float:right;
	}
	.content{
		width: px2em(648px);
		float: left;
		text-align: center;
		line-height:px2em(65px);
		span{
			font-size:px2em(30px);
			margin: 0 40px;
			padding: 10px;
			transition: all 0.5s;
		}
		.red{
			border-bottom: 3px solid orange;
		}
	}
}
</style>