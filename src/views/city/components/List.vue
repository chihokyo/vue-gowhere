<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
          <div class="title border-topbotom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{ this.currentCity }}</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
              v-for="city of hot "
              :key="city.id"
              @click="handleCityClick(city.name)"
            >
              <div class="button">{{ city.name }}</div>
            </div>
          </div>
      </div>
      <!-- 2次循环 第一次循环取得字母 -->
      <div class="area"
        v-for="(city, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbotom">{{ key }}</div>
        <div class="item-list">
          <!-- 第二次循环取得城市 -->
          <div class="item border-bottom"
            v-for="item of city"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入滚动插件
import BScroll from '@better-scroll/core'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // vuex 修改
      // 当修改city的时候诱发changeCity的action，传递city
      // // 方法1 action调用的 commit 然后调用的 mutations
      // this.$store.dispatch('changeCity', city)
      // // 方法2 直接通过 commit
      // this.$store.commit('changeCityM', city)
      // this.$router.push('/')
      // 方法3 展开运算符
      this.changeCityM(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCityM'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
