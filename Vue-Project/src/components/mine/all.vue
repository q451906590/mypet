<template>
	<div class="all">
		<div v-for="(item,index) in arr">
			<p>待付款</p>
			<div class="detail"></div>
		</div>
	</div>
</template>
		
		
<script>
	export default{
		data:function(){
			return{
				arr:[1,2,3]
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	@import "../../assets/func.scss";
</style>