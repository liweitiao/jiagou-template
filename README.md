# jiagou-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 附录：

## 命名规范

 参考 [Element](https://github.com/ElemeFE/element)

### 文件&文件夹

1.不要出现大写字母，请用中划线代替驼峰

2.文件名优先使用 index 表示该目录下默认文件

### css 命名

参考 [BEM 规范](https://www.cnblogs.com/coder-zyz/p/6749295.html)

## 目录结构

<pre>
|-- jiagou-template
|   |-- node_modules  //npm包
|   |-- public
        |-- mock //模拟接口的json数据
|   |-- src
        |-- assets  //静态资源
            |-- css
            |-- icons
            |-- images
        |-- components  //公共组件
        |-- config  //项目配置文件
        |-- directive  //自定义指令文件
        |-- mock  //模拟接口数据文件
        |-- pages  //页面
        |-- plugins  //插件
        |-- router  //页面路由配置
        |-- service  //接口文件
        |-- store //状态管理
        |-- utils //公共库
|   |-- tests  //测试文件
</pre>