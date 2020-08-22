<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 引入局部组件
// HomeHeader -> home-header驼峰变短横线
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
// 引入axios进行异步请求
import axios from 'axios'

export default {
  name: 'Home',
  // 声明局部组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      oldCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  // 用来清除缓存
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // 需要完成数据模拟 vue.config.js
      // axios.get('/api/index.json')
      // axios.get('/api/index.json?city=' + this.city)
      axios.get('/static/mock/index.json?city=' + this.city)
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      // 获取json数据包
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 在这里进行ajax请求
  mounted () {
    // console.log('mounted')
    this.oldCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 重新显示渲染会执行
    // console.log('activated')
    // 如果新旧选择城市不一样
    if (this.oldCity !== this.city) {
      // 重新发送axios请求
      this.oldCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus">

</style>
