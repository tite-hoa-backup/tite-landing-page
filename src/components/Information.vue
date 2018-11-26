<template lang="pug">
  div#information
    div.container
      div.information__text
        h1.information__text--title
          | {{ $t('generic.title') }}
        h3.information__text--subtitle
          | {{ serviceKo }}는 나와 나의 이웃, 그리고 내가 사는 동네를 위한 폐쇄형 소셜 네트워크입니다.
          <br>
          | 나와 이웃이 온라인 상에서 소통하고 실제로 삶을 더 좋게 만들 수 있는 가장 쉬운 방법입니다.
          <br>
          | 많은 동네에서 이미 로라를 통해 집이라고 부를수 있는 더 행복하고, 안전한 곳을 만들고 있습니다.
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
  padding-left: $grid4x;
  padding-right: $grid8x;
  background-color: $brand;
  border-top: 1px solid $texteee;

  .information__text {
    width: 100%;
    color: #fff;
    margin: 0 auto;
    max-width: 640px;
    text-align: left;

    .information__text--title {
      font-weight: 700;
    }

    .information__text--subtitle {
      margin: 0 auto;
    max-width: 640px;
      font-weight: 400;
      @include font-size($grid4x);
    }
  }
}
</style>
