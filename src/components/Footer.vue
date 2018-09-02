<template lang="pug">
  div#footer
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | © {{ thisYear }} {{ companyKo }}. {{ companyEn }}., All Rights Reserved.

        p.footer__copyright--info
          span 사업자등록번호: {{ companyID }}
          span 대표이사: {{ companyCEO }}
          span 주소: {{ companyAdr }}
          span 대표전화: {{ callTo }}

        p.footer__terms
          router-link.footer__terms--each(
            :key="key"
            :to="'tos/' + value"
            target="_blank"
            v-tooltip.bottom="{content: key + '(새 탭)', delay: {show: 500, hide: 100}}"
            v-for="(value, key) in tos"
          ) {{ key }}
</template>

<script>
import {globalVar} from '@/globalVar'
import Geolocate from '@/pages/tos/Geolocate'
import Privacy from '@/pages/tos/Privacy'
import Terms from '@/pages/tos/Terms'

export default {
  name: 'footer-el',

  data () {
    return {
      year: '',
      companyKo: globalVar.companyKo,
      companyEn: globalVar.companyEn,
      companyID: globalVar.companyID,
      companyCEO: globalVar.companyCEO,
      companyAdr: globalVar.companyAdr,
      callTo: globalVar.callTo,
      tos: {
        위치기반서비스이용약관: 'geolocate',
        개인정보처리방침: 'privacy',
        타이트이용약관: 'terms',
      }
    }
  },

  computed: {
    thisYear() {
      return this.year = new Date().getFullYear()
    }
  },
}
</script>

<style lang="scss">
@import '../style/style.scss';

#footer {
  padding: $grid8x 0;
  border-top: 1px solid $stroke;

  .footer__copyright {
    color: $text999;

    .footer__copyright--text,
    .footer__copyright--info,
    .footer__terms {
      @include font-size($grid3x);

      span {
        @include font-size($grid3x);

        &:not(:last-child) {

          &:after {
            content: " | ";
          }
        }
      }
    }

    .footer__copyright--text {
      color: $text333;
      font-weight: 900;
    }

    .footer__copyright--text,
    .footer__copyright--info {
      margin-bottom: -#{$grid2x};
    }

    .footer__terms--each {
      color: $text999;
      transition: color .25s ease;

      &:hover {
        color: $text333;
      }

      &:not(:first-child) {

        &::before {
          content: " | ";
          color: $text999;
        }
      }
    }
  }
}

</style>
