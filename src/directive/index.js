import Vue from 'vue'

// 按钮权限的控制
const has = Vue.directive('has', {
  inserted(el, bindings, vnode) {
    let flag = vnode.context.$store.state.btnPermission[bindings['value']]
    !flag && el.parentNode && el.parentNode.removeChild(el)
  }
})

// <el-input>的自动聚焦
const focus = Vue.directive('focus', {
  inserted(el, bindings, vnode) {
    const inp = el.getElementsByTagName('input')[0]
    inp.focus()
  }
})

// 点击所绑定元素的任意外部时，会触发相关的行为
const clickOutside = Vue.directive('clickOutside', {
  inserted(el, bindings, vnode) {
    // 在指令作用的元素上面绑定回调函数
    el.listener = function listener (e) {
      // 判断触发事件的元素是否为指令作用的元素
      const isEl = e.target === el || el.contains(e.target)
      if (isEl) return
      bindings.value()
    }
    document.addEventListener('click', el.listener)
  },
  unbind(el) {
    document.removeEventListener('click', el.listener)
  }
})

export {
  has,
  focus,
  clickOutside
}