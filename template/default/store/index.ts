import Vue from 'vue'
import Vuex from 'vuex'
import { Commit } from 'vuex'
import storagePlugin from './StoragePlugin'

Vue.use(Vuex)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

const store = new Vuex.Store({
  plugins: [storagePlugin],
  state: {},
  mutations: {},
  getters: {},
  actions: {}
})

export default store
