<template>
  <div>
    <div class="title">
      <img class="mp-title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="mp-title">猜你喜欢</span>
    </div>
    <ul class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
      <li class="item">
        <img class="item-img" :src="item.url" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          title: '八达岭长城',
          desc: '八达岭长城',
          url: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_250x250_e1b08a5e.jpg'
        },
        {
          id: '0002',
          title: '北京乐多港万豪酒店汤乐宫温泉',
          desc: '北京乐多港万豪酒店汤乐宫温泉',
          url: 'https://imgs.qunarzz.com/sight/p0/1811/3d/3dcbea373cb752e4a3.img.jpg_200x200_be1cab05.jpg'
        },
        {
          id: '0003',
          title: '北京野生动物园',
          desc: '北京野生动物园',
          url: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg'
        },
        {
          id: '0004',
          title: '鸟巢',
          desc: '鸟巢',
          url: 'https://imgs.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_200x200_b58ea00b.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    .mp-title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      margin-left: .1rem
    .mp-title
      display: inline-block;
      height: .44rem
      color: #212121
      font-size: .32rem
      line-height: .44rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
