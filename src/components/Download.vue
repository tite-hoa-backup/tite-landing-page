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
          v-tooltip.bottom="{content: value.title, delay: {show: 500, hide: 100}}"
        )
          img.download__badge--each(
            :src="value.src"
          )

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
        ios: {
          src: '/src/assets/dist/appstore.svg',
          title: 'iPhone 앱스토어 다운받기',
          href: globalVar.iosStore,
        },
        android: {
          src: '/src/assets/dist/playstore.svg',
          title: 'Android 구글 플레이스토어 다운받기',
          href: globalVar.androidStore,
        }
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
      display: inline-block;
      margin-bottom: $grid12x;

      .download__badge--each {
        width: $grid32x;
        height: $grid10x;
        transition: opacity .25s ease;

        &:hover {
          opacity: .5;
          cursor: pointer;
        }
      }

      &:not(:first-child) {
        margin-left: $grid2x;
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
