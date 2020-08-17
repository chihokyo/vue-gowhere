<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>

import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票1',
          children: [
            {
              title: '成人成人联票1-1',
              children: [
                {
                  title: '成人成人成人联票1-1-1'
                }
              ]
            },
            {
              title: '成人成人联票2'
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '学生票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
