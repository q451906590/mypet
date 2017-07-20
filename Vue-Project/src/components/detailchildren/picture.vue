<template>
	<div class="picture">
		<div class="drag" v-loading="loading" element-loading-text="拼命加载中">
			<p @click="goto('buy')"><span class="fa fa-angle-double-up"></span> 向下滑动，查看图文详情 <span class="fa fa-angle-double-up"></span></p>
		</div>
		<div class="bigpicture" v-for="item in picture">
			<img :src="item" alt="" />
		</div>
	</div>
</template>

<script>
import prod from "../../../static/product.json"	
import search from "../../../static/search.json"
import draggable from 'vuedraggable'
	export default{
		components: {
		　　draggable
		},
		data(){
			return{
				loading:false,
				tags:""
			}
		},
		computed:{
			picture(){
			if(this.$store.state.detail.json=="prod"){
				return prod[this.$store.state.detail.pet][this.$store.state.detail.banner].content[this.$store.state.detail.index].detailimg;
			}else if(this.$store.state.detail.json=="search"){
				return search.result[this.$store.state.detail.pet][this.$store.state.detail.type][this.$store.state.detail.index].graphicimg
			}
			}
		},
		
		mounted:function(){
		},
				methods:{
			goto(id){
				this.loading=true
				setTimeout(()=>{
					this.loading=false
						this.$router.push({path:id})
						this.$store.dispatch("changearr",[true,false,false])
				},2000)
					
				
			}
		}
	}
	
</script>

<style  lang="scss" scoped type="text/css">
@import "../../assets/func.scss";
.picture{
padding-top: px2em(68px) ;

}
.drag{
	height: px2em(100px);
	padding: px2em(25px) 0;
	background-color: rgb(227,227,227);
	p{
		height: px2em(50px);
		line-height: px2em(50px);
		text-align: center;
		font-size: px2em(30px);
	}
}
</style>