// const path = require('path')

// function resolve(dir) {
//     return path.join(__dirname, dir)
// }

module.exports = {
    devServer: {
        host: 'localhost',
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        // 可以更改别名
        // config.resolve.alias.set('@', resolve('src'))
        // prefetch有兼容性问题，可考虑去掉默认配置中的prefetch配置，真正实现路由懒加载
        config.plugins.delete('prefetch')
    }
}