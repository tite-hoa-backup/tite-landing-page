<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        div.hero__container
          h1.hero__container--text
            | {{ serviceKo }}, {{ serviceEn }}
          p.hero__container--subtext
            | 진짜 이웃들의 소셜 커뮤니티

        button.hero__scrolldown(
          v-scroll-to="{el: '#service', duration: 0, offset: -56}"
        )
          i.fa.fa-angle-down
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'hero',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
      serviceEn: globalVar.serviceEn,
    }
  },

}
</script>

<style lang="scss">
@import '../style/style.scss';
$baseURI: '/src/assets/dist/hero.jpg';

#hero {
  width: 100%;
  background-image: url('#{$baseURI}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .hero__dim {
    height: 560px;
    max-height: calc(96vh - #{$grid14x});
    position: relative;
    background-color: $black38;

    .hero__container {
      top: 50%;
      left: 50%;
      color: #fff;
      text-align: center;
      position: absolute;
      margin-right: -50%;
      transform: translate(-50%, -50%);

      .hero__container--text {
        font-weight: 900;

        @media #{$pablet} {
          @include font-size($grid8x);
        }
      }

      .hero__container--subtext {
        font-weight: 900;
        margin-top: -#{$grid4x};
      }
    }

    .hero__scrolldown {
      left: 50%;
      color: #fff;
      bottom: $grid8x;
      width: $grid12x;
      height: $grid12x;
      position: absolute;
      display: inline-block;
      border: 1px solid #fff;
      transition: all .25s ease;
      transform: translateX(-50%);
      @include border-radius($grid12x);

      &:hover {
        background-color: $brand;
        border: 1px solid transparent;
      }

      .fa-angle-down {
        @include font-size($grid6x);
      }
    }
  }
}
</style>
