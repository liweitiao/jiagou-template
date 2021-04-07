import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule.vuex'

Vue.use(Vuex)

const files = require.context('./modules/', false, /\.vuex.js$/)
files.keys().forEach( key => {
  // 模块的内容
  let store = files(key).default
  let moduleName = key.replace(/^\.\//, '').replace(/\.vuex.js$/, '')
  let modules = rootModule.modules || {}
  modules[moduleName] = store
  modules[moduleName].namespaced = true
  rootModule.modules = modules
  // console.log('rootModue--modules---', rootModule, modules)
})

// console.log('rootModule---', rootModule)
const store = new Vuex.Store(rootModule)

export default store
