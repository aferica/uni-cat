/**
 * 公共状态
 */
import * as types from '../mutationType'
// import * as API from '@/api/'
const state = {
  token: '', // 登录token
  userinfo: {}, // 用户信息
  platfrom: ''
}
const getters = {
  getToken: state => state.token,
  getUserinfo: state => state.userinfo,
  getPlatfrom: state => state.platfrom
}
const actions = {
  // 登录
  async userLogin ({ state, commit }, params) {
    // const res = await API.login(params)

    // const promise = new Promise((resolve, reject) => {
    //   if (Number(res.code) === 0 && res.data) {
    //     commit(types.SET_TOKEN, res.data.token)
    //     commit(types.SET_USERINFO, res.data.userInfo)
    //   }
    //   resolve(res)
    // })

    // return promise
  },
  async getCaptcha ({ state, commit }) {
    // const res = await API.captcha()

    // const promise = new Promise((resolve, reject) => {
    //   resolve(res)
    // })

    // return promise
  },
  async setPlatfrom ({ state, commit }, platfrom) {
    console.log(platfrom)
    commit(types.SET_PLATFROM, platfrom)
  }
}
const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  },
  [types.SET_PLATFROM] (state, platfrom) {
    state.platfrom = platfrom
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
