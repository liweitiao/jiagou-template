# 技术文档

---

## 源码文件目录

前端项目源码位于 `/src/` 下，即另 `@ = /src/`

### API
> `@/service/` 目录下是所有接口函数

> 所有接口文件都要导入 `@/utils/httpRequest` 文件，该文件为axios的二次封装，文件中有详细用法说明

### API函数规范

#### API用法示例
<pre>
import axios from '@/utils/httpRequest';
save(data) {
    return axios.post('/projectList/save', data);
}
</pre>

#### API调用方式
<pre>
API.save(data).then(() => {
              this.$msg({
                message: '保存成功',
                type: 'success'
              });
              this.$router.back();
              // this.$router.push({
              //   path: '路由',
              //   query: {key: value}
              // });
            });
</pre>

### 自定义指令： @/directive

<pre>
import Vue from 'vue'
import focus from './focus'

Vue.directive('focus', focus)
</pre>

### 插件：@/plugins
#### 主程序：main.js
<pre>
import '@/plugins/element'
</pre>

### 路由： @/router/

### 状态管理： @/store/

> 统一管理项目状态
