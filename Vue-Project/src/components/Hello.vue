<template>
  <div class="hello">
  	<cartbtn></cartbtn>
  	<search></search>
	<swiper></swiper>
	<type></type>
	<router-view></router-view>
	</div>

</template>

<script>
import search from "./children/search"
import swiper from "./children/swiper"
import type from "./children/type"
import cartbtn from "./children/cartbtn"
export default {
	components:{
		swiper,
		search,
		type,
		cartbtn
	},
  	data () {
    return {
    }
  },
  methods:{
  	a(){

  	}
  }
}
</script>


<style  lang="scss" scoped type="text/css">
@import "../assets/func.scss";

</style>
