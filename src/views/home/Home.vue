<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 引入局部组件
// HomeHeader -> home-header驼峰变短横线
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  // 声明局部组件
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus">

</style>
