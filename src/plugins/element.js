import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Input,
  Button,
  Container,
  Aside,
  Main,
  Menu,
  MenuItem,
  Submenu,
  Upload,
  Loading
} from 'element-ui'


const componentArr = [
  Input,
  Button,
  Container,
  Aside,
  Main,
  Menu,
  MenuItem,
  Submenu,
  Upload,
  Loading
]

componentArr.forEach(component => Vue.use(component))