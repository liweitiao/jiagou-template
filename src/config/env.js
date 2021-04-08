/**
 * 使用cors解决跨域问题的配置
 */
 let baseURL

 switch (process.env.NODE_ENV) {
   // FIXME: 接口改成各项目对应的地址
   case 'development':
      baseURL = 'http://localhost:8040';
      break
   case 'test':
      baseURL = 'http://localhost:8041';
      break
   case 'prev':
      baseURL = 'http://localhost:8042';
      break
   case 'production':
      baseURL = 'http://localhost:8043';
      break
   default:
      baseURL = 'http://localhost:8040';
      break
}

export default {
  baseURL
}