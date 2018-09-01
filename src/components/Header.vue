<template lang="pug">
  div#header
    div.container
      div.header__left(
        v-scroll-to="{el: 'body', duration: 0}"
        v-tooltip.bottom="{content: '맨 위로', delay: {show: 500, hide: 100}}"
      )
        img.header__left--img(
          src="../assets/dist/launcher.svg"
        )
        p.header__left--text {{ serviceKo }} - {{ serviceEn }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'header-el',

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

#header {
  top: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  height: $grid14x;
  background-color: #fff;
  @include box-shadow();

  .header__left {
    cursor: pointer;
    height: $grid14x;
    display: inline-block;

    .header__left--img {
      padding: $grid2x 0;
    }

    .header__left--text {
      font-weight: 900;
      margin-left: $grid2x;
      display: inline-block;
      transform: translateY(-75%);
    }
  }
}
</style>
