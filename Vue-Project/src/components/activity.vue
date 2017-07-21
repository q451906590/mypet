<template>
  <div class="activity">
    <div class="head">
      <span class="fa fa-angle-left back" @click="goBack"></span>
      <p>全球购</p >
    </div>
    <div class="content" >
      <div class="bigimg">
        <img :src="arr.bigimg[activity.index]" alt="" class="img">
      </div>
      <div class="title">
        <p class="big_title">{{arr.tit[activity.index].big_title}}</p>
        <p class="small_title">{{arr.tit[activity.index].small_title}}</p>
      </div>
      <div class="list">
        <div class="small_list" v-for="item in listArr">
          <img :src="item.smallimg" alt="" class="list_img">
          <p class="list_title">{{item.title}}</p>
          <p class="list_price">￥{{item.price}}<span class="oldprice">￥{{Math.round(item.price*1.1*100)/100}}</span><button class="list_btn"><i class="fa fa-cart-plus cart"></i></button></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from '../../static/search.json'
  export default{
     methods:{
       goBack(){
           this.$router.push({path:history.go(-1)})
       },
     },
    data(){
      return{
        pet:"",
        arr:[],
        listArr:[],
        dog:{
            bigimg:['../../static/img/activity/dog/big1.jpg','../../static/img/activity/dog/big2.jpg','../../static/img/activity/dog/big3.jpg','../../static/img/activity/dog/big4.jpg'],
            tit:[
              {big_title:'渴望野性的味道',small_title:'尽享顶级口味，提供容易消化的优质蛋白质，绝无杂物和副产品'},
              {big_title:'成就爱犬非凡一生',small_title:'尽情享受顶级口味，提供优质蛋白质，绝无杂物和副产品'},
              {big_title:'专注宠物营养品',small_title:'让威斯康宠物营养品开始在市面上出现，推动宠物营养品行业的发展'},
              {big_title:'消暑器具洗护用品',small_title:'让宠物享受到夏日凉爽，不用害怕中暑，让狗狗拥有愉快的心情'}
            ]
          },
          cat:{
            bigimg:['../../static/img/activity/cat/big1.jpg','../../static/img/activity/cat/big2.jpg','../../static/img/activity/cat/big3.jpg','../../static/img/activity/cat/big4.jpg'],
            tit:[
              {big_title:'玛氏旗高端罐头品牌',small_title:'希宝以其丰富的口味及难以抗拒的口感，很快成为全世界猫咪所钟爱的猫粮品牌'},
              {big_title:'雪诗雅意大利品牌',small_title:'与来自世界全面高质量生产商有紧密合作伙伴关系扮演一个决定性角色'},
              {big_title:'做宠物的健康使者',small_title:'让宠物拥有健康，专注与做宠物保健，科技领先，送你绿色健康新理念'},
              {big_title:'猫砂品牌用品',small_title:'让猫咪远离肮脏，从此不用害怕猫咪肮脏的感觉，可以和猫咪愉快玩耍'}
            ]
          }
      }
    },
    computed: {
      activity() {
        if (this.$store.state.activity.pet == "dog") {
          this.arr = this.dog;
          if(this.$store.state.activity.index == 0){
            this.listArr = search.result.dog.dogfood;
          }else if(this.$store.state.activity.index == 1){
            this.listArr = search.result.dog.lingshi;
          }else if(this.$store.state.activity.index == 2){
            this.listArr = search.result.dog.baojian;
          }else if(this.$store.state.activity.index == 3){
            this.listArr = search.result.dog.xiangbo;
          }
        } else {
          this.arr = this.cat;
          if(this.$store.state.activity.index == 0){
            this.listArr = search.result.cat.dry;
          }else if(this.$store.state.activity.index == 1){
            this.listArr = search.result.cat.lingshi;
          }else if(this.$store.state.activity.index == 2){
            this.listArr = search.result.cat.baojian;
          }else if(this.$store.state.activity.index == 3){
            this.listArr = search.result.cat.yongpin;
          }
        }
        return this.$store.state.activity;
      }
    },
    watch:{
      activity(){
      }
    },
    mounted:function(){
      var text=this.$el.querySelectorAll(".list_title");
      for(var i=0;i<text.length;i++){
        text[i].innerText=text[i].innerText.substring(0,10).concat("....")
      }
    }
  }
</script>
<style lang="scss" type="text/css" scoped>
  @import "../assets/func.scss";
  .head{
    height:px2em(70px);
    overflow:hidden;
    position: fixed;
    top:0;
    background: white;
    border-bottom:1px solid #e5e5e5;
    width:100%;
  .back{
    font-size: px2em(70px);
    margin-left:  px2em(10px);
    float:left;
    color: #fc4a00;
  }
  p{
    width: px2em(640px);
    text-align: center;
    height:px2em(70px);
    font-size: px2em(35px);
    line-height: px2em(70px);
    float: left;
  }
  .register{
    font-size: px2em(30px);
    margin-right:px2em(10px);
    height:px2em(70px);
    line-height: px2em(70px);
    float:right;
  }
  }
  .content{
     margin-top:px2em(70px);
  .bigimg{
    width: 100%;
    height:px2em(384px);
  .img{
    width: 100%;
    height: 100%;
  }
  }
  .title{
    height: px2em(145px);
    text-align: center;
    padding:px2em(30px) px2em(40px);
  .big_title{
    font-size: px2em(36px);
    font-weight: bolder;
    margin-bottom: px2em(20px);
  }
  .small_title{
    font-size: px2em(28px);
    line-height: px2em(30px);
    color: #666;
  }
  }
  .list{
    overflow:hidden;
  .small_list{
    width: px2em(370px);
    border: 1px solid #e5e5e5;
    float:left;
    margin-right:px2em(5px);
    margin-bottom:px2em(10px);
    position:relative;
  .list_img{
    width: px2em(377px);
    height: px2em(377px);
  }
  .list_title{
    color: black;
    font-size: px2em(28px);
    line-height: px2em(30px);
    font-weight: bold;
    margin-bottom: px2em(25px);
    margin-left: px2em(15px);
  }
  .list_price{
    font-size: px2em(32px);
    padding: px2em(10px);
    .oldprice{
    font-size: px2em(25px);
    color: #666;
    text-decoration: line-through;
  }
  .list_btn{
    position: absolute;
    right: px2em(5px);
    bottom: px2em(5px);
    width:px2em(55px);
    height:px2em(56px);
    background:rgb(241,93,81);
    border:none;
    border-radius: px2em(8px);
  .cart{
    color: white;
    font-size: px2em(40px);
  }
  }
  }
  }
  }
  }



</style>
