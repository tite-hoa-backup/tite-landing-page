<template lang="pug">
  div#information
    div.container
      div.information__text
        h3.information__text--title
          | {{ serviceKo }}는 나와 나의 이웃들을 위한 '동네' 기반 소셜 커뮤니티 서비스입니다.
        p.information__text--paragraph
          | 지금 우리 동네에서 무슨 이벤트가 일어나고 있는지, 어떤 모임이 인기있는지, 어느 맛집이 유명한지 궁금하지 않나요? 불특정다수에 의해 쓰여진 영양가없는 리뷰가 아닌, 우리 동네 주민들이 만들어가는 살아있는 동네 리뷰! {{ serviceKo }}와 함께, 지금 내가 살고있는 우리 동네를 조금 더 즐기며 알아가보세요.
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

  .information__text {
    width: 45%;

    // .information__text--title {
    //   text-align: center;
    // }

    // .information__text--paragraph {
    //   text-align: center;
    // }
  }
}
</style>
