import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import detail from '@/components/detail'
import dog from '@/components/banner/dog'
import cat from '@/components/banner/cat'
import small from '@/components/banner/small'
import water from '@/components/banner/water'
import buy from '@/components/detailchildren/detailbuy'
import comment from '@/components/detailchildren/comment'
import picture from '@/components/detailchildren/picture'
import user from '@/components/user'
import login from '@/components/user/login'
import register from '@/components/user/register'
import search from '@/components/search'
<<<<<<< HEAD
import cart from '@/components/cart'
import total from '@/components/shoppingcart/total'
=======
>>>>>>> ruan
import mine from '@/components/mine'
import minedetail from '@/components/mine/minedetail'
import all from '@/components/mine/all'
import pay from '@/components/mine/pay'
import no from '@/components/mine/no'
import account from '@/components/mine/account'
<<<<<<< HEAD
=======
import cue from '@/components/mine/cue'
import have from '@/components/mine/have'
import gift from '@/components/mine/gift'
import favour from '@/components/mine/favour'


>>>>>>> ruan
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect:'/dog',
      children:[
      	{
      		path:"dog",
      		component:dog
      	},
      	{
      		path:"cat",
      		component:cat
      	},
      	{
      		path:"small",
      		component:small
      	},
      	{
      		path:"water",
      		component:water
      	}
      ]
    },
    {
    		path:"/detail",
    		name:'detail',
    		component:detail,
    		redirect:'detail/buy',
    		children:[
    			{
				path:"buy",
				component:buy
    			},
    			{
				path:"comment",
				component:comment
    			},
    			{
				path:"picture",
				component:picture
    			}
    		]
    },
    {
    		path:"/user",
    		name:'user',
    		component:user,
    		redirect:'user/login',
    		children:[
    			{
				path:"login",
				component:login
    			},
    			{
				path:"register",
				component:register
    			}
    		]
   },
     {
    		path:"/search",
    		name:'search',
    		component:search
<<<<<<< HEAD
   },  
    {
    		path:"/cart",
    		name:'cart',
    		component:cart
   }, 
   {
    		path:"/total",
    		name:'total',
    		component:total
   }, {
=======
   }, 
   {
>>>>>>> ruan
   		path:"/mine",
   		name:"mine",
   		component:mine		   		
   },
   {
  	 	path:"/minedetail",
   		name:"minedetail",
   		component:minedetail	,
   		redirect:'minedetail/all',
   		children:[
   			{
   				path:"all",
				component:all
   			},
   			{
   				path:"pay",
				component:pay
   			},
   			{
   				path:"no",
				component:no
   			}
   		]
   },
   {
   		path:"/account",
   		name:"account",
   		component:account	
<<<<<<< HEAD
=======
   },
   {
   		path:"/cue",
   		name:"cue",
   		component:cue,
   		redirect:"cue/have",
   		children:[
   			{
   				path:"no",
				component:no
   			},
   			{
   				path:"have",
   				component:have
   			}
   		]
   },
   {
   		path:"/gift",
   		name:"gift",
   		component:gift	,
   },
   {
   		path:"/favour",
   		name:"favour",
   		component:favour	,
>>>>>>> ruan
   }
  ]
})
