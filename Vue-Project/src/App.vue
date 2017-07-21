<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss"  type="text/css">
@import "assets/func.scss";
.mint-toast{
	width: 200px;
	height: 80px;
	span{
		font-size: px2em(35px);
		margin-top: px2em(18px);
	}
}
.gg{
			width: 200px;
			height: 180px;
			span{
				font-size: px2em(35px);
				margin-top: px2em(18px);
			}
		}
</style>
