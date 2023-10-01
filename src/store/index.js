import Vue from 'vue'
import Vuex from 'vuex'
import settings from './settings'
import project from './project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    settings,
    project
  },
  strict: true
})
