<template lang="pug">
  div#service
    div.container
      h1.service__title {{ $t('generic.serviceTitle') }}

      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in serviceList"
          :key="key"
        )
          img.service__card--img(
            :src="'/src/assets/dist/' + key + '.svg'"
          )
          p.service__card--title(
          ) {{ value.title }}
</template>

<script>
export default {
  name: 'service',

  data () {
    return {
      serviceList: {
        events: {
          title: '다양한 동네 토픽',
        },
        store: {
          title: '이웃과의 중고장터',
        },
        food: {
          title: '동네 주변 맛집리뷰',
        }
      }
    }
  },

}
</script>

<style lang="scss">

#service {

  .service__title {
    margin-bottom: $grid8x;
    text-align: center !important;
  }

  .service__card {
    margin: 0 auto;
    @include grid-layout(3, 100px, $grid8x);

    @media #{$middle} {
      @include grid-layout(1, 100px, $grid8x);
    }

    .service__card--each {
      margin: 0 auto;
      margin-top: $grid4x;
      text-align: center !important;

      .service__card--img {
        height: $grid24x;
        display: inline-block;
        transition: transform .25s ease;

        &:hover {
          @include transform(scale(1.05));
        }
      }

      .service__card--title {
        font-weight: 700;
        margin: $grid2x 0 $grid6x;
        text-align: center !important;

        @media #{$pablet} {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
