import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		type:{
			id:"",
			banner:""
		},
		detailhead:[true,false,false],
		detail:{
			banner:"",
			index:"",
			json:"",
			pet:"",
			type:"",
		},
		view:"",
		keyword:{
			title:"",
			value:"",
		},
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> neng
		bannerindex:"",
		showcart:false,
		user:"",
		addprod:{
			name:"",
			num:"",
			pet:""
		},
<<<<<<< HEAD
=======
		showcart:false,
		col:1,
>>>>>>> ruan
		messageArr:[]
=======
		showcart:false,
		col:1,
		activity: {
		   pet: "",
		   index: ""
		},
		messageArr:[],
		searchArr:[]
>>>>>>> neng
	},
	mutations:{
		CHANGE_TYPE(state,obj){
			state.type.id=obj.id;
			state.type.banner=obj.banner;
		},
		CHANGE_DETAIL_HEAD(state,arr){
			state.detailhead=arr
		},
		CHANGE_DETAIL(state,obj){
			state.detail.banner=obj.banner;
			state.detail.index=obj.index;
			state.detail.json=obj.json;
			state.detail.pet=obj.pet;			
		},
		CHANGE_DETAIL2(state,obj){
			state.detail.pet=obj.pet;
			state.detail.type=obj.type;
			state.detail.index=obj.index;
			state.detail.json=obj.json;
		},
		CHANGE_VIEW(state,view){
			state.view=view
		},
		CHANGE_KEYWORD(state,keyword){
			state.keyword=keyword;
			
		},
		CHANGE_SHOWCART(state,bol){
			state.showcart=bol
		},
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> neng
		CHANGE_BANNERINDEX(state,index){
			state.bannerindex=index
		},
		CHANGE_USER(state,user){
			state.user=user
		},
		CHANGE_ADDPROD(state,obj){
			state.addprod=obj
		},
		CHANGE_COLOR(state,num){
			state.col=num
		},
		SEND_MESSAGE(state,arr){
<<<<<<< HEAD
		   state.messageArr = arr;
		 }
=======
		CHANGE_COLOR(state,num){
			state.col=num
		},
		SEND_MESSAGE(state,arr){
			state.messageArr = arr;
		}
>>>>>>> ruan
=======
			state.messageArr = arr;
		},
		CHANGE_ACTIVITY(state, obj) {
		   state.activity.pet = obj.pet;
		   state.activity.index = obj.index;
		},
		CHANGE_SEARCHARR(state,arr){
		   state.searchArr = arr;
		}

>>>>>>> neng
	},
	actions:{
		changetype({commit},obj){
			commit("CHANGE_TYPE",obj)
		},
		changearr({commit},arr){
			commit("CHANGE_DETAIL_HEAD",arr)
		},
		changedetail({commit},obj){
			commit("CHANGE_DETAIL",obj)
		},
		changedetail2({commit},obj){
			commit("CHANGE_DETAIL2",obj)
		},
		changeview({commit},view){
			commit("CHANGE_DETAIL",view)
		},
		changekeyword({commit},keyword){
			commit("CHANGE_KEYWORD",keyword)
		},
		changeshowcart({commit},bol){
			commit("CHANGE_SHOWCART",bol)
		},
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> neng
		changebannerindex({commit},index){
			commit("CHANGE_BANNERINDEX",index)
		},
		changeuser({commit},user){
			commit("CHANGE_USER",user)
		},
		changeaddprod({commit},obj){
			commit("CHANGE_ADDPROD",obj)
		},

		changescolor({commit},num){
			commit("CHANGE_COLOR",num)
		},
		sendMessage({commit},arr){
<<<<<<< HEAD
		   commit("SEND_MESSAGE",arr)
=======
		changescolor({commit},num){
			commit("CHANGE_COLOR",num)
		},
		sendMessage({commit},arr){
			commit("SEND_MESSAGE",arr)
>>>>>>> ruan
		}
=======
			commit("SEND_MESSAGE",arr)

		},
		changeactivity({commit},activity){
            commit("CHANGE_ACTIVITY",activity)
       },
       changesearcharr({commit},arr){
       		commit("CHANGE_SEARCHARR",arr)
       }
>>>>>>> neng
	}
})
export default store