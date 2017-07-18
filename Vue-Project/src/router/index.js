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
//  			{
//				path:"picture",
//				component:picture
//  			}
    		]
   },
     {
    		path:"/search",
    		name:'search',
    		component:search
   },  
  ]
})
