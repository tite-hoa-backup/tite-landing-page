<template lang="pug">
  div#app
    vue-progress-bar
    router-view
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'app',

  data () {
    return {
    }
  },

  metaInfo: {
    title: globalVar.serviceKo + ', ' + globalVar.serviceEn,
    titleTemplate: '%s',
    meta: [
      {
        name: 'keywords',
        content: '로컬,라이프,Local,Life,이웃,커뮤니티,아파트,SNS,일상,맘카페,중고마켓,장터,카카오스토리,동네,리뷰,맛집,소통,소셜,소셜네트워크,카페,중고,마켓,후기,주민,모임,청원,민원,투표,인기,지역,밴드,블로그,로컬라이프,로라,localLife,관리사무소,입주자,육아,맘스,공동구매',
      },
    ],
  },

  mounted () {
    this.$Progress.finish()
  },

  // load progressbar
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },

}
</script>

<style lang="scss">

</style>
