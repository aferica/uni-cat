import Vue from 'vue'
import App from './App'

import store from './store'  
Vue.prototype.$store = store

import http from './utils/http'
Vue.prototype.$http = http

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
