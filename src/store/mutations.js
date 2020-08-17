export default {
  changeCityM (state, city) {
    // 参数1 state 指的是传入的数据
    state.city = city
    // 使用localStorage 记住选择城市状态
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
