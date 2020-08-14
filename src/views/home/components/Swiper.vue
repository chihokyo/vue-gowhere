<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(swiperImg,index) of swiperList" :key="index">
        <img class="swiper-img"
        :src="swiperImg.imgUrl"
        :alt="swiperImg.id">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: () => {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        effect: 'fade'
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
        }
      ]
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
