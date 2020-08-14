<template>
  <div class="icons">
    <swiper ref="mySwiper">
      <!-- 计算总共有多少页 -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- 针对这一页开始循环 -->
        <div class="icon"
             v-for="(item,index) of page"
             :key="index">
          <div class="icon-img">
            <img class="icon-img-content"
                :src="item.url"
                :alt="item.desc">
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
  data () {
    return {
      iconList: [
        {
          id: '0001',
          desc: '酒店',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: '0002',
          desc: '一日游',
          url: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          id: '0003',
          desc: '北京园博会',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png'
        },
        {
          id: '0004',
          desc: '香山公园',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'
        },
        {
          id: '0005',
          desc: '凤凰陵',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'
        },
        {
          id: '0006',
          desc: '古北水镇',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png'
        },
        {
          id: '0007',
          desc: '中国马镇',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'
        },
        {
          id: '0008',
          desc: '圆明园',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
        },
        {
          id: '0009',
          desc: '北京园博会4',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png'
        }
      ]
    }
  },
  // 计算属性来进行翻页
  computed: {
    pages () {
      // 新建一个数组k 第几页 v 那一页的数据
      const pages = []
      // 进行循环
      this.iconList.forEach((item, index) => {
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
