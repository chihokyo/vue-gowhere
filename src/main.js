import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入fastClick库消除click事件毫秒延迟问题
import fastClick from 'fastclick'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入样式reset用来消除移动端浏览器差异
// @代表根目录src
import '@/assets/styles/reset.css'
// 引入样式border.css消除多倍屏像素问题
import '@/assets/styles/border.css'
// 引入图标css
import '@/assets/styles/iconfont.css'
// 引入轮播图css
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
// 应用于到DOM
fastClick.attach(document.body)
// 使用插件
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
