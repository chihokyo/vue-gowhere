<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// 引入局部组件
// HomeHeader -> home-header驼峰变短横线
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  // 声明局部组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style lang="stylus">

</style>
