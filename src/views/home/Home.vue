<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 引入局部组件
// HomeHeader -> home-header驼峰变短横线
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  // 声明局部组件
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus">

</style>
