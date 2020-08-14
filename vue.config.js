// vue.config.js
module.exports = {
  // 配置转发mock路径
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/static/mock',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}