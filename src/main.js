import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入fastClick库消除click事件毫秒延迟问题
import fastClick from 'fastclick'
// 引入样式reset用来消除移动端浏览器差异
import './assets/styles/reset.css'
// 引入样式border.css消除多倍屏像素问题
import './assets/styles/border.css'

Vue.config.productionTip = false
// 应用于到DOM
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
