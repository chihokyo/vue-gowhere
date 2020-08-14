<template>
  <div>
    <div class="title">
      <span class="mp-title">周末去哪儿</span>
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          title: '八达岭长城',
          desc: '八达岭长城',
          url: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg'
        },
        {
          id: '0002',
          title: '北京乐多港万豪酒店汤乐宫温泉',
          desc: '北京乐多港万豪酒店汤乐宫温泉',
          url: 'https://imgs.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg'
        },
        {
          id: '0003',
          title: '北京野生动物园',
          desc: '北京野生动物园',
          url: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .mp-title
      display: inline-block;
      height: .44rem
      color: #212121
      font-size: .32rem
      line-height: .44rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
