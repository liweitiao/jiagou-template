/**
 * 使用代理解决跨域问题的配置
 */

export default {
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/'
}

// console.log('process_env', process.env)