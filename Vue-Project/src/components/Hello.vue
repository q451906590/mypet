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
import axios from 'axios'
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
  mounted(){
  	if(sessionStorage.userName!=undefined){
  		  	this.$store.dispatch("changeuser",sessionStorage.userName)
  	
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
  	}
  },
}
</script>


<style  lang="scss" scoped type="text/css">
@import "../assets/func.scss";

</style>
