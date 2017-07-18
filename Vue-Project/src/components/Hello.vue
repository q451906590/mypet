<template>
  <div class="hello">
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
export default {
	components:{
		swiper,
		search,
		type,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped type="text/css">
@import "../assets/func.scss";

</style>
