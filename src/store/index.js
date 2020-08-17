import Vue from 'vue'
import Vuex from 'vuex'
// 引入 localStorage
import state from './state.js'
// 引入 mutations
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations
  // // 方法1 这里是通过action调用的commit然后调用的 mutations 但是也可以直接通过 mutations
  // // 接受到了事件和数据
  // // action想要调用 mutations 要执行 commit ↑
  // actions: {
  //   // list.vue触发
  //   // 参数1 ctx，参数2 数据
  //   changeCity (ctx, city) {
  //     // ctx里面有commit方法
  //     // console.log(ctx)
  //     // console.log(city)
  //     // changeCityM 需要commit给 mutations的 参数2 数据
  //     ctx.commit('changeCityM', city)
  //   }
  // },

})
