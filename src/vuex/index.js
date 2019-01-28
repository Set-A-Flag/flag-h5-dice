// 设置vuex入口
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import states from './states'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  states,
  mutations,
  actions,
  getters
})
