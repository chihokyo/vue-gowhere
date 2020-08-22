// vue.config.js
module.exports = {
  // 配置转发mock路径
  devServer: {
    openPage: 'index.html',
    proxy: {
      '/api': {
        target: 'https://chihokyo.github.io/stack/mock',
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
