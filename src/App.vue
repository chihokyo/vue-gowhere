<template>
  <div id="app">
    <!-- keep-alive 路由内容放到内存里面
    下一次执行无需渲染，执行 mounted -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">

</style>
