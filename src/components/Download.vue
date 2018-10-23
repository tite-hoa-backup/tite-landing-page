<template lang="pug">
  div#download
    div.container
      h1.download__title {{ $t('generic.downloadHeader') }}

      div.download__badge
        a.download__badge--link(
          v-for="(value, key) in badges"
          :key="key"
          target="_blank"
          :href="value.href"
          v-tooltip.bottom="{content: value.title + '에서 다운받기', delay: {show: 500, hide: 100}}"
        )
          progressive-img.download__badge--each(
            :src="value.src"
          )
          span.download__badge--text {{ value.title }}

      div.download__mockup
        img.download__mockup--img(
          src="/src/assets/dist/screen.png"
        )
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'download',

  data () {
    return {
      badges: {
        android: {
          src: '/src/assets/dist/playstore.png',
          title: 'Google Play',
          href: globalVar.androidStore,
        },
        ios: {
          src: '/src/assets/dist/appstore.png',
          title: 'App Store',
          href: globalVar.iosStore,
        },
      }
    }
  },

}
</script>

<style lang="scss">

#download {
  height: 640px;
  overflow-y: hidden;
  border-top: 1px solid $texteee;

  @media #{$tablet} {
    height: 560px;
  }

  .download__title {
    text-align: center;
    margin-bottom: $grid8x;
  }

  .download__badge {
    width: 100%;
    outline: none;
    margin: 0 auto;
    text-align: center;
    display: inline-block;

    .download__badge--link {
      height: $grid10x;
      display: inline-block;
      border-radius: $grid16x;
      margin-bottom: $grid12x;
      padding: $grid2x $grid6x 0;
      border: 1px solid $texteee;

      &:first-child {
        margin-right: $grid4x;

        @media #{$ip6} {
          margin-right: $grid;
        }

        @media #{$mobile} {
          margin-right: 0;
        }
      }

      .download__badge--each {
        width: $grid6x;
        margin-right: $grid2x;
        vertical-align: bottom;
      }

      .download__badge--text {
        color: $text777;
        font-weight: 700;
        vertical-align: bottom;
      }
    }
  }

  .download__mockup {
    text-align: center;

    .download__mockup--img {
      width: 320px;
      margin: 0 auto;

      @media #{$pablet} {
        width: 280px;
      }
    }
  }
}
</style>
