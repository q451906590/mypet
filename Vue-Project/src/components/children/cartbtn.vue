<template>
	<div class="cartbtn">
		<button @click="goto">
			<span class="fa fa-cart-plus"></span>
			<span>
				{{num}}
			</span>
		</button>
	</div>
</template>

<script>
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
					return "";
				}
			}
		},
		methods:{
			goto(){
				this.$router.push({name:"cart"})
			}
		}
	}
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
button{
	width: px2em(100px);
	height: px2em(100px);
	position: fixed;
	background-color:rgba(277,72,0,0.7);
	bottom: px2em(200px);
	right: px2em(50px);
	z-index: 2;
	border-radius: 50%;
	font-size: px2em(50px);
	border: none;
	color: white;
	span:nth-child(2){
		position:absolute;
		top:0;
		left:0;
		width:px2em(50px);
		border-radius:50%;
		font-size:px2em(40px);
		background:red;
		text-align:center;
	}
}
</style>