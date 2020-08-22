// vue.config.js
module.exports = {
  // 配置转发mock路径
  devServer: {
    proxy: {
      '/api': {
        target: 'https://github.com/chihokyo/vue-gowhere/static/mock',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 测试部署
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-gowhere/'
    : '/'
}
