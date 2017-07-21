// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(ElementUI)
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'white',
  warn: 'red',
  background: 'red'
})
Vue.material.registerTheme('white', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.material.registerTheme('gray', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'gray'
})
Vue.material.registerTheme('green', {
  primary: 'green',
  accent: 'green',
  warn: 'green',
  background: 'gray'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
template: '<App/>',
  components: { App }
})


