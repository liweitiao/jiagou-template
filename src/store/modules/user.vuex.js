export default {
  state: {
    user: '',
    ajaxToken: []
  },
  mutations: {
    pushToken(state, cancel) {
      // HACK: 这样实现可以跟踪vuex状态的变化路径，不建议直接push
      // state.ajaxToken = [...state.ajaxToken, cancel]
      state.ajaxToken.push(cancel)
    },
    clearToken(state) {
      // 依次调用取消请求的方法
      state.ajaxToken.forEach(cancel => cancel())
      state.ajaxToken = []
      console.log('已经全部取消请求！')
    }
  },
  actions: {}
}