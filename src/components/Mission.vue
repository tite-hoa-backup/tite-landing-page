<template lang="pug">
  div#mission
    div.container
      div.information__text
        h1.information__text--title
          | 로라의 미션
        h3.information__text--subtitle
          | 로라의 미션은 이웃들이 함께 힘을 합쳐 더 견고하고, 안전하고, 행복한 커뮤니티를 만들 수 있는 믿을 수 있는 플랫폼을 우리나라 전체에 제공하는 것입니다.
          <br>
          <br>
          | 동네는 나에게 가장 중요하고 유용한 커뮤니티 중에 하나라고 믿기 때문에 이 회사를 설립했습니다. 우리는 우리나라 모든 이웃들이 로라의 플랫폼을 이용하여 더욱 견고하고 안전한 동네를 만들기를 바랍니다.
</template>

<script>
export default {
  name: 'mission',

  data () {
    return {

    }
  },

}
</script>

<style lang="scss">

#mission {
  padding-left: $grid4x;
  padding-right: $grid4x;
  border-top: 1px solid $stroke;

  .information__text {
    width: 100%;
    margin: 0 auto;
    max-width: 640px;
    text-align: left;

    .information__text--title {
      font-weight: 700;
    }

    .information__text--subtitle {
      font-weight: 400;
      @include font-size($grid4x);
    }
  }
}
</style>
