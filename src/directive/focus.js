// <el-input>的自动聚焦
const focus = {
  inserted(el) {
    const inp = el.getElementsByTagName('input')[0]
    inp.focus()
  }
}

export default focus