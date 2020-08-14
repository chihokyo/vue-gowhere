<template>
  <div class="wrapper">
    <swiper ref="mySwiper"
      :options="swiperOptions"
      v-if="showSwiper"
    >
      <swiper-slide
        v-for="(swiperImg,index) of list"
        :key="index"
      >
        <img class="swiper-img"
        :src="swiperImg.imgUrl"
        :alt="swiperImg.id"
        >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: () => {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        effect: 'fade'
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
  // data(){
  //   return {
  //     swiperOptions: {
  //     }
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
/**表示穿透，wrapper下面所有的样式都修改 */
.wrapper >>> .swiper-pagination-bullet-active
  background: #eee
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
