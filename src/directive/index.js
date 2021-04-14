import Vue from 'vue'
import permission from './permission'
import focus from './focus'
import debounce from './debounce'

Vue.directive('permission', permission)
Vue.directive('focus', focus)
Vue.directive('debounce', debounce)

// // 按钮权限的控制
// export const has = Vue.directive('has', {
//   inserted(el, bindings, vnode) {
//     let flag = vnode.context.$store.state.btnPermission[bindings['value']]
//     !flag && el.parentNode && el.parentNode.removeChild(el)
//   }
// })

// // <el-input>的自动聚焦
// const focus = Vue.directive('focus', {
//   inserted(el) {
//     const inp = el.getElementsByTagName('input')[0]
//     inp.focus()
//   }
// })

// // 点击所绑定元素的任意外部时，会触发相关的行为
// const clickOutside = Vue.directive('clickOutside', {
//   inserted(el, bindings, vnode) {
//     // 在指令作用的元素上面绑定回调函数
//     el.listener = function listener (e) {
//       // 判断触发事件的元素是否为指令作用的元素
//       const isEl = e.target === el || el.contains(e.target)
//       if (isEl) return
//       bindings.value()
//     }
//     document.addEventListener('click', el.listener)
//   },
//   unbind(el) {
//     document.removeEventListener('click', el.listener)
//   }
// })

// // 防抖，使用时可传入回调函数和延迟时间
// const debounce = Vue.directive('debounce', {
//   inserted(el, bindings) {
//     const {callback, delay} = bindings.value
//     let timer
//     el.addEventListener('click', () => {
//       if (timer) clearTimeout(timer)
//       if (!el.disabled) {
//         el.disabled = true
//         callback()
//         timer = setTimeout(() => {
//           el.disabled = false
//         }, delay)
//       }
//     })
//   }
// })

// const addWaterMarker = Vue.directive('addWaterMarker', {
//   bind(el, { value }) {
//     const words = value.text || '版权所有',
//           region = el,
//           font = value.font || '28px Microsoft JhengHei',
//           textColor = value.textColor || 'rgba(180, 180, 180, 0.4)'
    
//     var can = document.createElement('canvas')
//     region.appendChild(can)
//     can.width = 200
//     can.height = 150
//     can.style.display = 'none'
//     var cans = can.getContext('2d')
//     cans.rotate((-30 * Math.PI) / 180)
//     cans.font = font
//     cans.fillStyle = textColor
//     cans.textAlign = 'left'
//     cans.textBaseline = 'Middle'
//     // FIXME
//     cans.fillText(words, can.width / 10, can.height / 1)
//     region.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
//   }
// })

// export {
//   has,
//   focus,
//   clickOutside,
//   debounce,
//   addWaterMarker
// }