<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        div.hero__container
          h1.hero__container--text {{ serviceKo }} - {{ serviceEn }}
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
    position: relative;
    background-color: $black16;

    .hero__container {
      top: 50%;
      left: 50%;
      position: absolute;
      margin-right: -50%;
      transform: translate(-50%, -50%);

      .hero__container--text {
        color: #fff;
        text-align: center;

        @media #{$middle} {
          @include font-size($grid6x);
        }
      }
    }
  }
}
</style>
