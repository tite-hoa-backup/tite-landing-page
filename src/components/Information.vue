<template lang="pug">
  div#information
    div.container
      div.information__text
        h1.information__text--title
          | {{ $t('generic.title') }}
        h3.information__text--subtitle
          | {{ serviceKo }}는 나와 나의 이웃을들 위한 폐쇄형 로컬 네트워크입니다.
          <br>
          | 집이라고 부를수 있는 더 행복하고, 더 안전한곳을 만들기 위해 이미 많은 이웃들이 로라를 사용중입니다.
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
  padding-left: $grid8x;
  padding-right: $grid8x;
  background-color: $brand;
  border-top: 1px solid $texteee;

  .information__text {
    width: 100%;
    color: #fff;
    margin: 0 auto;
    text-align: center;

    .information__text--subtitle {
      margin: 0 auto;
      max-width: 560px;
      // font-weight: 400;
      @include font-size($grid5x);
    }
  }
}
</style>
