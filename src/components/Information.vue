<template lang="pug">
  div#information
    div.container
      div.information__text
        h1.information__text--title
          | {{ $t('generic.title') }}
        h3.information__text--subtitle
          | {{ serviceKo }}는 나와 나의 이웃들을 위한
          <br>
          | 동네 기반 소셜 커뮤니티 서비스입니다
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'information',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
    }
  },

}
</script>

<style lang="scss">
#information {
  background-color: $brand;
  border-top: 1px solid $texteee;

  .information__text {
    width: 100%;
    color: #fff;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
