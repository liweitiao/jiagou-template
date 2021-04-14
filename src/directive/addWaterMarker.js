const addWaterMarker = {
  bind(el, { value }) {
    const words = value.text || '版权所有',
          region = el,
          font = value.font || '28px Microsoft JhengHei',
          textColor = value.textColor || 'rgba(180, 180, 180, 0.4)'
    
    var can = document.createElement('canvas')
    region.appendChild(can)
    can.width = 200
    can.height = 150
    can.style.display = 'none'
    var cans = can.getContext('2d')
    cans.rotate((-30 * Math.PI) / 180)
    cans.font = font
    cans.fillStyle = textColor
    cans.textAlign = 'left'
    cans.textBaseline = 'Middle'
    // FIXME
    cans.fillText(words, can.width / 10, can.height / 1)
    region.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
  }
}

export default addWaterMarker