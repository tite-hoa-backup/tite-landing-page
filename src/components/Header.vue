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
        p.header__left--text {{ serviceKo }}, {{ serviceEn }}

      div.header__right(
        v-scroll-to="{el: '#download', duration: 0, offset: -54}"
        v-tooltip.bottom="{content: '어플 다운로드 받기', delay: {show: 500, hide: 100}}"
      )
        p.header__right--text {{ $t('generic.download') }}
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

#header {
  top: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  height: $grid14x;
  font-weight: 900;
  background-color: #fff;
  @include box-shadow();

  // safari
  @supports (-webkit-appearance:none) {
    background-color: hsla(0, 0%, 100%, .8);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
            backdrop-filter: saturate(180%) blur(16px);
  }

  // edge
  @supports (-ms-ime-align:auto) {
    background-color: hsla(0, 0%, 100%, .8);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
            backdrop-filter: saturate(180%) blur(16px);
  }

  @media #{$ie}      { background-color: #fff; }
  @media #{$chrome}  { background-color: #fff; }
  @media #{$firefox} { background-color: #fff; }


  .header__left {
    cursor: pointer;
    height: $grid14x;
    display: inline-block;

    .header__left--img {
      padding: $grid2x 0;
    }

    .header__left--text {
      margin-left: $grid2x;
      display: inline-block;
      @include transform(translateY(-75%));
    }
  }

  .header__right {
    float: right;
    color: $brand;
    cursor: pointer;
    transition: color .25s ease;

    &:hover {
      color: $brand-hover;
    }

    .header__right--text {
      @include transform(translateY(-10%));
    }
  }
}
</style>
