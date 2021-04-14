// 防抖，使用时可传入回调函数和延迟时间
const debounce = {
  inserted(el, bindings) {
    const {callback, delay} = bindings.value
    let timer
    el.addEventListener('click', () => {
      if (timer) clearTimeout(timer)
      if (!el.disabled) {
        el.disabled = true
        callback()
        timer = setTimeout(() => {
          el.disabled = false
        }, delay)
      }
    })
  }
}

export default debounce