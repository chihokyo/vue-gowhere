<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <!-- 计算总共有多少页 -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- 针对这一页开始循环 -->
        <div class="icon"
             v-for="(item,index) of page"
             :key="index"
        >
          <div class="icon-img">
            <img class="icon-img-content"
                :src="item.imgUrl"
                :alt="item.desc"
            >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  // 计算属性来进行翻页
  computed: {
    pages () {
      // 新建一个数组k 第几页 v 那一页的数据
      const pages = []
      // 进行循环
      this.list.forEach((item, index) => {
        // 计算有多少页
        const page = Math.floor(index / 8)
        // 如果那一页还没有数据
        if (!pages[page]) {
          // 先清空
          pages[page] = []
        }
        // 然后添加数据
        pages[page].push(item)
      })
      // 最后计算出来的就是一个数组
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
