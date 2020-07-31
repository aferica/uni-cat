import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import home from './modules/home'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
    home
  },
  strict: debug
})
