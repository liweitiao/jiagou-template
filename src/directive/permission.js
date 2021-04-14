// 按钮权限的控制
const permission = {
  inserted(el, bindings, vnode) {
    let flag = vnode.context.$store.state.btnPermission[bindings['value']]
    !flag && el.parentNode && el.parentNode.removeChild(el)
  }
}

export default permission