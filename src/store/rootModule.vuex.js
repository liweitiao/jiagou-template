import {authRoutes} from '@/router'
import axios from '@/utils/httpRequest'


const getTreeList = menuList => {
  let menu = [] // 用来渲染菜单
  let routeMap = {}
  let auths = []
  menuList.forEach(item => {
    auths.push(item.auth)
    item.children = []
    routeMap[item.id] = item
    if (item.pid === -1) {  // 根节点
      menu.push(item)
    } else {
      if (routeMap[item.pid]) {
        routeMap[item.pid].children.push(item)
      }
    }
  })

  // console.log('routeMap----menu----', routeMap, menu)
  return {menu, auths}
}

const formatList = (authRoutes, auths) => {
  return authRoutes.filter(route => {
    if (auths.includes(route.name)) {
      if (route.children) {
        route.children = formatList(route.children, auths)
      }
      return true
    }
  })
}

export default {
  state: {
    tokens: [],
    hasPermission: false,
    menuList: [],
    btnPermission: {
      'edit': false,
      'add': true
    }
  },
  mutations: {
    push_token(state, cancel) {
      state.tokens = [...state.tokens, cancel]
    },
    setMenuList(state, menu) {
      state.menuList = menu
      // console.log('state.menuList----', state.menuList)
    },
    setPermission(state) {
      state.hasPermission = true
    }
  },
  actions: {
    async getNewRoute({commit, dispatch}) {
      let { menuList } = await axios.get('/auth')
      console.log('menuList-----', menuList)
      let { menu, auths } = getTreeList(menuList)
      commit('setMenuList', menu)

      console.log('auths----', auths)
      console.log('authRoutes111-----', authRoutes)
      let needRoutes = formatList(authRoutes, auths)
      console.log('needRoutes333----', needRoutes)
      
      commit('setPermission')
      return needRoutes
    }
  }
}