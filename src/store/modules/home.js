import * as types from '../mutationType'
// import * as API from '@/api/'
const state = {
  homeData: null
}
const getters = {
  getHomeData: state => state.homeData
}
const actions = {
  async getHomeData ({ state, commit }) {
    // const res = await API.getHomeData()

    // const promise = new Promise((resolve, reject) => {
    //   if (Number(res.code) === 0 && res.data) {
    //     commit(types.SET_HOME_DATA, res.data)
    //   }
    //   resolve(res)
    // })

    // return promise
  }
}
const mutations = {
  [types.SET_HOME_DATA] (state, data) {
    state.token = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
